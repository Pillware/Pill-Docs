# Extending the editor inside the engine

## Summary

A project, and any extension, can additionally have its own **editor module**. That module can add panels with its own egui widgets, register editor tools that turn a component's data into handles in the viewport, extend another crate's tool, and react to editor actions through callbacks that can also correct or refuse an edit. For example, `pill_spline_editor` registers the `spline` tool, which makes a spline's control points and tangents draggable. `pill_physics_editor` registers the `collider` tool, which resizes a collider by its face, radius and height handles. The curve and the collider wireframe themselves are component gizmos declared in the runtime crates (`pill_spline`, `pill_physics`), not editor-module code.

An editor module is a crate that only an editor host builds, loads and reloads. The code calls it an **editor crate**. It is an extension's `<folder>_editor` crate, a project's `<package>_editor` crate, or one of the editor's own modules under `modules/editor/`, such as the egui shell `pill_editor_shell`. The development host finds every one of them by convention. No settings key names one.

An editor module is an ordinary loadable module: the same wrapper crate, the same entry points, the same reload transaction. Three things make it different. The host resolves it only in the editor posture. It loads after the crates it extends, and reloads whenever they do. And everything it gives the editor goes through request queues that the editor executable ties to the module's liveness, so the editor never calls into an image that has been replaced.

This page explains how that works: discovery, build and load order, failure handling, reload coupling, how registrations stay safe across a reload, and the limits of the design. For how to write one, see [Extending the editor](../../user_guide/editor/extending_editor.md). For the editor's overall architecture, see [How the editor works](editor_implementation.md).

## At a glance

|                           | Extension editor crate                                           | Editor-only extension                                       | The editor's own module                                              | Project editor crate                                              |
| ------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Location                  | `extensions/<folder>/modules/editor/`, beside `modules/runtime/` | `extensions/<folder>/modules/editor/`, the folder's only crate | `modules/editor/<crate>/`, tagged with `editor_frontend`          | `<PROJECT_PATH>/<package>_editor/`                                |
| Example                   | `pill_spline_editor`                                             | none in the repository today                                | `pill_editor_shell`, the egui shell                                  | `editor_api_editor` (a test project)                              |
| Loaded when               | its folder has a loaded runtime crate                            | always, in every editor session                             | always, in every editor session of its frontend                      | the project has the folder                                        |
| Wrapper crate             | `extensions/<folder>/generated/host_module_<crate>`              | the same                                                    | `editor/generated/host_module_<crate>`                               | `projects_generated/host_module_<package>_editor`                 |
| Owner of its ECS systems  | `extension_owner(index)`                                         | `extension_owner(index)`                                    | `extension_owner(index)`                                             | `SystemOwner::PROJECT_EDITOR`                                     |
| Loads after               | every runtime crate                                              | every runtime crate and every folder editor crate           | every extension crate, editor crates included                       | the project                                                       |
| Reloads when              | its sources change, or a runtime crate in its folder reloads     | its sources change                                          | its sources change                                                   | its sources change, or the project reloads                       |
| Hot patching              | yes, with the `pill_hot_scan` function inventory                 | yes                                                         | yes                                                                  | no: every edit is a reload                                        |
| First load fails          | setup fails, the editor does not start                           | logged, the editor continues, retry possible                | logged, the editor continues, retry possible (the shell's safe mode) | logged, the editor continues without it until restart             |

Load order in an editor host:

```text
  one cargo batch builds every module below, the project editor crate included
  ─────────────────────────────────────────────────────────────────────────────
  extensions list
    1. <renderer>_data                       (always first)
    2. the project's `modules:` entries      (runtime crates)
    3. editor crates of those folders        (folder order, the renderer's folder included)
    4. editor-only folders' crates           (name order)
    5. the editor's own modules              (name order: pill_editor_shell, ...)
  verify_module_roots()
  the project
  the project editor crate                   (if `<PROJECT_PATH>/<package>_editor/` exists)
```

## Why are editor modules separate artifacts?

Editor code must never reach a build that runs without the editor, and it must be able to depend on the editor's shared library, `pill_editor_core`, which only the editor links.

If editor code lived in a runtime crate, every posture would compile it: `pill_standalone`, the shipping bundle and the web build would all link `pill_editor_core` and egui for code that never runs. Feature flags could hide it, but every engine feature a module enables changes the dependency graph, and the host and every module must resolve the same graph (a mismatch fails at load time with "procedure could not be found"). A separate crate that only the editor posture resolves keeps every other posture's graph untouched.

A separate artifact also reloads on its own. Editing a callback rebuilds one small DLL instead of the extension or the project it belongs to.

> **Example:** `pill_physics` is listed by a project. `pill_standalone` builds and loads `pill_physics` only. `pill_editor` builds and loads `pill_physics`, then `pill_physics_editor`, which registers the collider tool. The shipping bundle refuses an `_editor` name in `modules:` outright, so the tool's code cannot be shipped by accident.

## How does the host find editor modules?

The host finds them by naming convention, in `HostConfig::from_environment_in_posture`. Only the editor posture looks for them: `pill_editor` starts its host with `HostConfig::from_environment_for_editor_frontend("egui")`, which sets `load_editor_crates`. `HostConfig::from_environment`, which every other frontend uses, never does.

### Extension editor crates

`resolve_editor_crates` takes the folders of the resolved runtime extensions (plus the renderer's folder) and checks each one for `<folder>/modules/editor/Cargo.toml`:

1. **Folder editor crates.** For each runtime folder, in order, the editor crate is added once if it exists and passes the frontend filter.
2. **Editor-only folders.** Every other folder under `extensions/`, sorted by name, whose only crate is its editor crate. Folders starting with `_` and the older `rendering/` folder are never searched. These crate names are returned as `first_load_optional`.

A folder's editor crate is the crate in its `modules/editor/` (`ExtensionCrateLocation::is_editor_crate`): the location decides, not the name. The name must agree with it all the same. `validate_extension_crate_names` stops the host at start-up when the crate in `modules/editor/` is not named `<folder>_editor` (`EditorCrateNameMismatch` when the suffix is missing, `ExtensionFolderNameMismatch` when the rest differs), and when a runtime crate's name ends in `_editor` (`RuntimeCrateNameMismatch`). A crate named `pill_other_editor` in `pill_other/modules/runtime/` is therefore refused, never loaded as an editor crate.

The workspace member glob is `extensions/*/modules/*`, so every crate in a folder's `modules/` is a workspace member. Extension crates are named `pill_*` by convention, and so are their folders, because a folder is named after its runtime crate.

### The frontend tag

An editor crate can name the editor frontend it was written for:

```toml
[package.metadata.pill]
editor_frontend = "egui"
```

`declared_editor_frontend` reads this with a text scan, so the host takes no TOML dependency for one string. An untagged crate loads under every editor frontend. A crate tagged for another frontend is left out silently. A crate tagged `pill_ui`, the retired editor, is refused with `RetiredEditorFrontend`, because skipping it would drop its editor part without a word.

### The editor's own modules

The editor's UI is not an extension. It lives beside the editor frontends and the shared core, in `modules/editor/pill_editor_shell/`, and the host finds it with a third rule. `resolve_editor_modules` reads every directory directly under `modules/editor/`, skips `generated/`, and takes each crate whose manifest carries the frontend tag:

- **Here the tag is required.** The two editor frontends (`pill_editor`, `pill_web_editor`) and the shared core (`pill_editor_core`) carry none, and that is what tells them apart from a module. A crate tagged for another frontend is left out, and a `pill_ui` tag is refused as above.
- **The location marks it as editor-only, not the name.** `pill_editor_shell` has no `_editor` suffix. `modules:` cannot reach it anyway, because `resolve_extensions` only searches `extensions/`, and `generate_shipping_bundle.py` refuses its name in `modules:` explicitly.
- **Its wrapper lives in `modules/editor/generated/`**, as `host_module_<crate>`. The `editor/generated/*` workspace glob finds it, and a tracked `README.md` there keeps that glob from matching nothing on a fresh clone. For the same reason the editor folder's own glob is `editor/pill_*`, not `editor/*`.
- **It loads last**, after every extension crate, and its name joins `first_load_optional`, so a shell that fails to build leaves the editor running in safe mode.
- **No runtime crate's reload cascades into it.** Its `ExtensionConfig::folder` is `editor`, which no extension folder carries.

`prune_stale_host_module_wrappers` removes a wrapper in `modules/editor/generated/` that the current run does not load, exactly as it does in the extension folders. A `pill_standalone` run therefore removes the shell's wrapper, and the next editor start writes it again.

### The project editor crate

`resolve_project_editor_crate` checks for `<PROJECT_PATH>/<package>_editor/Cargo.toml`, where `<package>` is the project's name (`ProjectModuleConfig::name`: the package name of a Rust project, the `.csproj` file name of a C# one). It applies the same frontend filter, then writes the crate's wrapper member, `projects_generated/host_module_<package>_editor`, whose source is one line: `<crate>::__pill_module_entry_points!();`. The existing `projects_generated/*` workspace glob picks it up as a member.

`prune_stale_project_editor_wrappers` runs in **every** posture. It removes each `host_module_*` member under `projects_generated/` except the current project's, so a host without the editor, such as `pill_standalone`, removes them all. The next editor start writes the wrapper again.

### Why is listing one in `modules:` refused?

Because an editor crate never stands alone: it is compiled against its folder's runtime crates and only makes sense loaded after them, in an editor. `resolve_extensions` refuses any name ending in `_editor` with `EditorCrateListed` ("extension X is an editor crate: it loads with its extension in an editor host, never from `modules:`"). `generate_shipping_bundle.py` refuses the same names, so a shipping or web bundle cannot link one either.

## How are editor modules built and loaded?

All of them are built in the same cargo invocation as every other module at startup (`build_extension_batch`), so an editor module costs no extra cargo start-up. The project editor crate is announced as a planned build of kind `editor`.

Loading then follows the list in [At a glance](#at-a-glance):

- **Extension editor crates load through the same loop as every extension**, with `ExtensionSlot::start` and an owner from `extension_owner(index)`. They come after every runtime crate, so each finds its extension's components and resources already registered.
- **The project editor crate loads after the project** (Step 4b of `DevHost` setup), because it exists to change the editor the project runs in. It gets its own source watcher and the reserved owner `SystemOwner::PROJECT_EDITOR`.

### Why does the project editor crate have its own owner?

Every ECS system is registered under an owner (`SystemOwner`), and a reload clears the ECS systems of the owner that reloads. If the project editor crate shared `SystemOwner::PROJECT`, a reload of either would clear the other's systems. Taking the next extension index would collide with a module that the editor's safe mode is waiting to retry. So the value is reserved, like the renderer's, and the loader logs its `kind` as `project editor` instead of `extension`.

## What happens when a first load fails?

It depends on which kind failed, because each kind uses a different `FirstLoadFailure` policy:

| Kind                     | Policy                         | What happens                                                                                                          |
| ------------------------ | ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Extension editor crate   | `ClearWorld`                   | Setup fails like any extension failure, and the editor does not start.                                                |
| Editor-only extension, the editor's own module | `ClearWorld`, but listed in `first_load_optional` | The failure is logged as `optional module failed to load; the host continues without it`, a `ModuleFailed` notice reaches the Problems tab, and the module waits in `pending_modules`, where `DevHost::retry_extension` can build it again. The shell's safe mode uses this. |
| Project editor crate     | `ClearGenerationData`          | The failure is logged as `the project's editor crate failed to load; the project keeps running without it`. Only what the failed image registered is cleared, and the image stays mapped. |

The project editor crate's failure costs the editor part only, so a person can fix the crate without losing the session. One limitation follows from how it is stored: a failed first load leaves `DevHost::project_editor` as `None`, and the reload pass only acts on a loaded slot. A later edit that fixes the crate is therefore not loaded until the editor restarts.

## When does an editor module reload?

An editor module reloads for two reasons: its own sources changed, or the crates it extends were replaced.

| Trigger                                       | Extension editor crate                                     | Project editor crate                                             |
| --------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| Its own sources change                        | Its watcher bumps its edit generation; the fast path may patch it | Its own watcher bumps `project_editor_generation`; always a reload |
| A runtime crate in its folder reloads         | `queue_cascade_reload`, reached later in the same pass     | -                                                                |
| The project's image is replaced (native or C#) | -                                                         | `queue_cascade_reload`, reached on the next pass                 |

### Why does an extension editor crate follow its runtime crate?

Because it has an old copy of the runtime crate compiled into it. An editor crate depends on its runtime crate as an `rlib`, so its DLL embeds the code and layouts it was built against. When the runtime crate reloads with a changed type, the editor crate's copy is out of date.

In the module pass, a runtime crate whose reload returns `ReloadOutcome::Reloaded` queues a cascade reload on every editor crate of the same folder later in the `extensions` list. Editor crates always come after the runtime crates, so the same loop reaches them in the same pass.

> **Example:** you add a field to `pill_spline::Spline`. The module pass reloads `pill_spline`, logs `a runtime crate of the folder reloaded; queuing the editor crate's reload` for `pill_spline_editor`, and a few entries later rebuilds and reloads `pill_spline_editor` against the new layout. The spline tool's hooks now read the new field.

### Why does the project editor crate follow the project?

So the editor part always matches the project it changes. A project editor crate cannot link the project crate (see [Why can't a project editor crate depend on the project crate?](#why-can-t-a-project-editor-crate-depend-on-the-project-crate)), but it is written against the project's components by name, and a project reload is the moment those may have changed.

Both project swap paths queue the cascade: the native one, once the project's image is replaced, and `note_managed_swap` for a C# project. `reload_project_editor_if_changed` runs in the module pass right after the extensions and before the project's own reload, so a cascade queued by a project reload is built on the following pass. It reloads through the same transaction as an extension, with every other subject as peers, because a component type it names is not its own to retire.

### Why is the cascade a separate flag?

Because the edit-generation counter belongs to the source watcher. `cascade_reload_queued` is its own flag, so the per-function fast path, which consumes a pending source edit when it can patch it, can never consume a cascade by accident and leave the editor crate on an outdated copy.

`DevHost::source_work_pending` also counts a pending project editor reload, so a paused, idle editor still wakes up and picks the edit up.

### Can an editor module be hot patched?

An extension editor crate can. Its `build.rs` calls `pill_hot_scan::generate_function_inventory()` and its crate root includes the generated list, and the host gives it a `HotPatchSession` like any extension. A body-only edit then patches the function in place.

A project editor crate cannot. The host arms no patch session for it, so every edit rebuilds and reloads the crate.

## How does the editor keep a reloaded module's registrations safe?

Everything an editor module registers is a function pointer into its own image. After a reload, the old image is retired, and a call through an old pointer would run code from the previous generation, or crash once that image is unloaded. The editor prevents this in two different ways: callbacks and panels are tied to a **liveness marker**, and tools are replaced by name.

### Callbacks and panels: queues and liveness markers

A module cannot register into the registries itself. In its `register`, it pushes a request into a queue resource:

| What               | Queue (module writes)     | Registry (executable binds into) |
| ------------------ | ------------------------- | -------------------------------- |
| Editor callbacks   | `EditorHookRequests`      | `EditorHookRegistry`             |
| Module panels      | `PanelRegistrations`      | `PanelRegistry`                  |
| Module commands    | `CommandRegistrations`    | `CommandRegistry`, `CommandDraws`|

The executable drains each queue (`sync_hooks`, `sync_panels`) and binds every request to a `ModuleLiveness` marker. It keeps the one strong `Arc` per source in `module_markers`, and the registry keeps only a `Weak`. A registration is alive only while its marker's strong count is above zero, and the registry hands out a function pointer only while it is alive.

The order of the phases inside one editor frame (the code's name for one pass of the editor's loop; [How the editor works, Stage 3](editor_implementation.md#stage-3-what-happens-in-one-editor-frame) lists the phases) is what makes a reload safe:

```text
  frame N, the update      the host reloads pill_test_editor; the new image's
                           `register` queues fresh requests; the host pushes
                           HostNotice::Reloaded { module: "pill_test_editor" }
  ───────────────────────────────────────────────────────────────────────────────
  frame N+1, phase 2       fold_host_notices: removes module_markers["pill_test_editor"]
                           → every callback and panel of the old image is dead
  frame N+1, phase 3       sync_hooks: binds the new requests to a fresh marker
                           apply_pending_commands: callbacks run (new image only)
                           sync_panels: binds the new panels, same slot per id
  frame N+1, phase 5       the shell draws the panels (new image only)
```

Between the reload and phase 2, no callback runs and no panel is drawn, because both happen only at the frame boundary (phase 3) and in the shell's pass (phase 5).

**The marker is keyed by the request's `source`, and the notice by the module's name.** That is why every request must pass `env!("CARGO_PKG_NAME")`. A module that passed any other string would keep its marker across a reload, so a callback the new generation stopped registering would stay bound to the retired image.

Registration replaces entries in place:

- `EditorHookRegistry::register` drops dead entries and any entry with the same `(source, event)` before adding the new one, so a reload never doubles a callback.
- `PanelRegistry::register` replaces the entry with the same id in place, so the panel keeps its slot and its dock tab across the reload. A panel whose module never comes back keeps its tab, which reads "Module not loaded".

### How does a module add a command to the editor's UI?

A module registers commands, not widgets. One command is one row, button or
menu item, wherever the module places it, and one id the person runs from any
of those places, from a shortcut or from the scripted channel.

**What a command is declared as.** A `CommandSpec` carries the id, the title,
the menu path (empty for no menu row), the default chords per keymap preset,
an optional icon and its placements. A placement is a `UiSlot`:

| Placement                   | Drawn where                              | Target it reports         |
| --------------------------- | ---------------------------------------- | ------------------------- |
| `MenuBar { path }`          | the menu bar, derived from `menu_path`   | none                      |
| `Toolbar`                   | beside Play, Pause and Step              | none                      |
| `ViewportToolbox`           | the floating toolbox of a scene view     | the view index            |
| `InspectorComponentHeader`  | one component's Inspector header         | the entity and component  |
| `ComponentContextMenu`      | the menu a component header opens        | the entity and component  |
| `EntityContextMenu`         | the menu an entity row opens             | the entity                |
| `AssetContextMenu`          | the menu an asset file opens             | the asset key             |
| `Palette`                   | the command palette (every command)      | none                      |

**A command may be placed in several places at once.** One id reaches the
module from a toolbox row, a context-menu row and a chord, and the target tells
the module which place the click came from. A context menu offers only the
commands whose placement matches what was clicked - a component's menu its own
component, an asset file's menu its extension - and draws none where there is
no subject: the entity list's empty strip and a folder's menu carry no module
rows. The viewport toolbox draws the `ViewportToolbox` rows after its own tool
rows, so a hidden command closes the panel up.

**Registration, and how a reload stays safe.** In its `register`, a module
pushes a `CommandRegistration { owner, commands }` into
`CommandRegistrations`, and a `CommandDrawRequest` for each command whose look
no data describes. The executable binds each to the module's liveness marker
(`sync_commands`, phase 3) and replaces that owner's whole set, so a reload
never doubles a command. A set whose module unloaded is forgotten together
with its draws, so a menu never offers a command nothing answers. The owner
must be `env!("CARGO_PKG_NAME")`, the same rule the callbacks follow.

**What the places draw.** Each place draws from data by default: the title, the
icon and the state published for its target. The module publishes that state
per frame into `CommandStates`:

```rust
let target = CommandTarget::Entity { entity, component: Some(component.clone()) };
states.publish(COMMAND_ID, HashMap::from([(
    target,
    CommandState::default()
        .with_label("Test Command")
        .with_checked(true)
        .with_indicator([0x4a, 0xd9, 0x91, 0xff])
        .with_tooltip(vec!["What a click does".to_string()]),
)]));
```

- Nothing published means visible and usable, so a command works before its
  module says anything about it.
- `CommandState::hidden()` removes the row or button and the space it took;
  `CommandState::disabled()` draws it dimmed and reports no click.
- `label` and `tooltip` override the command's own text; `checked` marks a
  toggle; `indicator` and `attention` paint the two corner dots.

**A draw function is the exception.** When a command's look no data describes -
the Blender logo - the module registers a `CommandDrawFn` for that command and
place. It is called with a `CommandDrawContext`: the id, the target, the
published state and an `invocations` list. A click reports through
`context.invoke()`, so the place never learns which of the two drew it. The
shell calls a draw function only while its module is loaded.

**How a click comes back.** Every place turns a click into a
`CommandInvocation { id, target }`, which the executable pushes into
`CommandInbox`. The module takes its own ids in a system:

```rust
pub fn my_commands(mut inbox: ResMut<CommandInbox>) {
    let Some(mut inbox) = inbox.get_mut() else { return; };
    for invocation in inbox.take(COMMAND_ID) {
        let entity = invocation.entity();
        // ...
    }
}
```

`CommandTarget` is `None`, `Entity { entity, component }`, `Asset(key)` or
`View(index)`. An invocation no module takes within
`COMMAND_INVOCATION_LIFETIME` frames is dropped, so a command whose module
unloaded leaves nothing behind.

**Shortcuts and the scripted channel come free.** A chord bound in the spec
reaches the module through the same inbox, and so does
`command <id> [entity <name> | asset <path>]` in the scripted channel. The
editor's own ids keep their own verbs; any other id runs the command that
registered it.

### Tools: records replaced by name

The `ToolRegistry` has no liveness marker. A registered tool is a `RegisteredTool` record of owned strings and plain function pointers (`ToolElementHooks`), and `register_plugin` replaces the record with the same name. A tool extension's record is replaced the same way by `register_extension`.

This is safe for every tool the new generation registers again: its `register` runs inside the reload and replaces the record before the old image can be unloaded. The reload graveyard (`GraveyardPolicy::Bounded`) keeps up to `MAX_GRAVEYARD_GENERATIONS` (two) retired images mapped, and unloads older ones.

The registry has no removal call, so a tool that a new generation **stops** registering keeps its old record, and that record's hooks point into the retired image. Once the graveyard unloads that image, calling the hooks would run unmapped code. Rename or remove a tool together with an editor restart.

## How do editor callbacks run?

Callbacks run at the frame boundary, inside the shared drain that applies the queued `EditorCommand` batches (`HookSession`, `pill_editor_core::hooks::dispatch`). They see the world between two updates, never in the middle of one.

- **Before-callbacks** (field edits only) run before a command applies and return a `HookVerdict`: `Keep`, `Replace(value)` (the step keeps the original value as its inverse) or `Refuse(reason)` (the whole batch is dropped, a notice is posted and `[editor] hook refused` is logged).
- **After-callbacks** run per applied command and may queue follow-ups through `HookContext::queue` and its builders.
- **A follow-up joins the step of the edit it answered**, so one undo reverts both, and it never fires the callbacks again. A follow-up queued by a callback that answers a difference (the selection, the tool, the element selection) is a step of its own, labelled `hook {source}`.
- **Nothing a callback queues survives a history replay.** Under `FieldEditCause::HistoryRestored`, queued commands are dropped and the drop is reported once per drain, because the step being replayed already holds the result.
- **Callbacks hear only commands the drain applies.** A gizmo drag writes the transform directly while it moves and queues one recorded `SetField` on release, so field callbacks see a gizmo drag once, as `Committed`. Project code that writes components does not go through the drain at all.

### How does a typed field callback match its component?

`FieldEditHookRequest::new::<T>` erases the typed callback into an address plus a monomorphized applier, `apply_field_edit_before::<T>`, both built in the calling crate. At dispatch, the applier checks that the edited component's registered name matches `T` (by registered name or Rust path), turns the field name into the `<Type>Field` enum that `#[component]` generates, and only then calls the callback. An edit to another component returns `Keep` without calling it.

### Why can a module register only one callback per event?

Because the registry's key is `(source, event)`, and the event does not include the component type. A second `FieldEditBefore` request from the same crate, even for a different `T`, replaces the first. This keeps a reload from doubling callbacks without tracking each request's identity, at the cost of one callback per event per crate.

## Why can't a project editor crate depend on the project crate?

Because the project crate exports its DLL entry points itself. `#[pill_module]` emits the `#[no_mangle]` exports through a `__pill_module_entry_points!` macro that only the generated wrapper expands, so a module's crate can be linked into several artifacts and its symbols are still defined once. `#[pill_project]` emits them directly, on the assumption that "a project is always built as its own artifact, so there is no second definition to collide with". Linking the project's `rlib` into the editor crate's wrapper would define `pill_module_init` and the other exports twice.

So a project editor crate reaches the project's own components through the name-based parts of the API: `ComponentEdit::component`, `World::read_component_field`, `EditorCommand::SetField`, and a tool's `requires_component`, which matches a full name or a `::` suffix. Typed field callbacks work for components of any extension the crate depends on. The proving crate, `editor_api_editor`, registers its typed callback against `pill_test::ModuleTest` for this reason.

## What else can an editor module declare?

An editor module is a full module, so its entry point registers whatever its image declares: components, `#[system]`s, resources and asset types.

- **Components** declared in an editor crate exist only in the editor, which makes them a place for editor-side data a game never needs. A scene saved with such a component still loads in a build without the editor: the loader counts it in `SceneLoad::unknown_components` and loads the rest of the entity.
- **ECS systems** run under the module's own owner, like any module's, and only while the module is loaded. An editor ECS system that must run while editing declares `run_in_edit_mode = true`.

## Exceptions and limitations

- **The browser editor links no editor crates.** `generate_shipping_bundle.py --web --editor` links only the editor's own modules for its frontend, which today means the egui shell `pill_editor_shell`, beside the runtime modules. It finds them by the same tag rule the host uses. Extension and project editor crates work only in the native `pill_editor`.
- **Module panels have no menu entry.** The Window menu lists only the built-in tabs (`EditorTab::ALL`), so a module panel is reached through a saved layout or the scripted `tab module:<slot>`. Today the only panels registered are the shell's own.
- **A project editor crate is untested for C# projects.** The host resolves it for a C# project too (named after the `.csproj` file) and the managed swap path queues its cascade, but no suite covers that case.
- **A project editor crate whose first load failed needs an editor restart,** as [What happens when a first load fails?](#what-happens-when-a-first-load-fails) explains.

## How are editor modules tested?

Two suites cover the two postures. Run the editor suite's `editor_api` area: it loads `pill_test_editor` (every event, both verdicts, follow-ups and builders) on the `editor_api` test project, then checks that project's own editor crate: its load, its callback, and the reload a project reload triggers.

```powershell
python devops/tools/run_editor_suite.py --steps editor_api
```
```cmd
python devops/tools/run_editor_suite.py --steps editor_api
```
```bash
python devops/tools/run_editor_suite.py --steps editor_api
```

Run the host-tier suite to check the other posture. It starts `pill_standalone` on the same project and fails if any log line names the project editor crate.

```powershell
python devops/tests/test_project_editor_crate.py
```
```cmd
python devops/tests/test_project_editor_crate.py
```
```bash
python devops/tests/test_project_editor_crate.py
```

Run both through the run wrapper (`.agents/site/agent_run.py start ... -- <command>`), and build nothing else between the editor build and its suite, as [Editor inside the engine](editor.md#why-must-the-editor-be-built-right-before-it-runs) explains. The discovery rules have unit tests in `pill_development_host`'s `config.rs` (`resolves_editor_crates_by_convention`, `refuses_editor_crates_in_the_module_list`, and the `project_editor_crate_tests` and `editor_module_tests` modules).

## Which log lines show what happened?

| Log line                                                                     | Target               | Means                                                            |
| ---------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------- |
| `loadable artifact loaded` with `kind="project editor"` or `kind="extension"` | `engine::hot_reload` | an editor module's image was loaded                              |
| `the project's editor crate loaded`                                          | `engine::hot_reload` | the project editor crate's first load succeeded                  |
| `the project's editor crate failed to load; the project keeps running without it` | `engine::hot_reload` | its first load failed                                       |
| `optional module failed to load; the host continues without it`              | `engine::hot_reload` | the first load of an editor-only extension or of one of the editor's own modules failed |
| `a runtime crate of the folder reloaded; queuing the editor crate's reload`  | `engine::hot_reload` | a cascade was queued for an extension editor crate               |
| `the project reloaded; queuing its editor crate's reload`                    | `engine::hot_reload` | a cascade was queued for the project editor crate                |
| `project editor crate reload processed`                                      | `engine::hot_reload` | the project editor crate was rebuilt and swapped                 |
| `[editor] hook registered`                                                   | `engine::editor`     | a callback request was bound (`source`, `event`)                 |
| `[editor] panel registered`                                                  | `engine::editor`     | a panel request was bound (`id`, `slot`, `source`)               |
| `[editor] panel source reloaded`                                             | `engine::editor`     | a module's marker was dropped after its reload                   |
| `[editor] hook refused`                                                      | `engine::editor`     | a before-callback refused a batch                                |

## Where is this in the code?

| What                                                           | Where                                                                                     |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Finding editor crates, the frontend tag, the `modules:` refusal | `modules/hosting/pill_development_host/src/config.rs` (`resolve_editor_crates`, `resolve_editor_modules`, `resolve_project_editor_crate`, `declared_editor_frontend`, `resolve_extensions`, `validate_extension_crate_names`) |
| The project editor crate's wrapper and its pruning             | `config.rs` (`materialize_project_editor_wrapper`, `prune_stale_project_editor_wrappers`) |
| Load order, failure policies, the cascade reloads              | `modules/hosting/pill_development_host/src/runtime.rs` (setup Steps 3 and 4b, the module pass, `reload_project_editor_if_changed`, `note_managed_swap`) |
| `is_editor_crate`, `queue_cascade_reload`                       | `modules/hosting/pill_development_host/src/extension.rs`                                  |
| `SystemOwner::PROJECT_EDITOR`                                   | `modules/engine/pill_engine_core/src/engine.rs`                                           |
| Binding requests to liveness markers, dropping them on reload  | `modules/editor/pill_editor/src/runner/mod.rs` (`sync_hooks`, `sync_panels`, `fold_host_notices`) |
| The frame phases that order them                               | `modules/editor/pill_editor/src/runner/frame.rs`                                           |
| Callbacks: requests, registry, events, dispatch, context       | `modules/editor/pill_editor_core/src/hooks/`                                               |
| Module panels and `ModuleLiveness`                             | `modules/editor/pill_editor_core/src/panels.rs`                                            |
| Tools and tool extensions                                      | `modules/editor/pill_editor_core/src/tools.rs`                                             |
| The web bundle's editor-crate rules                            | `devops/tools/generate_shipping_bundle.py`                                                 |
| Proving crates                                                 | `modules/extensions/pill_test/modules/editor/`, `devops/tests/projects/editor_api/editor_api_editor/` |

## Where to read next

- [How the editor works](editor_implementation.md): the editor's parts, its frame phases, snapshots and commands.
- [Extensions](../levels/extensions.md): extension folders, discovery and the wrapper crates.
- [Hot reloading](../levels/hosting/hot_reloading.md): the reload transaction every module goes through.
