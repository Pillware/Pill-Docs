# How the editor works

## Summary

The editor is **your project, running live, with tools around it**. It starts the same development host `pill_standalone` uses, so your project's ECS systems keep running in the editor's window, hot reload works as usual, and every edit you make lands in the running world.

The editor itself is three pieces: an **executable** that owns the windows, the GPU device and the frame loop and never reloads; a **shell module** that draws the whole UI and hot reloads like any extension; and a **shared library** between them that holds the data both sides read and write. The editor never edits the world from the UI directly. The UI reads a **snapshot** of the world and queues **commands**, and the executable applies them between updates, which is what gives every edit an undo step.

This page explains the editor in stages. Each stage builds on the one before it, so read them in order the first time:

| Stage | Question it answers                                       | You will know                                                         |
| ----- | --------------------------------------------------------- | --------------------------------------------------------------------- |
| 1     | What is the editor, from the outside?                     | that it runs the project live, and what that means for an edit         |
| 2     | Which parts make up the editor?                           | the executable, the shell module, the shared library, and why three    |
| 3     | What happens in one editor frame?                         | the ten phases, in order, and when the editor draws at all            |
| 4     | How does the editor read the engine?                      | the snapshot, and how components are read by name                      |
| 5     | How does the editor change the engine?                    | commands, the frame boundary, undo and redo                            |
| 6     | How does the editor use the renderer?                     | scene views, the Game view, outlines, the gizmo, the grid, picking     |
| 7     | Where does a click or a key press go?                     | the focus rule, overlay regions, and navigation vs gizmo drags         |
| 8     | How is the editor's UI drawn?                             | the shell pass, the boundary data and the overlay window               |
| 9     | How do extensions add to the editor?                      | `*_editor` crates, module panels and their liveness markers            |
| 10    | How does the editor survive a hot reload?                 | what each kind of reload keeps, rebuilds or drops                      |
| 11    | What does the editor save between runs?                   | the state files and the scene document                                 |

To build and run the editor, see [Editor inside the engine](editor.md). This page assumes you know [Rendering](../levels/rendering.md) and [User interface](../levels/user_interface.md), at least their first two stages.

---

## Stage 1: What is the editor, from the outside?

The editor opens one window with a menu bar and docked tabs: **Entities**, **Inspector**, **Assets**, **Systems**, **Preferences**, and three viewports in the middle, **Scene**, **Scene 2** and **Game**.

What is less obvious: **there is no separate "edit mode" and "play mode"**. The editor loads your project through the development host, and your ECS systems run every update, exactly as in `pill_standalone`. The Systems tab can **pause** the ECS systems and **step** one update at a time, but the world you see and edit is always the live one.

> **Example:** your project has an ECS system that spins a cube. You open the editor, and the cube spins in both the `Scene` and `Game` views. You select it and type `2` into its Transform's scale. The cube is now twice as big and still spinning: the edit went into the running world. You press `Ctrl+Z`, and it shrinks back. You save your project's source code, the project hot reloads, and the cube keeps its position, its scale and the editor's selection.

| View      | Draws through                                  | Shows the editor's tools?  |
| --------- | ---------------------------------------------- | -------------------------- |
| `Scene`   | The editor's own orbit camera                  | Yes: grid, gizmo, outlines |
| `Scene 2` | A second editor orbit camera                   | Yes                        |
| `Game`    | The project's own camera                       | No: exactly what the project draws |

`Window > New Scene View` opens `Scene 3` and more, up to eight.

---

## Stage 2: Which parts make up the editor?

The editor is split so that **the part you change most, the UI, can hot reload, and the parts that cannot reload hold no UI**.

```text
 ┌──────────────────────────────────────────────────────────────────────────────┐
 │ pill_editor (executable, never reloads)                                      │
 │   winit loop · main window · child windows · the editor's GPU device         │
 │   applies commands · picking · gizmo drags · saves state files               │
 │                                                                              │
 │   ┌──────────────────────────────────────────────────────────────────────┐   │
 │   │ pill_development_host (RenderingHost)                                │   │
 │   │   the engine and its world · your project · extensions · renderer    │   │
 │   │                                                                      │   │
 │   │   ┌───────────────────────────────────────┐                          │   │
 │   │   │ pill_editor_shell                     │  a module: hot reloads   │   │
 │   │   │   the `egui_shell` ECS system: menus, │                          │   │
 │   │   │   dock, every tab                     │                          │   │
 │   │   └───────────────────────────────────────┘                          │   │
 │   └──────────────────────────────────────────────────────────────────────┘   │
 └──────────────────────────────────────────────────────────────────────────────┘
          both link ▼                                  ▼ both link
 ┌──────────────────────────────────────────────────────────────────────────────┐
 │ pill_editor_core (shared DLL): egui, egui_dock, boundary types, snapshot,    │
 │ commands, undo history, selection, gizmo math, layout, preferences           │
 └──────────────────────────────────────────────────────────────────────────────┘
```

| Part                            | Kind               | Owns                                                                                       | Reloads?          |
| ------------------------------- | ------------------ | ------------------------------------------------------------------------------------------ | ----------------- |
| `pill_editor`                   | Executable         | The windows, the editor's GPU device, input, the frame loop, applying commands, picking, the gizmo drag, state files | No: restart  |
| `pill_development_host`         | Library            | The engine, the project, the extensions, the renderer module, hot reload and patching     | Its modules do    |
| `pill_editor_shell`             | Editor module      | The `egui_shell` post-update ECS system: menu bar, dock, all tabs, context menus           | Yes, and patches  |
| `pill_editor_core`              | Shared DLL         | egui, the boundary types, snapshot, commands, history, selection, gizmo math, layout, theme | No: restart       |

### Why three parts and not one?

- **The UI is a module so it can hot reload.** The tabs and menus are the code you change most. As a separate DLL, the shell reloads or patches while the editor keeps running, like your project's code does.
- **The executable holds everything that cannot reload.** The window, the GPU device and the operating system's composition objects must outlive any module. A module that owned them would take them down on every reload.
- **The shared DLL gives both sides one copy of every shared type.** The executable and the shell exchange egui output, commands and snapshots. Those types must be identical on both sides, and they must survive a shell reload. A shared DLL that never reloads gives both.

The shell module is found by convention. It lives beside the executable and the shared core, in `modules/editor/pill_editor_shell/`, and the host loads every crate directly under `modules/editor/` whose `Cargo.toml` says `[package.metadata.pill] editor_frontend = "egui"`. The executable and the core carry no such tag, so they are not loaded as modules. When no shell loads, the executable draws a small fallback UI of its own, so the editor stays usable.

### Why does the editor use the development host?

So that the editor runs the project **exactly** as development mode does: the same module loading, hot reload, hot patching, asset watching and renderer. The editor starts it with `HostConfig::from_environment_for_editor_frontend("egui")`, which reads `PROJECT_PATH` and the project's `modules:` like any host, and additionally loads the shell module and each extension's `*_editor` crate (Stage 9).

---

## Stage 3: What happens in one editor frame?

Every editor frame runs ten phases, in this order. The order is the contract: **everything the update reads is published before it runs, and everything it produced is read after it runs**.

```text
  1. begin              frame rate sample, heartbeat log line
  2. publish inputs     game-window events → engine Input; camera bindings; badges;
                        host notices → toasts; editor-window events → EguiShellInput
  3. service requests   apply queued commands (undo step recorded); preference,
                        theme and keybinding files; recovery; panels; clipboard
  4. publish resources  EditorSnapshot; selection outlines; gizmo handles
  ───────────────────────────────────────────────────────────────────────────────
  5. run the world      the host's update: your ECS systems, then post-update ECS
                        systems: `rendering` fills RenderFrame, `egui_shell` runs
                        the UI and leaves EguiShellFrame; the renderer draws the views
  ───────────────────────────────────────────────────────────────────────────────
  6. consume answers    pick results → selection or gizmo drag; asset previews;
                        shell requests (undo, redo, tab, quit)
  7. present            place child windows; paint EguiShellFrame into the overlay
  8. scripted channel   test commands, the auto-quit deadline
  9. decide next wake   draw again now, or sleep
```

> **Example:** you type `5` into a Transform's X field and press Enter.
>
> - **Frame N, phase 5:** the shell's egui pass sees the Enter key and queues a `SetField` command.
> - **Frame N+1, phase 3:** the executable applies the command to the world and records an undo step.
> - **Frame N+1, phase 4:** the new snapshot shows `X = 5`.
> - **Frame N+1, phase 5:** the renderer draws the entity at its new position, and the Inspector draws the new value.
>
> The edit becomes visible one frame after you made it, and it always lands **between** two updates, never in the middle of one.

### Does the editor draw every frame?

No. It draws **only when something asks for it**: input, a changed snapshot, a resize, a running animation, egui asking to repaint, or the project moving something. An idle editor sleeps until the next periodic poll, so it does not keep a CPU core busy. The log says `[editor] frame idle` when it starts sleeping.

`PILL_EDITOR_CONTINUOUS_REDRAW=1` turns this off and draws every frame, which is useful for measuring frame times.

---

## Stage 4: How does the editor read the engine?

The UI never reads the world directly. Every frame, the executable builds an **`EditorSnapshot`**: a copy of what the tabs show, taken from the live engine before the update runs. The shell's tabs read only that copy.

| Snapshot field      | What the tab shows                                         |
| ------------------- | ---------------------------------------------------------- |
| `entities`          | One row per live entity (Entities tab)                     |
| `detail`            | Every component and field of the selected entity (Inspector) |
| `selected_details`  | The same, for each entity of a multi-selection (up to 64)  |
| `components`        | Every registered component type (the Add Component menu)   |
| `systems`, `paused` | Every registered ECS system with its owner, and the pause state (Systems tab) |
| `assets`, `asset_detail` | The asset listing, and the selected asset's import settings (Assets tab, Inspector) |
| `preferences`, `theme` | The preference rows, and the merged editor theme        |
| `undo_depth`, `redo_depth` | Whether Edit > Undo and Redo are available           |

### Why a copy instead of reading the world?

1. **A copy cannot go stale after a reload.** The snapshot is built again from the live engine every frame, and components are looked up again **by name** each time. When a project reload adds a field to a component, the next snapshot shows it. Nothing in the UI keeps a reference into a component table that a reload could replace.
2. **The UI runs inside the update.** The shell's pass is an ECS system. Reading other entities' components from inside it would race with the other ECS systems running in parallel. The snapshot was taken before the update started, so the shell only reads its own resource.
3. **It keeps the cost visible.** The snapshot is built in tiers: the entity rows grow with the world, the selected entity's detail is one entity's worth, and the asset listing touches the filesystem, so it refreshes only on a slow schedule or right after a file command.

### How does the editor read a component it has never heard of?

Through the engine's **field layer**. Every component registered with `#[component]` also registers a **field layout**: the name, type and offset of each field. The editor asks the world for a component **by its name** and reads or writes a field **by its name**, as a `FieldValue` (a number, a vector, a string, an asset reference, an entity reference, ...).

> **Example:** your project defines `WaveContributionComponent { scale_offset: f32 }`. You never told the editor about it. Its derive registered the layout, so the Inspector shows a `Wave Contribution` section with a `scale_offset` drag value. Editing it calls `world.write_component_field(entity, "...WaveContributionComponent", "scale_offset", FieldValue::...)`.

The field layer also carries the decorators a component declares, such as `#[pill(range(0.0, 1.0))]` or a header. The Inspector turns them into a slider, a separator line, a tooltip, or hides the row.

---

## Stage 5: How does the editor change the engine?

Every change the UI makes is an **`EditorCommand`** queued into the `PendingEditorCommands` resource. The executable applies the queue at the **frame boundary**: after the previous update, before the next one.

| Command family | Examples                                                                              |
| -------------- | ------------------------------------------------------------------------------------- |
| World          | `CreateEntity`, `DestroyEntity`, `AddComponent`, `RemoveComponent`, `SetField`, `SetFieldAsset`, `SetArrayElement`, `SetResourceField` |
| Engine         | `SetSystemEnabled`, `SetPaused`, `StepOnce`, `SetGizmoTool`, `SetGrid`                 |
| Selection      | `SetSelection`, `SelectResource`                                                       |
| Document       | `SceneNew`, `SceneOpen`, `SceneSave`, `SceneSaveAs`                                    |
| Asset files    | `ImportFiles`, `CreateStandaloneAsset`, `MoveAssetFile`, `DeleteAssetFile`, `WriteAssetMeta`, `SetAssetSettings` |

### Why queue commands instead of changing the world at once?

- **The update is never interrupted.** A command is applied between two updates, so no ECS system sees a half-applied edit, and the UI pass never needs write access to other components while ECS systems run in parallel.
- **One path for every source.** The tabs, the menus, the keyboard shortcuts, the module panels and the scripted test channel all queue the same commands. A suite that types `edit set ...` exercises exactly the code a click does.
- **Undo comes for free.** Applying a command returns its **inverse**: the command that undoes it.

### How do undo and redo work?

Applying a command reads the old value first, writes the new one, and returns the inverse command. A recorded batch becomes one entry in the **`CommandHistory`** resource, holding both batches: the commands that made the edit and the ones that reverse it.

> **Example:** `SetField { entity: 42, component: "Transform", field: "translation", value: [5, 0, 0] }` is applied. Before writing, it reads `[0, 0, 0]`, so its inverse is the same command with `value: [0, 0, 0]`. `Ctrl+Z` queues that inverse through the same frame-boundary path, and the entity moves back.

- **Continuous edits merge.** A slider drag produces many `SetField`s in a row. They merge into one step while they keep arriving close together, so one `Ctrl+Z` undoes the whole drag.
- **Destroying and restoring moves handles.** Undoing `DestroyEntity` restores the entity with a fresh handle. The history then remaps every remaining entry from the old handle to the new one.
- **The history has limits.** The preferences set a step count and a memory budget. The oldest steps are dropped first, and the log says which limit caused it.
- **A command either fully applies or not at all.** A failure comes back as an index and a message, logged as `command failed`, and the rest of the batch still runs. Asset file commands are the exception, because a filesystem has no transactions: they try to roll back the earlier steps and name any file they could not restore.

### What does pause actually pause?

`SetPaused` calls `engine.set_systems_paused`, which skips the regular ECS systems of each update: your gameplay stops. The rest of the update keeps running: input is read, scripts update, queued commands are applied, and the **post-update** ECS systems still run. The `rendering` and `egui_shell` ECS systems are post-update ones, so the views keep drawing and the UI stays responsive while the project is paused. `StepOnce` runs exactly one update's ECS systems while paused. `SetSystemEnabled` switches one ECS system off, which is what the Systems tab's `on`/`off` buttons do.

### What is the scene document?

The world the editor shows can be saved as a `.scene` file. The `SceneSession` resource remembers which file the world came from and whether anything changed since the last save: every undoable command marks it unsaved. **New** and **Open** replace the whole world, so the undo history and the selection are cleared with it, because both name entities the old world owned.

---

## Stage 6: How does the editor use the renderer?

The editor does not have a renderer of its own for the scene. It uses **the project's renderer** (`pill_master_renderer`, loaded by the development host) and drives it through the contract in `pill_renderer_api`. Everything the editor adds to a view, it adds by writing **world resources** that the renderer already reads.

```text
 editor executable writes ──►  world resource            ──► renderer draws
 ───────────────────────────   ─────────────────────────     ─────────────────────────────
 orbit camera per scene view   SurfaceCameras (bindings)      each view through its camera
 Grid on/off                   SurfaceCameras.grid            the scene grid on editor views
 the selection                 SelectionOutlines              orange outlines on editor views
 gizmo handles, drag guides    DebugDraw                      lines and handle triangles
 "what is under this pixel?"   PickRequests                   the pick buffer
 asset thumbnails              PreviewRequests                one small off-screen render
                               PickResults, PreviewResults ◄── the answers, frames later
```

### How does one renderer draw three viewports?

Each viewport is a **surface** of the same renderer (see [Rendering, Stage 8](../levels/rendering.md#stage-8-what-else-does-the-renderer-draw)):

- **The Game view is the primary surface.** The executable creates the Game view's child window first and attaches the renderer to it, so the project's own camera draws there, chosen the normal way (highest `priority`).
- **Each scene view is an extra surface**, attached with `attach_surface` on its own child window. Its camera is a `CameraBinding::View`: a camera given as plain data, not an entity. The editor's orbit cameras therefore never appear in your world, never show in the Entities tab, and are never saved into a scene.

All views share one GPU device, one asset upload and one instance buffer, so a second scene view costs one more set of draw calls, not a second copy of the scene.

> **Example:** you orbit `Scene` with the middle mouse button. The executable moves that view's `OrbitCamera`, and in phase 2 of the next frame publishes the new binding into `SurfaceCameras`. The renderer draws `Scene` from the new angle. `Scene 2` and `Game` are unchanged.

### Why do the tools only appear on scene views?

The renderer decides it from the bindings: a surface bound to a **view** camera is an editor view and gets the grid, the outlines and the gizmo; a surface drawn through a **world** camera is the project's own and gets none of them. So `Game` always shows exactly what a shipped build of the project would show.

### How does clicking an entity select it?

Through **picking**, which answers asynchronously:

1. You click in a scene view. The executable writes a `PickRequest` for that pixel into `PickRequests`.
2. In the next update, the renderer draws that view's entities into a hidden pick buffer, each as its own id, and asks the GPU to copy the clicked pixel back.
3. A few frames later the copy finishes. The executable drains `PickResults` in phase 6 and moves the `EditorSelection`.
4. In phase 4 of the next frame, the selection is published as `SelectionOutlines`, and the renderer draws the orange outline.

The frame never waits for the GPU. That is why a click selects one or two frames later rather than instantly.

### How does the transform gizmo move an entity?

The gizmo's handles are not UI widgets; they are drawn by the renderer as debug geometry, and they are picked like entities.

1. Each frame, the executable builds the handles for the selected entity (from `pill_editor_core::gizmo`) and draws them through `DebugDraw`.
2. A press is a pick. If the answer names a handle (the pick value carries a handle bit), a **drag** starts and remembers the transform at the press.
3. Every mouse move computes the new transform **from the press**, not from the last move, so snapping never accumulates rounding errors, and writes it straight into the entity's `TransformComponent`. No undo step is recorded per move.
4. On release, the executable writes the press's value back and queues one recorded `SetField` with the final value, so the whole drag is one undo step.

The write-back in step 4 matters: a recorded command takes its inverse from the world's current value. Without restoring the starting value first, the inverse would be the final value, and the first `Ctrl+Z` would change nothing.

---

## Stage 7: Where does a click or a key press go?

Three rules decide where input goes. Each one exists so that the project and the editor never act on the same input by accident.

**Rule 1: the focus rule.** An event from **the Game view's window** goes to the engine's `Input`, so your ECS systems see it. An event from **any other editor window** goes only to the shell's egui pass. The deciding fact is which window the event came through, not what kind of event it is.

> **Example:** your project moves a character with `W`. With the Game view focused, `W` walks the character. With the Inspector focused, `W` types into a text field, or switches the gizmo to Translate, and the character stands still.

**Rule 2: overlay regions win over the scene.** The shell reports every rectangle where it drew something over a viewport: open menus, the floating toolbox, context menus. A click inside one of those `overlay_regions` belongs to the UI and never becomes a pick.

**Rule 3: one active viewport, one gesture at a time.** A press inside a viewport makes it the **active** one; the wheel and the navigation chords move only that view's camera. Navigation and gizmo drags exclude each other, so an orbit never moves an entity. Which chords navigate comes from the `keymap` preference: Blender and Godot orbit on the middle button, Unity and Unreal on the Alt chords.

---

## Stage 8: How is the editor's UI drawn?

[User interface, Stage 8](../levels/user_interface.md#stage-8-how-is-the-editors-ui-different) explains this in full. In short:

1. The executable writes **`EguiShellInput`**: the window size, the scale factor, the events the focus rule routed to the shell, the cursor, pasted text.
2. The shell's **`egui_shell`** post-update ECS system runs one egui pass: the menu bar, the dock and every tab. It reads `EditorSnapshot`, writes `EditorSelection` and queues commands.
3. It leaves **`EguiShellFrame`**: egui's triangles and texture changes, the viewport rectangles (`scene_rects`, `game_rect`), the `overlay_regions`, the cursor, and the requests it raised (undo, a tab to focus, quit).
4. The executable places each viewport's child window at its rectangle and paints the UI with `egui-wgpu`, on **its own GPU device**, into a transparent **overlay** above the child windows. The viewport tabs leave their bodies empty, so the scene shows through.

So the editor uses **two GPU devices**: the renderer module's, which draws the scene into the child windows, and the executable's, which draws the UI overlay. They never share a texture. The desktop compositor blends the two layers.

The browser editor (`pill_web_editor`) keeps the same split with two canvases: the scene on one, the UI on a transparent canvas above it. It reuses the same snapshot, commands, history and scripted grammar from `pill_editor_core`, so both editors behave the same.

---

## Stage 9: How do extensions add to the editor?

An extension can ship an **editor crate**: a crate named `<folder>_editor` in the extension folder's `modules/editor/`, for example `pill_spline_editor` in `extensions/pill_spline/modules/editor/`.

- **Only an editor host loads it.** `pill_standalone`, shipping builds and the browser never build or load an `*_editor` crate, and `modules:` refuses to list one.
- **It loads after the extension's runtime crates**, and reloads whenever one of them reloads, because it was compiled against their types.
- **A folder with only an editor crate** is an editor-only extension, loaded in every editor run. The shell is not one of these: it is one of the editor's own modules, under `modules/editor/` (Stage 2).

An editor crate adds UI through **module panels**. It queues a registration into `PanelRegistrations`: an id, a title, and a plain function that draws the panel from a `PanelContext`. The executable moves it into the `PanelRegistry`, and the shell shows it as a dock tab. A panel reads plain data and leaves commands, exactly like a built-in tab.

### What stops the shell from calling a panel whose module was unloaded?

Each registering module has a **liveness marker**: the executable holds the one strong reference to it and drops it when the module unloads, and the registry keeps only a weak reference. The registry hands out a panel's draw function only while its marker is alive.

> **Example:** your editor crate fails to build after an edit, and the host unloads it. Its marker dies. The panel's tab stays in the dock but says the module is unloaded, instead of calling a function in a DLL that is gone. When a later edit builds, the module registers the same panel id again, and the tab comes back in the same place.

---

## Stage 10: How does the editor survive a hot reload?

Each part of the editor is built so that what reloads holds nothing the parts that stay depend on.

| What reloads                   | What happens in the editor                                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Your project**               | The next snapshot is rebuilt from the live engine, so new fields and components appear at once. History entries that name a component type or field the reload removed are pruned. The selection and the open scene stay. |
| **The shell module**           | The dock layout, open dialogs, the browser's open folder, the toolbox positions and the egui context live in `EguiShellState`, in the shared DLL, and are kept. On the new generation's first frame, the shell clears egui's internal data map (Stage 8 of User interface explains why). |
| **A shell tab's function body** | Usually a hot patch: the tab bodies are `#[pill_hot_fn]`, so only that function is replaced and nothing reloads.   |
| **The renderer module**        | The host detaches and reattaches it; every view's surface is replayed onto the new renderer.                      |
| **An editor crate**            | Its panels go dead while it is unloaded and come back in place when it registers again (Stage 9).                  |
| **`pill_editor` or `pill_editor_core`** | Not reloadable. Restart the editor.                                                                         |

All the editor's long-lived state is in **world resources defined by `pill_editor_core`**: `EditorSelection`, `CommandHistory`, `PendingEditorCommands`, `SceneSession`, `EguiShellState`, `PanelRegistry`, `GizmoState`. The shell claims them again on every load and finds the values the previous generation left.

---

## Stage 11: What does the editor save between runs?

The editor keeps its own state in a per-user folder: `%LOCALAPPDATA%` on Windows, `$XDG_STATE_HOME` on Linux. Every editor test suite points these at a sandbox folder.

| File                         | Holds                                                                                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| `editor_egui_layout.yaml`    | The dock layout: which tabs are where, split sizes, open scene views. Versioned; an older schema falls back to the default layout. |
| `editor_egui_recovery.yaml`  | The arrangement and selection, saved on a slow cadence and on change, so a killed editor restores them on the next start. |
| `preferences.yaml`           | Editor-wide preferences (keymap, history limits, snapping steps, the user theme) and a per-project entry remembering the gizmo tool. Read live: an edit applies while the editor runs. |
| `keybindings.yaml`           | Shortcut overrides. Also read live.                                                            |

The **project's** data is saved where it always is: `.scene` files and assets under the project's `res/`, and the editor's project theme in `res/editor/` (never shipped).

---

## How is the editor tested?

Through the **scripted channel**. With `PILL_EDITOR_TEST_COMMANDS=<file>`, the executable reads lines appended to that file in phase 8 of each frame and runs them: `tab scene`, `click x y`, `key ctrl+z`, `edit set ...`, `dump selection`, and many more. Every line is parsed by `pill_editor_core::scripted`, the one grammar both the native and the browser editor share. A `dump ...` line writes the requested state to the log, and `devops/tests/test_editor_egui.py` asserts on those lines. See [Automated tests](../devops/automated_tests.md) for how to run it.

---

## Where does each part live?

| What                                                        | Where                                                                          |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------ |
| The executable's start-up and windows                       | `modules/editor/pill_editor/src/runner/editor_window.rs`, `windows.rs`         |
| The frame's ten phases                                      | `modules/editor/pill_editor/src/runner/frame.rs`                               |
| Snapshot publishing, picks, panels, input routing          | `modules/editor/pill_editor/src/runner/mod.rs`                                 |
| The gizmo drag                                              | `modules/editor/pill_editor/src/runner/transform_gizmo.rs`                     |
| The UI overlay                                              | `modules/editor/pill_editor/src/overlay.rs`                                    |
| The scripted channel                                        | `modules/editor/pill_editor/src/runner/scripted_channel.rs`, `pill_editor_core/src/scripted.rs` |
| `EditorSnapshot`, `EditorCommand` and how commands apply    | `modules/editor/pill_editor_core/src/editor_state/`                            |
| Applying queued commands, undo and redo                     | `modules/editor/pill_editor_core/src/drain.rs`, `history.rs`                   |
| The boundary types, the shell session                       | `modules/editor/pill_editor_core/src/boundary.rs`, `session.rs`                |
| Module panels                                               | `modules/editor/pill_editor_core/src/panels.rs`                                |
| Orbit cameras, gizmo math                                   | `modules/editor/pill_editor_core/src/camera.rs`, `gizmo.rs`                    |
| The scene document                                          | `modules/editor/pill_editor_core/src/scene_workflow.rs`                        |
| Layout, recovery                                            | `modules/editor/pill_editor_core/src/layout/`                                  |
| The shell module and its tabs                               | `modules/editor/pill_editor_shell/src/shell/`                                  |
| The component field layer                                   | `modules/engine/pill_engine_core/src/world/reflection.rs`                      |

## Which log lines show what the editor did?

The editor logs under `engine::editor`.

| Log line                                    | Means                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------- |
| `[editor] game surface attached`            | The renderer is attached to the Game view's window                          |
| `[editor] selection changed`                | A click, a pick or a command moved the selection                            |
| `engine commands applied`                   | A batch of queued commands was applied at the frame boundary                |
| `command failed`                            | One command in a batch failed; the rest still ran                           |
| `history push` / `history undo`             | An undo step was recorded / undone                                          |
| `history pruned`                            | A reload removed a type or field that history entries named                 |
| `[editor] theme applied layers=…`           | The editor's merged theme was installed                                     |
| `[editor] frame idle`                       | The editor stopped drawing and is waiting for input or the next poll        |

## Where to read next

- [Editor inside the engine](editor.md): building, running, the switches, the end-to-end suite.
- [User interface](../levels/user_interface.md): egui in Pill, and the shell's UI pass in detail.
- [Rendering](../levels/rendering.md): surfaces, the overlay and picking from the renderer's side.
- [Hot reloading](../levels/hosting/hot_reloading.md): what a module reload keeps, in general.
