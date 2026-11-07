<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-389"></a>

# Struct `pill_editor_core::boundary::EguiShellFrame`

```rust
pub struct EguiShellFrame;
```

Source: `editor\pill_editor_core\src\boundary.rs:179`

One shell pass's output, as plain data.

## Fields

<a id="rustdoc-item-366"></a>

### `meshes`

```rust
meshes: Vec<egui::epaint::ClippedPrimitive>
```

Tessellated meshes to draw. Paint callbacks are removed when the frame
is built.

<a id="rustdoc-item-368"></a>

### `textures`

```rust
textures: egui::TexturesDelta
```

Texture uploads the renderer must apply before drawing.

<a id="rustdoc-item-370"></a>

### `pixels_per_point`

```rust
pixels_per_point: f32
```

The pixels-per-point the meshes were tessellated with.

<a id="rustdoc-item-371"></a>

### `wants_pointer`

```rust
wants_pointer: bool
```

Whether egui wants the pointer: when true, a click should go to the UI
rather than to a scene viewport.

<a id="rustdoc-item-372"></a>

### `wants_keyboard`

```rust
wants_keyboard: bool
```

Whether egui wants the keyboard: when true, key presses should go to
the UI.

<a id="rustdoc-item-373"></a>

### `cursor_icon`

```rust
cursor_icon: egui::CursorIcon
```

The cursor icon egui asked for.

<a id="rustdoc-item-375"></a>

### `clipboard_text`

```rust
clipboard_text: Option<String>
```

Text egui asked to copy to the clipboard.

<a id="rustdoc-item-376"></a>

### `scene_rects`

```rust
scene_rects: Vec<Option<ShellRect>>
```

The scene viewports' body rectangles in logical points, one slot per
view index. The frontend places that view's child window here, so each
viewport follows the dock layout. A slot left `None` hides that
viewport's window, because its tab is not shown. The list has one slot
per view the dock knows, one past its highest view index.

<a id="rustdoc-item-377"></a>

### `game_rect`

```rust
game_rect: Option<ShellRect>
```

The game viewport's body rectangle in logical points. The frontend
places the primary surface's child window here, so the game view
follows the dock layout. `None` hides that window, because the Game tab
is not shown.

<a id="rustdoc-item-378"></a>

### `overlay_regions`

```rust
overlay_regions: Vec<ShellRect>
```

The UI rectangles the shell drew this pass, in logical points. A click
inside one belongs to the UI, not the scene, so the frontend never asks
the scene what is under it.

<a id="rustdoc-item-379"></a>

### `ime_allowed`

```rust
ime_allowed: bool
```

Whether IME composition should be enabled.

<a id="rustdoc-item-380"></a>

### `ime_rect`

```rust
ime_rect: Option<ShellRect>
```

Where the IME candidate window should appear, in logical points.

<a id="rustdoc-item-381"></a>

### `drag_out`

```rust
drag_out: Option<String>
```

The asset path a tile drag hands to the OS. The frontend starts an OLE
drag with it, so the person can drop the file into Explorer.

<a id="rustdoc-item-382"></a>

### `requests`

```rust
requests: crate::requests::ShellRequests
```

The asks this pass raised for the executable: a Problems row to open, an
undo or redo, a dock tab to show. The executable drains them at its
frame boundary and never reads the shell session for them.

<a id="rustdoc-item-384"></a>

### `quit_requested`

```rust
quit_requested: bool
```

Whether the shell's menu asked the editor to quit. The winit frontend
ends the run when it sees this flag; a browser frontend ignores it,
because a page cannot close itself safely.

<a id="rustdoc-item-385"></a>

### `repaint_after`

```rust
repaint_after: Option<std::time::Duration>
```

How soon egui asked for the next pass, when it asked at all. `None`
means no pass was requested. The frontend only checks whether a request
was made, and draws the next frame at once when one was.

<a id="rustdoc-item-387"></a>

### `popout_frames`

```rust
popout_frames: Vec<PopoutFrame>
```

One frame per tab popped out into its own OS window. The shell runs a
pass in that tab's own context, and the frontend paints the result into
the tab's window. A tab that appears here gets a window; a tab that
disappears from the list has its window closed.

## Associated functions and methods

<a id="rustdoc-item-390"></a>

### `discard_unapplied_textures`

```rust
pub fn discard_unapplied_textures(self: &mut Self);
```

Clears every texture update the frame still carries.

epaint panics when a `TexturesDelta` with unapplied updates is dropped.
A pass can replace a frame the executable never drew - a reload runs a
pass while the previous frame is still queued - so the old frame's
updates are discarded first. Popped-out windows carry frames of their
own and are cleared with it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Resource`
- `Default`
