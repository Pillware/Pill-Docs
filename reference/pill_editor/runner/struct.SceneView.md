<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-493"></a>

# Struct `pill_editor::runner::SceneView`

```rust
pub(in runner) struct SceneView;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3181`

One scene view: its child window and its renderer surface.

## Fields

<a id="rustdoc-item-1220"></a>

### `window`

```rust
window: SurfaceWindow
```

The child window the project's renderer presents the scene into.

<a id="rustdoc-item-1221"></a>

### `surface_id`

```rust
surface_id: pill_player::SurfaceId
```

The renderer surface id the scene draws through.

<a id="rustdoc-item-1223"></a>

### `popped`

```rust
popped: bool
```

Whether `window` was created for a popped-out tab:
a top-level window the view follows to another monitor, rather than
the child window the dock places. A detached window the *platform*
forced is not a popped-out one, which is why the flag exists apart from
`SurfaceWindow::detached`.

## Associated functions and methods

<a id="rustdoc-item-1224"></a>

### `open`

```rust
pub(in runner) fn open(event_loop: &ActiveEventLoop, main: &Window, view: usize) -> Option<SceneView>;
```

Create the `view`-th scene view's child window.

A refusal is logged and leaves that view without a window.

<a id="rustdoc-item-1225"></a>

### `attach_to`

```rust
pub(in runner) fn attach_to(self: &mut Self, host: &mut RenderingHost, camera: &OrbitCamera, rebound: bool);
```

Attach the view's surface to the window it has now and publish the
view's camera binding for that surface.

The one attach path: the startup window, a popped-out top-level and a
redocked child all come through here, so the camera publish cannot be
forgotten on one of them.

<a id="rustdoc-item-1226"></a>

### `attach`

```rust
pub(in runner) fn attach(self: &mut Self, host: &mut RenderingHost, camera: &OrbitCamera);
```

Attach the view to the window it was opened with.

<a id="rustdoc-item-1227"></a>

### `rebind_window`

```rust
pub(in runner) fn rebind_window(self: &mut Self, host: &mut RenderingHost, window: SurfaceWindow, popped: bool, camera: &OrbitCamera);
```

Move the view onto `window` and attach to it: a popped-out view needs a
top-level window, and a redocked one needs a child of the editor window
again. The surface's previous window is dropped by the host when the new
one replaces it.

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
