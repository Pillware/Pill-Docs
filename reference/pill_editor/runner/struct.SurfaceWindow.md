<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-495"></a>

# Struct `pill_editor::runner::SurfaceWindow`

```rust
pub(in runner) struct SurfaceWindow;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3409`

One view surface's window: a child of the main window when the platform
allows one, the detached top-level fallback otherwise.

## Fields

<a id="rustdoc-item-1292"></a>

### `window`

```rust
window: std::sync::Arc<winit::window::Window>
```

The child window - or the detached fallback - the renderer presents
into.

<a id="rustdoc-item-1293"></a>

### `detached`

```rust
detached: bool
```

Whether this is the detached fallback rather than a child window.

<a id="rustdoc-item-1294"></a>

### `visible`

```rust
visible: bool
```

Whether the window is shown; a window starts hidden and a placement
shows it, because the dock may not show its tab yet.

<a id="rustdoc-item-1295"></a>

### `placed`

```rust
placed: Option<(i32, i32, u32, u32)>
```

The last placed rectangle in physical pixels, so redundant moves
and resizes are skipped.

<a id="rustdoc-item-1296"></a>

### `origin`

```rust
origin: (i32, i32)
```

The client-area origin in the parent's coordinates the last
placement applied, in physical pixels. Pointer events this window
reports are relative to it; a resize clears `placed` but never moves
the window, so the origin survives that.

## Associated functions and methods

<a id="rustdoc-item-1297"></a>

### `open`

```rust
pub(in runner) fn open(event_loop: &ActiveEventLoop, main: &Window, title: &str, kind: &str) -> Result<SurfaceWindow, EditorError>;
```

Create a view window: a child of the main window when the platform
allows one, the detached fallback otherwise.

#### Errors

Returns [`EditorError::WindowCreation`](../frontend/enum.EditorError.md#rustdoc-item-265) when the detached fallback
cannot be created; a refused child window only logs before the fallback
is tried.

<a id="rustdoc-item-1298"></a>

### `place`

```rust
pub(in runner) fn place(self: &mut Self, x: i32, y: i32, width: u32, height: u32, screen_owned: bool);
```

Place the window at a rectangle in physical pixels, showing it if it
was hidden and skipping redundant moves.

`screen_owned` is a popped-out view's window: the pop-out owns a screen
rectangle on whatever monitor it is on, so the position always applies
and the client origin is read back after the move, because decorations
make it differ from the outer position. A docked view instead ignores
the position when the platform forced it to the detached fallback - it
is its own top-level window then - and a docked child takes its origin
from the rectangle's own corner.

<a id="rustdoc-item-1299"></a>

### `open_top_level`

```rust
pub(in runner) fn open_top_level(event_loop: &ActiveEventLoop, title: &str) -> Result<SurfaceWindow, EditorError>;
```

Create a top-level window for a popped-out scene view: decorated, so the
person can move and close it like any window.

#### Errors

Returns [`EditorError::WindowCreation`](../frontend/enum.EditorError.md#rustdoc-item-265) when the platform refuses the
window.

<a id="rustdoc-item-1300"></a>

### `hide`

```rust
pub(in runner) fn hide(self: &mut Self);
```

Hide the window: the dock no longer shows its tab, so nothing may
paint in its rectangle.

<a id="rustdoc-item-1301"></a>

### `size`

```rust
pub(in runner) fn size(self: &Self) -> (u32, u32);
```

The window's current physical size.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
