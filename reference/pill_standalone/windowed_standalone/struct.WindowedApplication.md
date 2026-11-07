<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-264"></a>

# Struct `pill_standalone::windowed_standalone::WindowedApplication`

```rust
pub(in windowed_standalone) struct WindowedApplication;
```

Visibility: `{'restricted': {'parent': 184, 'path': '::windowed_standalone'}}` · Source: `frontends\pill_standalone\src\windowed_standalone.rs:194`

State `winit` keeps for the lifetime of the standalone application.

It owns the configured project, the native window and the windowed driver.
It also saves the first failure that happens inside the event loop, so
[`run`](fn.run.md#rustdoc-item-263) can return it after the loop exits.

## Fields

<a id="rustdoc-item-254"></a>

### `project`

```rust
project: pill_development_host::HostConfig
```

The project this run hosts, as the compiled posture resolved it.

<a id="rustdoc-item-255"></a>

### `windowed_driver`

```rust
windowed_driver: Option<pill_development_host::RenderingHost>
```

The project running with the renderer attached: the development host or
the shipped runtime, whichever this build compiled.

<a id="rustdoc-item-256"></a>

### `window`

```rust
window: Option<std::sync::Arc<winit::window::Window>>
```

The main window, once `resumed` has created it.

<a id="rustdoc-item-257"></a>

### `is_window_shown`

```rust
is_window_shown: bool
```

Whether the hidden startup window has been revealed after its first frame.

<a id="rustdoc-item-258"></a>

### `setup_error`

```rust
setup_error: Option<crate::error::RunError>
```

The first failure recorded inside the loop; returned after it exits.

<a id="rustdoc-item-259"></a>

### `gamepads`

```rust
gamepads: pill_input::gamepads::Gamepads
```

The gamepads, polled before every frame.

<a id="rustdoc-item-261"></a>

### `second_view`

```rust
second_view: Option<SecondView>
```

The second window, when `PILL_SECOND_VIEW=1` asked for one.

<a id="rustdoc-item-262"></a>

### `pick_test`

```rust
pick_test: Option<PickTest>
```

The picking test, when `PILL_PICK_TEST=1` asked for it.

## Associated functions and methods

<a id="rustdoc-item-265"></a>

### `open_second_view_if_requested`

```rust
pub(in windowed_standalone) fn open_second_view_if_requested(self: &mut Self, event_loop: &ActiveEventLoop);
```

Open the second window as surface 1 when `PILL_SECOND_VIEW=1`, with a
camera of its own. A failure is reported and the run goes on without
the second view.

<a id="rustdoc-item-267"></a>

### `second_view_event`

```rust
pub(in windowed_standalone) fn second_view_event(self: &mut Self, event: WindowEvent);
```

Route one event of the second window. It handles close and resize; its
redraws are drawn with the main window's frames.

<a id="rustdoc-item-270"></a>

### `present_first_frame_and_reveal`

```rust
pub(in windowed_standalone) fn present_first_frame_and_reveal(self: &mut Self, event_loop: &ActiveEventLoop);
```

Present one frame while the window is still hidden, then reveal it.

The window opens holding a rendered frame, so the OS default white
startup background is never visible: `winit` has no way to set the
client area's background color instead. The frame is presented
synchronously because a hidden window never receives redraw requests
on Windows.

<a id="rustdoc-item-271"></a>

### `redraw`

```rust
pub(in windowed_standalone) fn redraw(self: &mut Self, event_loop: &ActiveEventLoop);
```

Advance and present one update, then schedule the next redraw.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `ApplicationHandler`
