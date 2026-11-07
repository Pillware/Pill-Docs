<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-272"></a>

# Trait `pill_player::runtime::FrameDriver`

```rust
pub trait FrameDriver { ... }
```

Source: `hosting\pill_player\src\runtime.rs:56`

What a frontend's loop needs from whatever runs the game.

[`Runtime`](struct.Runtime.md#rustdoc-item-235) implements it for a shipping build, its windowed counterpart
does too, and so does the development host. One frontend loop can therefore
drive any of them.

## Required and provided items

<a id="rustdoc-item-286"></a>

### `Error`

```rust
type Error: std::error::Error + 'static;
```

What a frame can fail with; a headless runtime cannot fail at all.

<a id="rustdoc-item-287"></a>

### `run_frame`

```rust
fn run_frame(self: &mut Self) -> Result<(), <Self as >::Error>;
```

Run one frame.

The driver logs the frame statistics itself, once per reporting window,
so no frontend has to carry them.

#### Errors

Returns the driver's error when the frame could not be completed. A
windowed driver returns its renderer's error.

<a id="rustdoc-item-288"></a>

### `engine_mut`

```rust
fn engine_mut(self: &mut Self) -> &mut Engine;
```

The engine this driver runs.

Required, because the default methods below are written in terms of it:
a driver that reached its engine another way would have to write them
all again.

<a id="rustdoc-item-289"></a>

### `push_input`

```rust
fn push_input(self: &mut Self, event: InputEvent);
```

Queue an input event for the next frame.

Implemented through [`Self::engine_mut`](#rustdoc-item-288), so every driver delivers
input the same way and a frontend cannot forget to forward it.

<a id="rustdoc-item-291"></a>

### `take_rumble_requests`

```rust
fn take_rumble_requests(self: &mut Self) -> Vec<RumbleRequest>;
```

Take the rumble requests that last frame's systems queued, so the
frontend that owns the gamepads can play them.

<a id="rustdoc-item-293"></a>

### `set_surface_camera`

```rust
fn set_surface_camera(self: &mut Self, id: SurfaceId, binding: Option<CameraBinding>);
```

Bind the camera surface `id` draws through, or remove its binding with
`None`; see [`pill_renderer_api::SurfaceCameras`].
