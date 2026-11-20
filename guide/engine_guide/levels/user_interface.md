# User interface

## Summary

Pill draws user interfaces with [egui](https://github.com/emilk/egui), an immediate-mode UI library: every update, your code describes the whole UI again ("a window here, a button there"), and egui works out what changed and what was clicked.

There are two separate UIs, and they are built differently:

- **The project's UI** (a score, a menu, a debug panel) runs as one of your ECS systems. egui's output is converted into plain draw data, and the renderer paints it over the window. The renderer never sees egui.
- **The editor's UI** (the dock, the Inspector, the Assets tab) runs in a hot-reloadable extension, and the editor's executable paints it in a transparent layer above the scene views.

In both, the UI's long-lived state lives in a shared library or a world resource, never inside a DLL that hot reload replaces. That is what lets you edit UI code while the UI stays on screen, with its open windows and typed text intact.

This page explains the UI in stages. Each stage builds on the one before it, so read them in order the first time:

| Stage | Question it answers                                  | You will know                                                       |
| ----- | ---------------------------------------------------- | ------------------------------------------------------------------- |
| 1     | How do I draw UI in my project?                      | the two calls a project needs and a working panel                   |
| 2     | What happens every update?                           | the path from a key press to UI pixels on screen                    |
| 3     | Why are there so many UI crates?                     | what each crate holds, and why the renderer never links egui        |
| 4     | How do the UI and the project share input?           | `wants_pointer`, `wants_keyboard`, and how input reaches egui       |
| 5     | How do images and fonts reach the GPU?               | the texture mirror and why it keeps whole images                    |
| 6     | How do themes work?                                  | complete base themes, sparse `.theme` files, fonts, the UI kit      |
| 7     | How does the UI survive a hot reload?                | what is kept, what is rebuilt, and the one rule your code must follow |
| 8     | How is the editor's UI different?                    | the shell module, the plain-data boundary and the overlay window    |

The page closes with [where everything lives](#where-does-each-part-live) and [which log lines to look for](#which-log-lines-show-what-the-ui-did).

This page assumes you know how a frame is drawn. If not, read [Rendering](rendering.md) first, at least Stages 1 and 2.

---

## Stage 1: How do I draw UI in my project?

A project needs **two things**: install the UI from its entry point, and draw it every update from an ECS system.

**Step 1: depend on `pill_project_ui`.** It brings egui with it. Never add egui to your project yourself: every module must use the one copy `pill_project_ui` pins.

```toml
[dependencies]
pill_project_ui = { path = "../../modules/ui/pill_project_ui" }
```

**Step 2: install the UI from the entry point that runs on every load.** This puts two resources into the world: `GameUi`, which holds the egui context, and `UiFrameSlot`, where the finished UI waits for the renderer.

```rust
#[pill_project]
pub fn init(engine: &mut Engine) -> u32 {
    // ...spawn the scene...
    pill_project_ui::install(engine); // the default dark theme
    0
}
```

The install must run again after every hot reload, because a reload releases the resource types the new generation does not register again (Stage 7 explains why that is safe). Where to put it depends on your entry point:

| Your project declares                     | Put the install in | Because                                                     |
| ----------------------------------------- | ------------------ | ----------------------------------------------------------- |
| `#[pill_project]`                         | `init`             | With no `register` function, `init` runs on every load      |
| `#[pill_project(register = my_register)]` | `my_register`      | `init` runs only once; `register` runs on every load        |

**Step 3: draw the UI from an ECS system.** The system captures this update's input, then calls `GameUi::run` with a closure that describes the UI.

> **Example:** a small panel with a score and a reset button.
>
> ```rust
> use pill_core::math::Vector2f;
> use pill_engine::{system, Input, Res, ResMut, SystemError};
> use pill_project_ui::{egui, GameUi, InputFrame, UiFrameSlot, PRIMARY_SURFACE};
>
> #[system(name = "score_panel")]
> pub fn score_panel_system(
>     mut game_ui: ResMut<GameUi>,
>     mut slot: ResMut<UiFrameSlot>,
>     input: Res<Input>,
>     mut score: ResMut<Score>,
> ) -> Result<(), SystemError> {
>     let (Some(mut game_ui), Some(mut slot), Some(input), Some(mut score)) =
>         (game_ui.get_mut(), slot.get_mut(), input.get(), score.get_mut())
>     else {
>         return Ok(());
>     };
>
>     // Copy this update's input first: `run` borrows the UI mutably.
>     let input_frame = InputFrame::capture(input);
>
>     game_ui.run(
>         &mut slot,
>         &input_frame,
>         Vector2f::new(320.0, 200.0), // the area the UI lays out in
>         1.0,                         // scale factor
>         PRIMARY_SURFACE,             // the main window
>         |ui| {
>             egui::Window::new("Score").show(ui.ctx(), |window| {
>                 window.label(format!("Points: {}", score.points));
>                 if window.button("Reset").clicked() {
>                     score.points = 0;
>                 }
>             });
>         },
>     );
>     Ok(())
> }
> ```
>
> Click **Reset**, and the button's `clicked()` returns `true` in the next update's pass, which sets the score to zero. The label shows the new value in the same pass.

That is the whole API. The closure runs every update, so the UI always shows the current values. There is no "update the label" step and no widget object to keep.

The `circus_demo` and `pills_awakens` examples under `examples/local/` both have a complete UI system in their `ui.rs`.

---

## Stage 2: What happens every update?

Your UI ECS system builds the UI during the update, and the renderer paints it at the end, over the 3D picture.

```text
 one update
 ──────────────────────────────────────────────────────────────────────────────────
  Input (engine)
     │  InputFrame::capture
     ▼
  your UI ECS system ── GameUi::run ──────────────────────────────────────────┐
     │                                                                        │
     │  1. engine input → egui events                                         │
     │  2. egui runs your closure → shapes                                    │
     │  3. shapes → triangles → a plain DrawList (+ changed images)           │
     │  4. publish the UiFrame into UiFrameSlot                               │
     ▼                                                                        │
  `rendering` post-update ECS system: takes the frame out of the slot         │
     │  into RenderFrame.ui                                                   │
     ▼                                                                        │
  the renderer draws the 3D scene, the overlay, then the UI on top ◄──────────┘
```

1. **Input becomes egui events.** The engine reports input as a snapshot: what is held, what went down this update, what was typed. egui wants a list of events. `InputFrame` copies the snapshot, and the bridge in `pill_project_ui::input` turns it into egui's events, in the order egui needs: modifiers before keys, the pointer move before the click at that position.
2. **egui runs your closure.** The closure adds widgets, egui decides what was clicked and hovered, and lays everything out as shapes.
3. **Shapes become a plain draw list.** egui turns the shapes into triangles. `pill_project_ui` copies those triangles into a `DrawList` from `pill_ui_frame`: vertices, indices, and a list of commands (draw these indices with this texture, clip to this rectangle).
4. **The frame waits in the slot.** `GameUi::run` publishes the `UiFrame` into the `UiFrameSlot` resource. If a previous frame was never taken, it is replaced: the renderer always gets the newest UI.
5. **The `rendering` ECS system takes it.** It runs after your ECS systems (it is a post-update ECS system), moves the frame from the slot into `RenderFrame.ui`, and the renderer's UI painter draws it last, over each window.

> **Example:** the player clicks **Reset**. In that update, the bridge turns the press into an egui click event, the closure's `button("Reset").clicked()` returns `true`, the score becomes zero, the label in the same closure shows `Points: 0`, and the renderer paints the panel with the new label at the end of the update.

### What does the draw data look like?

Everything in `pill_ui_frame` is plain data that any renderer can draw:

| Type          | What it holds                                                                       |
| ------------- | ----------------------------------------------------------------------------------- |
| `UiVertex`    | A position in logical pixels, a texture coordinate and a colour                    |
| `DrawCommand` | `PushClip(rect)`, `PopClip`, or `Draw { texture, first_index, index_count }`         |
| `DrawList`    | One update's vertices, indices and commands                                         |
| `UiDraw`      | One `DrawList` plus the surface it belongs on and its scale factor                  |
| `UiTexture`   | One whole image: id, size, RGBA pixels, a revision number                            |
| `UiFrame`     | Every `UiDraw` of this update, plus the images that changed                         |

The renderer's UI painter (`pill_master_renderer`'s `ui` module) uploads changed images, turns each clip rectangle into a GPU scissor rectangle, and draws each list in one call per surface.

---

## Stage 3: Why are there so many UI crates?

Because each crate solves one problem: keeping UI state alive through hot reload, keeping egui out of the renderer, and sharing one look between the project and the editor.

```text
   your project ────► pill_project_ui ─────────► pill_ui_frame ◄──── pill_master_renderer
                      (egui context,               (plain draw data,     (paints the
                       input, textures)             UiFrameSlot)          draw lists)
                           │
                           ├──► pill_ui_kit   (theme → egui style, ChunkyButton)
                           └──► pill_ui_theme (Theme, .theme files, fonts)
                                     ▲
   the editor ────► pill_editor_core ┘   (the editor's own egui copy and its kit)
```

| Crate              | Holds                                                                    | Kind          | Links egui? |
| ------------------ | ------------------------------------------------------------------------ | ------------- | ----------- |
| `pill_ui_frame`    | The plain draw data and `UiFrameSlot`                                     | Shared DLL    | No          |
| `pill_project_ui`  | `GameUi`: the egui context, the input bridge, the converter, the texture mirror | Shared DLL | Yes   |
| `pill_ui_theme`    | `Theme`, `ThemeOverrides` (the `.theme` file), `FontAsset`                | Shared DLL    | No          |
| `pill_ui_kit`      | Turns a `Theme` into egui's style and fonts; `ChunkyButton`, style variants | Compiled into each UI | Yes |
| `pill_editor_core` | The editor's egui, dock, boundary types and model (Stage 8)              | Shared DLL    | Yes         |

### Why does the renderer never see egui?

Three reasons, from the most to the least strict:

1. **One link unit cannot hold two copies of egui.** The renderer module is built separately from your project. If both linked egui, the renderer's DLL could end up with a second copy of egui built in a different way, which Windows cannot link together. Plain draw data needs no egui at all.
2. **The renderer reloads on its own.** Edit the renderer, and it is rebuilt and swapped while your UI keeps running. If the renderer held egui state, a renderer reload would lose it.
3. **Any producer can feed it.** The renderer draws a `DrawList`, not "an egui UI". Anything that can fill a `DrawList` can put UI on screen. The renderer itself does: its debug labels are a `DrawList` too.

The project and the renderer never name each other. They meet in the `UiFrameSlot` resource, which both reach by its fixed shared name.

### Why is `pill_project_ui` a shared DLL?

So that **the egui context outlives your project's DLL**. The context holds the fonts, the widget state (which windows are collapsed, which text field has focus, where a scroll area is scrolled to) and the textures. Your project's DLL is replaced on every hot reload. `pill_project_ui` is a separate shared DLL that stays loaded, and `GameUi` is defined there, so the same `GameUi` value, with the same context, is still in the world after the reload.

### Why is the kit compiled into each UI instead of shared?

The kit writes egui values (`egui::Style`, font definitions) into an egui context. An egui value must never cross a DLL boundary, because the project's egui and the editor's egui are separate copies and their types are not interchangeable. So the kit is an `rlib`: `pill_project_ui` and `pill_editor_core` each compile their own copy, and each copy writes only into its own egui. `pill_ui_theme`, in contrast, holds plain values with no egui in them, so it can be one shared DLL that both UIs read.

A project never names the kit directly. It reaches it as `pill_project_ui::kit`.

---

## Stage 4: How do the UI and the project share input?

The UI and the rest of your project read the **same** input. egui does not consume anything: a click on a button is also a click in the engine's `Input`. Your ECS systems decide whether to ignore input the UI is using.

After every pass, `GameUi` records what the UI claimed:

| Method                     | `true` when                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| `GameUi::wants_pointer()`  | The pointer is over a UI window, or the UI is dragging something             |
| `GameUi::wants_keyboard()` | A UI text field has keyboard focus                                           |

> **Example:** a camera ECS system turns the view while the right mouse button is held. Without a check, dragging a UI slider with the right button would also spin the camera. The `circus_demo` camera checks first:
>
> ```rust
> let ui_wants_pointer = game_ui.get().is_some_and(GameUi::wants_pointer);
> let mouse_delta = if input.mouse_button_held(MouseButton::Right) && !ui_wants_pointer {
>     input.mouse_delta()
> } else {
>     Vec2::ZERO
> };
> ```
>
> Its game ECS system does the same with `wants_keyboard()`, so typing into a text field does not also trigger keyboard shortcuts.

The flags describe the **last** pass. If your ECS system runs before the UI ECS system in the same update, it reads the previous update's answer. One update late is fine for gating input, and it means the order of the two ECS systems does not matter.

---

## Stage 5: How do images and fonts reach the GPU?

egui draws text from a **font atlas**, an image that holds every glyph it has drawn so far, and it can draw your own images too. Both reach the renderer as `UiTexture`s, carried by the frame.

egui reports texture changes as **deltas**: the whole image when a texture is new, and a small patch when part of it changes (the font atlas gets a patch for every new glyph). Patches have a problem: the renderer can be rebuilt while the UI runs (Stage 7), and a rebuilt renderer starts with no textures. A patch cannot give it the parts of the image that did not change.

So `pill_project_ui` keeps a **texture mirror**: a full copy of every texture egui handed out, with a revision number. Each delta patches the copy and bumps its revision, and the frame carries the **whole** changed image. The renderer's UI painter uploads an image whenever its revision differs from the one it last uploaded.

> **Example:** the renderer module is hot reloaded. The new UI painter has no textures. On its first frame, the `rendering` ECS system asks the slot for a resend (`request_texture_resend`). The next `GameUi::run` sees the new request and carries every mirrored image again. The new painter uploads them, and the UI's text appears in the same update instead of drawing as empty boxes.

Pixels in the frame use straight alpha: each colour channel is stored as it is, not multiplied by alpha. egui's own pixels are premultiplied, so the mirror converts them on the way in.

---

## Stage 6: How do themes work?

A UI's look is a **theme**: a `Theme` value from `pill_ui_theme` with every colour, size, spacing, corner radius and font the UI needs. A theme is plain data, not CSS and not egui's style.

### What is in a theme, and where does it come from?

Two built-in themes exist: `Theme::fallback()`, a neutral dark theme, and `Theme::brutalist()`, flat colours with hard shadows. A project picks one in code, changes what it wants, and can add a `.theme` file under `res` on top.

```text
   code default            .theme file (sparse)              the applied theme
   Theme::brutalist()  +   { accent: "#33d17a",       =      every value of brutalist,
   (complete)                heading size: 24 }              with the accent and the
                                                             heading size replaced
```

The rule that makes this safe: **a base theme is always complete, and a `.theme` file holds only what it changes.** The merge starts from the complete base, never from egui's defaults, so a value the file leaves out keeps the base value. And one invalid value rejects the whole file, so the UI never paints a half-applied theme.

> **Example:** `circus_demo` installs the brutalist theme with its own body font, and a `.theme` file that changes two values:
>
> ```rust
> let mut theme = pill_project_ui::Theme::brutalist();
> theme.fonts.body = Some("fonts/Silkscreen-Regular.ttf".to_string());
> pill_project_ui::install_with_theme(
>     engine,
>     pill_project_ui::ThemeInstall::new(theme).with_override("ui/accent.theme"),
> );
> ```
>
> `res/ui/accent.theme`:
>
> ```json
> {
>   "format_version": 1,
>   "asset_type": "pill_ui_theme::ThemeOverrides",
>   "guid": "000000000000000000000000000000a1",
>   "asset": {
>     "palette": { "accent": "#33d17a" },
>     "text_styles": { "heading": { "size": 24.0 } }
>   }
> }
> ```

### Does a theme change apply live?

Yes. A `.theme` file is an ordinary asset. When you save it, the asset store reimports it, and an ECS system that `install_with_theme` registers (`ui_theme`) sees the new content version, merges again and applies the result. The log says `[ui] theme applied`. Fonts work the same way: edit a `.ttf` under `res`, and the UI picks it up.

A theme is applied **only when something changed**. Installing fonts in egui is expensive, so `GameUi` remembers which fonts it installed and skips the install when they are the same.

### How do fonts work?

A theme names up to three font families: `body`, `display` and `monospace`, as paths under `res`. Each is loaded as a `FontAsset` through the asset store. A font that cannot be loaded is refused by name in the log, and that family falls back to the built-in font. The other families still use theirs.

### What does the UI kit add?

`pill_ui_kit` turns a `Theme` into egui's style and fonts. It also adds what stock egui cannot draw:

- **Style variants** `primary`, `secondary` and `danger`, which restyle stock egui widgets inside a `ui.scope`.
- **`ChunkyButton`**, a button whose face sits on a hard offset shadow and presses into it while held.

```rust
if ui.add(pill_project_ui::kit::ChunkyButton::new("Reset", &theme).accent(true)).clicked() {
    // ...
}
```

### Can a project's theme reach the editor?

Only through its own folder. Theme paths have a **scope**:

- The project's UI may not name anything under `res/editor/`. That path is refused.
- The editor's project theme layer must be under `res/editor/`, by default `res/editor/editor.theme`.
- `res/editor/` is **never** packed into a shipping build, so editor themes and fonts never ship with the project.

The editor merges three layers, in order: its own code default, the user's theme file (named by the `theme` preference), and the project's `res/editor/` theme. Each layer only overrides values, exactly as above.

---

## Stage 7: How does the UI survive a hot reload?

The UI survives because **all of its long-lived state lives outside the DLL that reloads**. Edit your UI code, and the panel stays on screen, still collapsed or expanded, with the text you typed still in its field.

### What happens when your project reloads?

1. The host swaps your project's DLL.
2. The new DLL's entry point calls `install_with_theme` again (Stage 1 says which entry point). That registers the `GameUi` and `UiFrameSlot` types for the new generation, but **keeps the existing values**: it inserts a new `GameUi` only when the world has none. It applies the theme again only if the theme or the fonts changed.
3. Your UI ECS system, now from the new DLL, calls `run` on the same `GameUi`. The context, its fonts, widget state and textures are exactly as they were.

Your UI ECS system can also be a `#[pill_hot]` function. Then a body edit is **hot patched**: only that one function is replaced, and nothing reloads at all. `circus_demo`'s `ui.rs` explains how to keep a hot UI file patchable.

### What is the one rule your UI code must follow?

**Never store your own types or closures inside the egui context.**

egui's context can keep values of any type alive between passes: `ctx.data_mut(...)`, repaint callbacks, `on_begin_pass` plugins, paint callbacks. A value your project stores there carries pointers into your project's DLL: the code that drops it, and the methods of its type. After a hot reload, that DLL is unloaded. The next time egui touches the value, it runs code that is no longer there, and the program crashes.

> **Example:** your UI code does `ctx.data_mut(|data| data.insert_temp(id, MyPanelState { .. }))`. It works until you save the file. The project reloads, the old DLL is unloaded, and the next pass that reads or drops `MyPanelState` jumps into unmapped memory.
>
> Instead, keep `MyPanelState` in a world resource your project owns. Resources go through the engine's reload handling, so they survive safely.

`test_coding_standards.py` flags those calls in reloadable crates.

### What happens when the renderer reloads?

The UI does not notice. The UI state lives in `pill_project_ui`, not in the renderer. The new UI painter starts empty and asks for every texture again (Stage 5), and the next frame looks the same as before.

| Edit                              | What happens to the UI                                                |
| --------------------------------- | --------------------------------------------------------------------- |
| A `#[pill_hot]` UI ECS system body | Hot patched; nothing reloads                                          |
| Other project code                | The project reloads; `GameUi` and its context are kept                 |
| `res/ui/*.theme` or a font        | Reimported; the theme is merged and applied again                     |
| The renderer module               | The painter is rebuilt and re-uploads every texture                   |
| `pill_project_ui` itself          | Needs a restart: it is a shared DLL that never reloads                |

---

## Stage 8: How is the editor's UI different?

The editor uses egui too, but it is built the other way around: the UI is a hot-reloadable **module**, and the editor's **executable** paints it. The editor has its own window, its own GPU device and its own egui copy. None of it goes through the project's renderer.

```text
 pill_editor (executable)                         pill_editor_shell (module, reloads)
 ───────────────────────                          ──────────────────────────────────
 owns the window, the GPU device, the input
     │
     │  writes EguiShellInput (window size, events, cursor)
     ├──────────────────────────────────────────►  `egui_shell` post-update ECS system
     │                                              runs one egui pass: the menu bar, the dock,
     │                                              Entities, Inspector, Assets, Systems, ...
     │  reads EguiShellFrame (triangles, textures,  │
     │  viewport rectangles, queued commands)       │
     ◄──────────────────────────────────────────────┘
     │
     ├─ places the scene and game child windows at the viewport rectangles
     ├─ paints the UI with egui-wgpu into a transparent overlay above them
     └─ applies the queued commands to the world at the frame boundary
```

### Who does what?

| Part                          | Crate                            | Does                                                                      |
| ----------------------------- | -------------------------------- | ------------------------------------------------------------------------- |
| The executable                | `pill_editor`                    | Window, GPU device, input, the overlay, child windows, applying commands |
| The shell module              | `pill_editor_shell`              | One egui pass per update: menu bar, dock, every tab                      |
| The shared model              | `pill_editor_core`               | egui and egui_dock, the boundary types, the dock layout, snapshots, commands, the session state |

### Why can the editor pass egui output directly, when the project cannot?

Because the editor has exactly **one** egui copy for the executable and the shell: the one inside the shared `pill_editor_core` DLL. Both sides link that DLL, so an egui triangle list built by the shell is the same type the executable paints. `EguiShellFrame` therefore carries egui's own `ClippedPrimitive`s and texture deltas, and the executable draws them with `egui-wgpu`.

The project's UI is in a different position: the renderer that paints it is a separately built module that must not link egui at all (Stage 3). So the project's UI is converted into plain `pill_ui_frame` data first.

Even in the editor, only plain data crosses: no GPU handles, and no callbacks. `EguiShellFrame` drops egui's paint callbacks, because a callback is code from the shell module, and the module can be unloaded.

### How does the UI sit on top of the scene?

Each scene view and the Game view is its **own child window**, drawn by the project's renderer. The UI is drawn in a separate **overlay** layer above all of them:

- The scene and game tabs draw nothing in their body. They leave a hole and report its rectangle (`scene_rects`, `game_rect`) in the frame.
- The executable moves each child window to its rectangle, so the scene shows through the hole.
- On Windows, the overlay is a DirectComposition layer: the desktop compositor blends it over the child windows pixel by pixel, so menus and the floating toolbox draw over the scene with transparency.

Where composition is not available, or with `PILL_EDITOR_NO_OVERLAY=1`, the editor falls back to drawing the UI into the window's own surface. The UI is then opaque, and a scene child window hides any UI drawn over it.

The browser editor does the same with two canvases: the scene on one, and the UI on a transparent canvas above it.

> **Example:** you open the File menu over the `Scene` view. The menu is drawn in the overlay, above the scene's child window. The shell also adds the menu's rectangle to `overlay_regions`, so when you click a menu item, the executable knows the click belongs to the UI and does not also pick an entity in the scene below it.

### How does the editor's UI change the world?

The shell never edits the world directly. It reads an **`EditorSnapshot`**, a copy of what the editor shows (entities, components, assets, preferences), and writes **commands** into `PendingEditorCommands`. The executable applies them at the frame boundary and records them in the undo history.

> **Example:** you type `5` into a Transform's X field in the Inspector. The shell queues a `SetField` command. At the frame boundary, the executable writes the value into the entity's `TransformComponent` and records the change, so `Ctrl+Z` can undo it. The next snapshot shows the new value.

### How does the editor's UI survive a reload of the shell?

The same way the project's UI does, with one extra step:

- The egui context, the dock layout, open dialogs and panel positions live in **`EguiShellState`**, a world resource defined by `pill_editor_core`, the shared DLL that never reloads. A new shell generation finds it and keeps using it.
- On the **first frame of every shell generation**, the shell clears egui's internal data map. egui keeps small values there (scroll positions, a text field's cursor), and a value created by the previous generation would point into its unloaded DLL. Clearing it loses that small state, but never reads a dangling pointer.

The tab bodies are `#[pill_hot_fn]` functions, so editing one tab's code is usually a hot patch, not a reload.

### Game UI and editor UI side by side

| Question                          | Project UI (`pill_project_ui`)               | Editor UI (shell module)                            |
| --------------------------------- | -------------------------------------------- | --------------------------------------------------- |
| Where does the egui pass run?     | Your ECS system, via `GameUi::run`           | The `egui_shell` post-update ECS system              |
| Who paints it?                    | The project's renderer (`pill_master_renderer`) | The editor executable, with `egui-wgpu`          |
| What crosses to the painter?      | Plain `pill_ui_frame` data                   | egui's own triangles, through one shared egui copy  |
| Where is it drawn?                | Over the 3D picture, in the same window      | In an overlay above the scene's child windows       |
| Where does the context live?      | `GameUi`, in the `pill_project_ui` DLL       | `EguiShellState`, in the `pill_editor_core` DLL     |
| How does it change the world?     | Directly, like any ECS system                | Through commands the executable applies             |
| Ships with the project?           | Yes, in every build                          | Never; development only                             |

The project's UI also runs inside the editor: it is drawn on the project's primary surface, which is the window the editor's `Game` tab shows.

---

## Where does each part live?

| What                                        | Where                                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------- |
| `GameUi`, `install`, `install_with_theme`   | `modules/ui/pill_project_ui/src/lib.rs`                                     |
| The input bridge (`InputFrame`, `raw_input`) | `modules/ui/pill_project_ui/src/input.rs`                                   |
| egui triangles → `DrawList`                 | `modules/ui/pill_project_ui/src/convert.rs`                                 |
| The texture mirror                          | `modules/ui/pill_project_ui/src/textures.rs`                                |
| Draw data, `UiFrameSlot`                    | `modules/rendering/pill_ui_frame/src/`                                      |
| `Theme`, `.theme` files, fonts              | `modules/ui/pill_ui_theme/src/`                                             |
| Theme → egui style, `ChunkyButton`          | `modules/ui/pill_ui_kit/src/`                                               |
| The renderer's UI painter                   | `modules/extensions/pill_master_renderer/modules/runtime/gpu/src/ui/renderer.rs` |
| Slot → `RenderFrame.ui`                     | `modules/extensions/pill_master_renderer/modules/runtime/gpu/src/frame.rs` |
| The editor's model, boundary, session       | `modules/editor/pill_editor_core/src/` (`boundary.rs`, `session.rs`)        |
| The editor's shell module and its tabs      | `modules/editor/pill_editor_shell/src/shell/`                               |
| The editor's overlay and child windows      | `modules/editor/pill_editor/src/overlay.rs`, `runner/windows.rs`            |
| Working examples                            | `examples/local/circus_demo/src/ui.rs`, `examples/local/pills_awakens/pills_awakens_rust/src/ui.rs` |

## Which log lines show what the UI did?

| Log line                                    | Means                                                                        |
| ------------------------------------------- | ---------------------------------------------------------------------------- |
| `[ui] producer=game`                        | The world has a `UiFrameSlot`: the project's UI feeds the frame              |
| `[ui] producer=none`                        | No UI was installed; the frame carries no UI                                 |
| `[ui] surface=0 draws=1 vertices=…`         | What the painter drew on a surface; logged every 120 frames                  |
| `[ui] theme applied layers=code,file …`     | The project's theme was merged and applied; `layers=code` means no `.theme` file |
| `[ui] theme refused: …`                     | A `.theme` file or a font was rejected; the previous theme stays             |
| `[editor] theme applied layers=…`           | The editor's merged theme was installed                                      |

## Where to read next

- [Rendering](rendering.md): how the frame the UI is painted on is drawn.
- [Hot reloading](hosting/hot_reloading.md): what a reload keeps and replaces, in general.
- [Hot function patching](hosting/hot_function_patching.md): how a `#[pill_hot]` UI ECS system is patched.
- [Editor](../editor/editor.md): running the editor.
