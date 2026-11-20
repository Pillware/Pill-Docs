# Extending the editor

## Summary

A project, and any extension, can additionally have its own **editor module**: a module that only the editor builds and loads. An editor module lets you:

- **add panels** with your own widgets, shown as tabs in the editor;
- **create editor tools** that let you select and drag a component's own points and handles in the viewport;
- **react to editor actions**, such as an Inspector edit, a selection change, an undo, or Play and Stop, and correct or refuse an edit before it is written;
- **extend another extension's tool** with extra handles and menu rows.

> **Example:** the spline extension's editor module adds a tool that turns a spline's control points and tangents into handles you can drag in the viewport. The physics extension's editor module adds a tool that resizes a collider by dragging handles on its shape.

The spline's curve and the collider's wireframe are not drawn by those editor modules. Each component declares its own drawing, a **component gizmo**, in the extension's runtime crate with `#[component(gizmo = ...)]`, so drawing in the viewport needs no editor module at all.

Only the editor ever builds an editor module, so none of its code reaches a standalone, shipping or web build. A project's editor module changes the editor for that project only. An extension's editor module comes with the extension to every project that uses it.

The code calls an editor module an **editor crate**, and names it after the crate it belongs to with an `_editor` suffix.

## At a glance

| Question                                  | Answer                                                                                                     |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Where does a project's editor module live? | In `<project>/<package>_editor/`, beside the project's `Cargo.toml`. `<package>` is the project's package name. |
| Where does an extension's editor module live? | In `modules/extensions/<extension>/modules/editor/`, beside the extension's crate in `modules/runtime/`. |
| Do I list it under `modules:`?            | No. The editor finds it by its folder name. Listing it is an error.                                        |
| When does it load?                        | Only in the editor (`pill_editor`), after the project or the extension it belongs to.                     |
| When does it reload?                      | When you save one of its files, and whenever the project or the extension it belongs to reloads.          |
| What can it do?                           | Add panels, run callbacks when the editor changes something, add tools to the Scene view, and extend other tools. |
| Which builds include it?                  | Only the native editor. Standalone, shipping and web builds never build it, and neither does the browser editor. |

A project with an editor module looks like this:

```
 examples/my_project/
   Cargo.toml               ← the project (package name: my_project)
   project_settings.yaml
   src/
   res/
   my_project_editor/       ← the project's editor module
     Cargo.toml
     src/my_project_editor.rs
```

## Why does editor code go in its own module?

So your project never ships code that only the editor uses.

Every build compiles your project's crate. If that crate contained editor code, a shipped build would compile it too, and it would link the editor's libraries (`pill_editor_core` and egui) only to never call them. An editor module is a separate crate that only the editor builds, so a shipped build doesn't even know it exists.

A separate module also reloads on its own. When you change a callback, the editor rebuilds that one small module, not your project.

> **Example:** you want every new `Health` component to start at full health when you add it in the Inspector. A callback in `my_project_editor` fills in the value as you add the component. Your shipped build contains no trace of that callback, and your project's code that spawns enemies at runtime is unchanged.

## Which kind should I write?

Write a project's editor module unless you are writing an extension.

|                       | A project's editor module                          | An extension's editor module                                          |
| --------------------- | -------------------------------------------------- | --------------------------------------------------------------------- |
| Who writes it         | You, for your own project                          | The extension's author                                                |
| Which projects get it | Only the project it sits beside                    | Every project that lists the extension under `modules:`              |
| Folder                | `<project>/<package>_editor/`                      | `modules/extensions/<extension>/modules/editor/`                      |
| Can name typed components from | Extensions the project uses (see [How do I work with my project's own components?](#how-do-i-work-with-my-project-s-own-components)) | Its own extension and any other extension it depends on |
| A change to a function body | Reloads the module                          | Hot patches the function, when the host can                           |
| A failed first build  | The editor starts without it                       | The editor does not start (an editor-only extension: it starts without it) |

An extension folder may also hold **only** an editor module. That is an **editor-only extension**: the editor loads it for every project, and no project lists it.

The editor's own UI is not an extension. It is the `pill_editor_shell` module in `modules/editor/`, beside the editor itself, but it rebuilds, reloads and hot patches the same way an editor module does.

## How do I add an editor module to my project?

Create a folder and two files. Nothing else needs to change.

1. **Create the folder** beside your project's `Cargo.toml`. Name it after your project's package name with `_editor` added. If your `Cargo.toml` says `name = "my_project"`, the folder is `my_project_editor/`.

2. **Add its `Cargo.toml`.** The paths below assume your project lives in `examples/my_project/`, like the other examples in this guide:

   ```toml
   [package]
   name = "my_project_editor"
   version = "0.1.0"
   edition = "2021"

   [lib]
   # The editor builds the loadable DLL itself, so the crate is a plain library.
   path = "src/my_project_editor.rs"
   crate-type = ["rlib"]

   [package.metadata.pill]
   # The editor this module is written for.
   editor_frontend = "egui"

   [dependencies]
   pill_engine = { path = "../../../modules/engine/pill_engine" }
   pill_editor_core = { path = "../../../modules/editor/pill_editor_core" }
   ```

3. **Add `src/my_project_editor.rs`** with a `register` function and an `init` function. `register` runs every time the module loads or reloads, so that is where you ask the editor for callbacks:

   ```rust
   //! my_project's editor module: starts every new Health component at full health.

   use pill_editor_core::editor_state::EditorCommand;
   use pill_editor_core::hooks::{ComponentEdit, EditorHookRequests, HookContext, HookRequest};
   use pill_engine::{pill_module, Engine};

   // This module's own package name. The editor uses it to tell this module's
   // callbacks apart from other modules' callbacks, and to replace them on a reload.
   const SOURCE: &str = env!("CARGO_PKG_NAME");

   // The name the project's health component is registered under.
   const HEALTH: &str = "my_project::Health";

   // When someone adds a Health component in the editor, set `current` to `maximum`.
   fn fill_new_health(context: &mut HookContext<'_>, edit: &ComponentEdit<'_>) {
       if !edit.added || edit.component != HEALTH {
           return;
       }
       let Ok(maximum) = context.world().read_component_field(edit.entity, HEALTH, "maximum")
       else {
           return;
       };
       // Queued, not written directly, so it joins the add's undo step.
       context.queue(EditorCommand::SetField {
           entity: edit.entity,
           component: HEALTH.to_string(),
           field: "current".to_string(),
           value: maximum,
       });
   }

   // Runs on every load and reload: asks the editor to call `fill_new_health`.
   pub fn register(engine: &mut Engine) -> u32 {
       let world = engine.world_mut();
       EditorHookRequests::ensure(world);
       let Some(requests) = world.get_resource_mut::<EditorHookRequests>() else {
           return 1;
       };
       requests.push(HookRequest::component_edit(SOURCE, fill_new_health));
       0
   }

   // The module's entry point. Everything it does is in `register`.
   #[pill_module(register = register)]
   pub fn init(engine: &mut Engine) -> u32 {
       register(engine)
   }
   ```

4. **Start the editor** as [Editor](editor.md) describes. It finds the folder, builds the module with the rest of your project, and loads it after your project. Two log lines confirm it:

   ```
   the project's editor crate loaded  module="my_project_editor"
   [editor] hook registered  source="my_project_editor" event="component-edit"
   ```

A non-zero return from `register` counts as a failed load. On the module's first load, the editor continues without it. On a reload, the editor keeps the previous version.

## How do I add an editor module to an extension?

Put it in the extension folder's `modules/editor/`, beside the extension's own crate in `modules/runtime/`, and name its package after the folder with `_editor` added. For the extension `pill_health`, that is a crate named `pill_health_editor` in `modules/extensions/pill_health/modules/editor/`. The editor refuses to start when the name does not match the folder, and says which crate is wrong.

It looks like the project's editor module above, with two differences:

- **It depends on its own extension**, with `default-features = false`, so it can name the extension's types directly: `pill_health = { path = "../runtime", default-features = false }`.
- **It has a `build.rs` that calls `pill_hot_scan::generate_function_inventory()`**, and the crate root includes the generated list. That is what lets the host hot patch a single function instead of reloading the module. Copy both from `modules/extensions/pill_test/modules/editor/`.

## What can an editor module do?

An editor module asks the editor for things in its `register` function. It never changes the editor's lists directly; it queues a request, and the editor picks it up between two updates.

| What you want                                          | How                                                                                          |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| React when the editor changes something                | A callback, queued in `EditorHookRequests` (see the next section)                           |
| Correct or refuse a value before it is written         | A field-edit "before" callback that answers `Keep`, `Replace` or `Refuse`                   |
| Edit a component's own points or handles in the Scene view | A tool, registered with `register_plugin` (see [How do I add a tool?](#how-do-i-add-a-tool)) |
| Add rows or handles to a tool another extension owns   | A tool extension, registered with `register_extension`                                      |
| Show a panel with your own widgets                     | A module panel, queued in `PanelRegistrations` with an id, a title and a draw function      |

A panel's draw function gets an egui `Ui` to draw its widgets into, and a `PanelContext` with the entities, the selection and a list of commands to ask the editor for. The editor shows the panel as a tab. The Window menu does not list module panels yet, so a panel appears through a saved layout or the scripted `tab module:<slot>` command.

You don't need an editor module to **draw** something for a component in the Scene view. A component can declare its own drawing with `#[component(gizmo = ...)]`, and it draws in every development-mode run: the editor shows it in its Scene views, and `pill_standalone` shows it in its window. Shipping and web builds don't draw it. The spline's curve and the collider's wireframe are drawn this way.

## Which events can a callback hear?

A callback hears the edits the editor makes, one event per callback:

| Event                         | Built with                                 | Runs when                                                                  |
| ----------------------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| A field is about to change    | `FieldEditHookRequest::new::<T>`           | before an edit to one of component `T`'s fields is written                 |
| A field changed               | `FieldEditHookRequest::after::<T>`         | after an edit to one of component `T`'s fields was written                 |
| A component was added or removed | `HookRequest::component_edit`          | after the editor added or removed a component                              |
| An entity was created or destroyed | `HookRequest::entity_edit`           | after the editor created or destroyed an entity                            |
| An asset file changed         | `HookRequest::asset_edit`                  | after the editor created, deleted, moved or wrote an asset file            |
| Undo or redo                  | `HookRequest::history_edit`                | after an undo or a redo                                                    |
| The selection changed         | `HookRequest::selection_changed`           | after the selected entities changed                                        |
| A scene was opened or started | `HookRequest::scene_edit`                  | after a scene was opened, or a new one started                             |
| Play started or stopped       | `HookRequest::play_edit`                   | after Play or Stop                                                         |
| The active tool changed       | `HookRequest::tool_activated`              | after a different tool became active                                       |
| The selected handles changed  | `HookRequest::element_selection`           | after the selection of a tool's points or handles changed                  |

Inside a callback, the `HookContext` gives you:

- **The world:** `world()` to read it.
- **The editor's state:** `selection()`, `gizmo()`, `active_tool()`, `viewport()` and `cause()`.
- **Changes:** `queue(command)` and the shortcuts `queue_add_component`, `queue_remove_component`, `queue_create_entity`, `queue_destroy_entity`, `queue_selection` and `queue_gizmo`.
- **Messages:** `post_notice(level, text)` shows a toast in the editor.

### Which edits does a callback hear, and which does it miss?

**A callback hears only the editor's own edits:** the Inspector, the gizmo, the menus, the Entities and Assets tabs, undo and redo. Your project's code changing a value while it runs does not call it, in the editor or anywhere else.

> **Example:** a "before" callback refuses a negative `Health::current`. Typing `-5` into the Inspector is refused, and the editor shows a notice. An ECS system in your project that takes health below zero during Play is not affected: that is your project's code, not an editor edit.

An Inspector drag reports its field edits in two phases. While you drag a slider or a drag value, each change is `FieldEditPhase::Interactive`. When you release it, one last edit is `FieldEditPhase::Committed`. A checkbox, a typed value or a menu action is a single `Committed` edit, and so is a gizmo drag: the gizmo reports one edit with the final value when you release the handle.

## How do I check or correct a value as it is edited?

Register a field-edit "before" callback. It answers with a **verdict**:

| Verdict                 | What happens                                                                    |
| ----------------------- | ------------------------------------------------------------------------------- |
| `HookVerdict::Keep`     | the edit is written as planned                                                  |
| `HookVerdict::Replace(value)` | your value is written instead; undo still goes back to the value before the edit |
| `HookVerdict::Refuse(reason)` | nothing is written: the edit and every change queued with it are dropped, and the editor shows the reason as a notice |

A field-edit callback needs the component's Rust type, so it fits an extension's editor module best. `#[component]` generates a `<Type>Field` enum, so you compare fields by name without typing strings:

```rust
use pill_editor_core::hooks::{FieldEdit, FieldEditHookRequest, HookContext, HookVerdict};
use pill_engine::FieldValue;
use pill_health::{Health, HealthField};

// Writes 0 instead of a negative `current`.
fn clamp_health(_context: &mut HookContext<'_>, edit: &FieldEdit<'_, Health>) -> HookVerdict {
    if edit.field != HealthField::Current {
        return HookVerdict::Keep;
    }
    match edit.current.as_f32() {
        Some(value) if value < 0.0 => HookVerdict::Replace(FieldValue::F32(0.0)),
        _ => HookVerdict::Keep,
    }
}

// In `register`:
// requests.push(FieldEditHookRequest::new::<Health>(SOURCE, clamp_health));
```

A callback that queues a change with `queue(...)` adds it to the same undo step as the edit it answered, so one `Ctrl+Z` undoes both.

## How do I work with my project's own components?

By their registered names. A project's editor module cannot add the project's crate as a dependency, so it cannot name the project's Rust types.

The reason is how the two kinds of crate are built. A project's crate is built into its own DLL and carries that DLL's entry points itself. Linking it into the editor module's DLL as well would give that DLL two copies of every entry point, and the build would fail.

So for your project's own components, use the parts of the editor's API that work with names:

- **Events that carry a name:** `component_edit` reports `edit.component`, the component's registered name.
- **Reading a field:** `context.world().read_component_field(entity, "my_project::Health", "maximum")`.
- **Writing a field:** queue `EditorCommand::SetField` with the component and field names, as the example in [How do I add an editor module to my project?](#how-do-i-add-an-editor-module-to-my-project) does.

A component's registered name is its full Rust path, for example `my_project::Health` for a `Health` struct in your crate root, or `my_project::combat::Health` for one in a `combat` module. A component declared with `shared = "Health"` is registered as `Health`.

The typed field-edit callbacks work for any component that comes from an **extension** your project uses, because the editor module can depend on the extension's crate.

## How do I add a tool?

Register a tool from an editor module. Tools usually live in an extension's editor module, next to the component they edit. A tool is what a Scene view acts through: it decides what a click selects, what a drag writes and what the right-click menu offers. The editor still does the picking, the gizmo, snapping and undo, so a tool only says what its points and handles are and how a drag writes them back.

A tool that names the component it edits gets its own row in the Scene view's floating toolbox, shown only while the selected entity carries that component.

Tools have a large API, so start from a working one rather than from scratch:

| Example                                           | What it shows                                                         |
| ------------------------------------------------- | --------------------------------------------------------------------- |
| `modules/extensions/pill_spline/modules/editor/`  | a tool that edits a spline's points and tangents                      |
| `modules/extensions/pill_physics/modules/editor/` | a tool that edits a collider's shape by dragging its own handles      |

## What happens when I change an editor module while the editor runs?

The editor rebuilds and reloads it, like any other module, and keeps everything you were doing.

| What you change                              | What happens                                                                                     |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| A file in a project's editor module          | That module alone is rebuilt and reloaded. It is never hot patched, even for a body-only change. |
| A file in an extension's editor module       | A hot patch when only a function body changed and the host can address it; otherwise a hot reload. |
| Your project's code                          | The project reloads, and then its editor module reloads too.                                     |
| An extension's crate                         | The extension reloads, and then its editor module, because the editor module was built against the extension's types. |
| Anything, and the build fails                | The editor keeps the previous version running and lists the errors in the Problems tab.          |

On a reload, the editor replaces your module's callbacks and tools with the new ones. No callback runs twice, and none is lost, as long as `register` registers it again.

### What if the module fails to build when the editor starts?

That depends on the kind:

- **A project's editor module:** the editor starts without it and lists the errors. Your project runs normally. Fix the error, then **restart the editor**: a module that failed its first load is not loaded again by a later edit.
- **An editor-only extension:** the editor starts without it and reports the error.
- **An extension's editor module beside a runtime crate:** the editor does not start. Fix the build error and start it again.

## What should an editor module not do?

- **List itself under `modules:`.** The editor refuses any name that ends in `_editor` there, with an error that says the crate loads with its extension in the editor.
- **Keep data in a `static` or in a value it created.** A reload replaces the module's code. Keep anything that must survive a reload in a world resource.
- **Register two callbacks for the same event.** One module keeps one callback per event, so a second one for the same event replaces the first, even when it is for a different component type. Handle every case in one callback.
- **Use a `SOURCE` other than its own package name.** Always pass `env!("CARGO_PKG_NAME")`. The editor uses that name to retire the old callbacks when the module reloads.
- **Remove or rename a tool while the editor runs.** A reload replaces a tool that `register` registers again, but nothing removes one it stops registering: the old tool stays and points at the module's old code. Restart the editor after removing or renaming a tool.
- **Write to the world directly from a callback.** The context does offer `world_mut()`, but a direct write gets no undo step. Queue a command instead.
- **Expect to run outside the native editor.** Standalone, shipping and web builds never build an editor module, and the browser editor doesn't include one either.

## Where is this in the code?

| What                                                  | Where                                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------ |
| A complete project with its own editor module         | `devops/tests/projects/editor_api/` and its `editor_api_editor/`          |
| An extension's editor module that uses every event    | `modules/extensions/pill_test/modules/editor/`                            |
| The callback API: requests, events, verdicts, context | `modules/editor/pill_editor_core/src/hooks/`                              |
| The tool API                                          | `modules/editor/pill_editor_core/src/tools.rs`                            |

[Extending the editor inside the engine](../../engine_guide/editor/extending_editor.md) explains how the editor finds, loads and reloads editor modules inside the engine.
