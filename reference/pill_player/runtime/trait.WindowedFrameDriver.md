<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-275"></a>

# Trait `pill_player::runtime::WindowedFrameDriver`

```rust
pub trait WindowedFrameDriver: FrameDriver { ... }
```

Source: `hosting\pill_player\src\runtime.rs:111`

What a frontend needs from a driver that draws through a renderer.

The surface methods live here rather than on [`FrameDriver`](trait.FrameDriver.md#rustdoc-item-272) because a
headless driver has no surface to forward to, and a default that did
nothing on the base trait would let a windowed frontend drop every resize
without a word.

This is a sub-trait rather than a method on [`FrameDriver`](trait.FrameDriver.md#rustdoc-item-272) because the
renderer accessor has to be required, and a required method cannot be gated
on the `rendering` feature of this crate when the implementing crate cannot
see that feature.

## Required and provided items

<a id="rustdoc-item-299"></a>

### `display_mut`

```rust
fn display_mut(self: &mut Self) -> &mut crate::AttachedRenderer;
```

The renderer this driver draws through.

<a id="rustdoc-item-300"></a>

### `attach_surface`

```rust
fn attach_surface<W: crate::RendererWindow>(self: &mut Self, id: SurfaceId, window: W, width: u32, height: u32, surface_options: SurfaceOptions) -> Result<(), RendererError>;
```

Draw into another window as surface `id`; see
[`crate::AttachedRenderer::attach_surface`](../rendering/struct.AttachedRenderer.md#rustdoc-item-192).

#### Errors

Returns a [`RendererError`] when the window cannot give its handles, or
when the renderer fails to attach the surface. A renderer that does not
draw extra surfaces is not an error: the surface waits instead.

<a id="rustdoc-item-301"></a>

### `detach_surface`

```rust
fn detach_surface(self: &mut Self, id: SurfaceId);
```

Stop drawing into surface `id`, then release its window.

<a id="rustdoc-item-302"></a>

### `resize_surface`

```rust
fn resize_surface(self: &mut Self, id: SurfaceId, width: u32, height: u32);
```

Forward a physical resize of surface `id` to the renderer.

<a id="rustdoc-item-303"></a>

### `set_surface_viewport`

```rust
fn set_surface_viewport(self: &mut Self, id: SurfaceId, viewport: Option<RenderViewport>);
```

Restrict drawing to a region of surface `id`; `None` draws all of it.

<a id="rustdoc-item-304"></a>

### `set_surface_ready`

```rust
fn set_surface_ready(self: &mut Self, id: SurfaceId, ready: bool);
```

Mark whether surface `id` may present on the next frame; see
[`crate::AttachedRenderer::set_surface_ready`](../rendering/struct.AttachedRenderer.md#rustdoc-item-196).
