<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-220"></a>

# Struct `pill_editor_shell_egui_editor::shell::EditorTabViewer`

```rust
pub struct EditorTabViewer<'a>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell.rs:302`

Draws the dock's tabs; the tab bodies come from the tab functions.

The type and every field are public because a hot patch for [`run_frame`](fn.run_frame.md#rustdoc-item-217)
is compiled as its own crate, and the generated source builds this value
through the package path. The rule is the crate header's: everything a hot
function's body names must be reachable from outside.

## Fields

<a id="rustdoc-item-1021"></a>

### `snapshot`

```rust
snapshot: &'a EditorSnapshot
```

The engine data the tabs read.

<a id="rustdoc-item-1022"></a>

### `selection`

```rust
selection: &'a mut EditorSelection
```

The shared selection the tabs read and write.

<a id="rustdoc-item-1023"></a>

### `asset_dialog`

```rust
asset_dialog: &'a mut Option<AssetDialog>
```

The asset dialog that is open, if one is; the Assets tab and the
dialog window both read and write it.

<a id="rustdoc-item-1024"></a>

### `pending`

```rust
pending: &'a mut PendingEditorCommands
```

The queue the assets actions push their recorded batches into.

<a id="rustdoc-item-1025"></a>

### `preferences_draft`

```rust
preferences_draft: &'a mut Option<preferences::PreferencesDraft>
```

The Preferences tab's unsaved field buffers; the tab seeds them
from the snapshot and a save clears them.

<a id="rustdoc-item-1026"></a>

### `toolbox`

```rust
toolbox: &'a mut ToolboxSession
```

The floating viewport toolboxes' session state: where each scene
view's toolbox floats and what the log already reported.

<a id="rustdoc-item-1027"></a>

### `inspector`

```rust
inspector: &'a mut InspectorSession
```

The Inspector's collapsed sections and its logged geometry.

<a id="rustdoc-item-1028"></a>

### `browser`

```rust
browser: &'a mut ProjectBrowser
```

The Assets tab's project browser: the folder its grid lists, the
tree's open folders and the tile size.

<a id="rustdoc-item-1029"></a>

### `scene_rects`

```rust
scene_rects: Vec<Option<ShellRect>>
```

The scene viewports' body rectangles this pass, in logical points, one
slot per view index. The frontend places each viewport's child window
at its slot. The list is sized from the dock before the pass, so a view
the person just added already has a slot.

<a id="rustdoc-item-1030"></a>

### `game_rect`

```rust
game_rect: Option<ShellRect>
```

The game viewport's body rectangle this pass, in logical points; the
frontend places the primary surface's child window at it.

<a id="rustdoc-item-1031"></a>

### `overlay_regions`

```rust
overlay_regions: Vec<ShellRect>
```

The regions drawn over the viewport this pass, in logical points; a
click inside one belongs to the UI, not to a scene pick. The overlay
chips, the menus, the toasts and the dialogs all add their rectangles
here.

<a id="rustdoc-item-1032"></a>

### `frames_per_second`

```rust
frames_per_second: f32
```

The editor's smoothed frame rate, for the scene's counter.

<a id="rustdoc-item-1033"></a>

### `active_tabs`

```rust
active_tabs: &'a [EditorTab]
```

The active tab of each leaf this pass, one entry per leaf. The tab bar
draws its accent underline under these tabs only, so an unselected tab
keeps the strip's neutral line.

<a id="rustdoc-item-1034"></a>

### `deferred`

```rust
deferred: &'a mut FrameRequests
```

What the pass could not do while the dock and its tabs were borrowed:
pop a tab out or re-dock one, open a new scene view, hand a dragged
tile to the OS, or quit. Each request is written where it is raised and
applied by `settle_pass` after the pass.

<a id="rustdoc-item-1035"></a>

### `console_filters`

```rust
console_filters: &'a mut ConsoleFilterSettings
```

The Console tab's filters; the executable applies them
to the history on its next frame.

<a id="rustdoc-item-1036"></a>

### `requests`

```rust
requests: &'a mut ShellRequests
```

The requests this pass raises for the executable: the Problems row a
click asked to open, the menu's undo and redo steps, and the dock tab it
asked to show. `settle_pass` moves the value onto the frame the
executable drains.

<a id="rustdoc-item-1037"></a>

### `stats`

```rust
stats: &'a mut StatisticsSession
```

The timings the Statistics tab reads: the shell writes
them around each tab body, the tab only formats them.

<a id="rustdoc-item-1038"></a>

### `panels`

```rust
panels: &'a PanelRegistry
```

The panels the loaded modules registered: a module
tab's title, body and liveness all come from here.

<a id="rustdoc-item-1039"></a>

### `panel_budget`

```rust
panel_budget: &'a mut PanelBudget
```

Every module panel's build time, written around each panel body and
read by the tab's badge and by the budget toast.

<a id="rustdoc-item-1040"></a>

### `panel_commands`

```rust
panel_commands: &'a mut Vec<PanelCommand>
```

The commands the module panels asked for this pass, applied by the
executable at the frame boundary.

<a id="rustdoc-item-1041"></a>

### `panel_entities`

```rust
panel_entities: &'a [PanelEntityRow]
```

The world's entities, as module panels see them.

<a id="rustdoc-item-1042"></a>

### `panel_detail`

```rust
panel_detail: Option<&'a PanelEntityDetail>
```

The selected entity's components, as module panels see them.

<a id="rustdoc-item-1043"></a>

### `panel_answer`

```rust
panel_answer: Option<pill_editor_core::panels::PanelAnswer>
```

The answer a modal window took, read during the following pass. It is
owned here so the viewer never borrows the panel-window state that the
settle stage clears.

<a id="rustdoc-item-1045"></a>

### `panel_window_requests`

```rust
panel_window_requests: &'a mut Vec<(u16, PanelCommand)>
```

The windows the panels asked to open or close this pass, with the slot
that asked: applied after the dock, before the windows draw.

<a id="rustdoc-item-1046"></a>

### `pending_panel_window`

```rust
pending_panel_window: Option<(u16, &'a str)>
```

The slot a scripted window request named, and the window id it wants
that panel to open.

<a id="rustdoc-item-1047"></a>

### `pending_panel_window_used`

```rust
pending_panel_window_used: bool
```

Whether the pending window's panel drew this pass, so the request is
spent.

<a id="rustdoc-item-1048"></a>

### `clipboard`

```rust
clipboard: &'a mut pill_editor_core::clipboard::EditorClipboard
```

The shell's side of the OS clipboard: the request
the executable carries out, and the text it read back.

<a id="rustdoc-item-1050"></a>

### `previews`

```rust
previews: &'a mut pill_editor_core::session::PreviewStates
```

The asset tiles' previews: the textures to draw and the tiles this pass
drew, so the executable asks only for what is on screen.

<a id="rustdoc-item-1051"></a>

### `badges`

```rust
badges: &'a [ShellBadge]
```

The entity badges the executable projected into this frame's scene
views.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `TabViewer`
