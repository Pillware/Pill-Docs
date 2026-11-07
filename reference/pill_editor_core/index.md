<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8627"></a>

# pill_editor_core API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The egui editor's shared core: the UI libraries it re-exports, the dock
layout model and the editor's view of the engine.

## Responsibilities

- Re-export `egui` and `egui_dock` as the one copy the editor's frontend,
  its reloadable shell module and this crate all name.
- Carry the shell boundary ([`boundary`](boundary/index.md#rustdoc-item-452)) and the module panels a dock tab
  names ([`panels`](panels/index.md#rustdoc-item-5735)).
- Provide the bridge from the shell's window events to egui's input
  ([`input`](input/index.md#rustdoc-item-4577)), the editor's egui style ([`style`](style/index.md#rustdoc-item-8137)) and Phosphor's vendored
  icon fonts with the icons the chrome paints ([`icons`](icons/index.md#rustdoc-item-4424)).
- Own the dock layout: the tab set, the default layout and versioned
  persistence through `egui_dock`'s state ([`layout`](layout/index.md#rustdoc-item-5266)).
- Own the editor's snapshots of the engine and the commands it applies to
  it ([`editor_state`](editor_state/index.md#rustdoc-item-2404)).
- Own the clipboard documents ([`clipboard`](clipboard/index.md#rustdoc-item-1154)), the transform gizmos
  ([`gizmo`](gizmo/index.md#rustdoc-item-2489)) and the floating viewport toolbox ([`toolbox`](toolbox/index.md#rustdoc-item-8620)).
- Declare the layout persistence failures ([`error`](error/index.md#rustdoc-item-3735)).

## Design

Nothing here depends on a window or a GPU. The frontend owns the device
and draws the shell's frame with `egui-wgpu`, and the shell owns the egui
`Context`. `test_engine_layout.py` checks that no windowing or GPU crate is
reachable from this one. The crate is a shared `dylib`. The boundary types,
the layout and the commands cross between the editor executable and the
reloadable shell module, and one compiled copy per process gives them one
identity. The module world and the host world must resolve `egui`,
`egui_dock` and `epaint` identically, and the manifest pins the union of
their features.

## The reload-safety contract

egui's `Context` keeps arbitrary typed values and callbacks alive past the
frame that stored them. Reloadable crates (`extensions/**`,
`examples/**`) must never store their own types or closures in it. After a
reload, the stored value's drop code and vtable point into the image that
was unloaded, so touching the value runs code that is no longer there.

The APIs that keep boxed `Any`/`Fn` values inside the context are
`Context::data` and `Context::data_mut` (the `IdTypeMap` behind them),
`Context::set_request_repaint_callback`, `Context::on_begin_pass` and
`Context::on_end_pass` (plugins), and any shape carrying
`egui::PaintCallback`. `test_coding_standards.py` flags those calls in
reloadable crates. A line that deliberately touches the map carries the
`egui-state-ok` marker; only a test may use it, and only to plant a value
that a previous generation left behind.

Long-lived egui state therefore lives in a world resource defined by this
crate: the shell's [`session::EguiShellState`](session/struct.EguiShellState.md#rustdoc-item-5386), which a newly loaded shell
generation finds in the world and keeps using. The shell clears egui's data
map on the first frame of every generation
(`pill_editor_shell_egui_editor::shell::claim`), because a value left there
by a previous generation would be read through the vtable of an image that
is no longer loaded.

## Module contents

### Modules
- [`assets`](assets/index.md#rustdoc-item-169) — The Assets pipeline: the dialogs' state and the file-command batches the
- [`boundary`](boundary/index.md#rustdoc-item-452) — The plain data crossing the frontend/shell boundary.
- [`brand`](brand/index.md#rustdoc-item-457) — The editor's brand mark: the pill logotype stored as a precomputed coverage
- [`browser`](browser/index.md#rustdoc-item-569) — The Assets tab's project browser: the open folder and the listing rules the
- [`cadence`](cadence/index.md#rustdoc-item-666) — The redraw cadence: when the editor needs to draw a frame.
- [`camera`](camera/index.md#rustdoc-item-721) — The scene viewports' orbit cameras and their navigation gestures.
- [`clipboard`](clipboard/index.md#rustdoc-item-1154) — The clipboard documents that the copy and paste commands share.
- [`commands`](commands/index.md#rustdoc-item-1399) — The command registry: named actions, menus and rebindable shortcuts.
- [`console`](console/index.md#rustdoc-item-2194) — The Console tab's history, channels and filters.
- [`drain`](drain/index.md#rustdoc-item-2242) — The frame boundary: the pending-command drain, the undo/redo walk and the
- [`editor_files`](editor_files/index.md#rustdoc-item-2334) — The editor's own state documents on disk, all written the same safe way and
- [`editor_state`](editor_state/index.md#rustdoc-item-2404) — The editor's snapshots of the engine and the commands it applies to it.
- [`entities`](entities/index.md#rustdoc-item-3680) — The Entities tab's shared actions: the create and delete commands, queued
- [`error`](error/index.md#rustdoc-item-3735) — Layout persistence failures.
- [`gizmo`](gizmo/index.md#rustdoc-item-2489) — Transform gizmos: handle geometry, the drag calculations and snapping.
- [`history`](history/index.md#rustdoc-item-4360) — The undo and redo history of editor edits.
- [`icons`](icons/index.md#rustdoc-item-4424) — Phosphor's icons: the fonts, the glyphs and the duotone painting.
- [`input`](input/index.md#rustdoc-item-4577) — The bridge from the shell's own window events to egui's input.
- [`inspector`](inspector/index.md#rustdoc-item-4798) — The Inspector's editing helpers: field edits and asset settings rows.
- [`layout`](layout/index.md#rustdoc-item-5266) — The `egui_dock` layout: tab set, default layout and persistence.
- [`menubar`](menubar/index.md#rustdoc-item-5563) — The editor's menu bar: its titles, metrics and the items each menu holds.
- [`notices`](notices/index.md#rustdoc-item-5733) — What the host and the editor did, as plain data: toast events and Problems
- [`panels`](panels/index.md#rustdoc-item-5735) — The editor panels a module registers: their ids, draw functions, a marker
- [`preferences`](preferences/index.md#rustdoc-item-1654) — The Preferences tab's shared vocabulary: the file's editable keys and their
- [`previews`](previews/index.md#rustdoc-item-6390) — Asset previews: the preference that turns them on and the tiles worth
- [`problems`](problems/index.md#rustdoc-item-6394) — Build diagnostics: the problems the Problems panel shows.
- [`requests`](requests/index.md#rustdoc-item-6575) — The requests one shell pass raises for the editor executable.
- [`resources`](resources/index.md#rustdoc-item-6614) — The world resources the Inspector can show and edit.
- [`scene_workflow`](scene_workflow/index.md#rustdoc-item-6696) — The open scene: its path, guid and unsaved marker, and the file operations
- [`scripted`](scripted/index.md#rustdoc-item-7129) — The scripted test channel's grammar: one typed parse of a command line.
- [`session`](session/index.md#rustdoc-item-7463) — The egui shell's long-lived session state.
- [`state_watch`](state_watch/index.md#rustdoc-item-8050) — Polling the editor's state files for changes.
- [`style`](style/index.md#rustdoc-item-8137) — The editor's egui theme.
- [`systems`](systems/index.md#rustdoc-item-8469) — The Systems tab's shared logic: row labels, system toggles and the pause
- [`toolbox`](toolbox/index.md#rustdoc-item-8620) — The floating viewport toolbox: rows, geometry and the edits its rows queue.

## Re-exports

- `pub use egui;`
- `pub use egui_dock;`
- `pub use pill_ui_kit;`
