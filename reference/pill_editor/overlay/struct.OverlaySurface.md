<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-494"></a>

# Struct `pill_editor::overlay::OverlaySurface`

```rust
pub struct OverlaySurface;
```

Source: `editor\pill_editor\src\overlay.rs:103`

The composition overlay over the editor window.

## Fields

<a id="rustdoc-item-484"></a>

### `mode`

```rust
mode: OverlayMode
```

The posture this surface was created in.

<a id="rustdoc-item-485"></a>

### `composition`

```rust
composition: Option<composition::Tree>
```

The DirectComposition tree the surface is set on. It is kept alive
and committed for the surface's whole life; only the composition
posture has one.

<a id="rustdoc-item-486"></a>

### `surface`

```rust
surface: wgpu::Surface<'static>
```

The overlay's swapchain, drawn through the composition visual.

<a id="rustdoc-item-488"></a>

### `floating_window`

```rust
floating_window: Option<std::sync::Arc<winit::window::Window>>
```

The window the floating posture draws into. Only that posture has one:
the other two draw into a window the editor already owns, whose
placement is not the overlay's to set.

<a id="rustdoc-item-490"></a>

### `surface_configuration`

```rust
surface_configuration: wgpu::SurfaceConfiguration
```

The swapchain's configuration: the window's client area in physical
pixels, the editor's format, the posture's composition mode.

<a id="rustdoc-item-492"></a>

### `has_drawn_content`

```rust
has_drawn_content: bool
```

Whether the last frame drew content, so the first blank frame after
content clears the swapchain and later blanks cost no GPU work.

<a id="rustdoc-item-493"></a>

### `frame_count`

```rust
frame_count: u64
```

Overlay frames presented since startup.

## Associated functions and methods

<a id="rustdoc-item-496"></a>

### `new`

```rust
pub fn new(instance: &wgpu::Instance, adapter: &wgpu::Adapter, device: &wgpu::Device, window: Arc<Window>, format: wgpu::TextureFormat, window_size: (u32, u32)) -> Result<OverlaySurface, String>;
```

Create the composition overlay for `window`.

DirectComposition and the `CompositionVisual` surface target wgpu takes
from it are Windows-only, so this posture exists there alone; every
other platform starts in [`Self::new_window`](#rustdoc-item-495) instead.

#### Errors

Returns the reason, which the executable logs, when the adapter is not
DX12, when the composition tree cannot be built or committed, when the
surface cannot be created from the visual, or when the swapchain cannot
carry the given format and premultiplied alpha.

<a id="rustdoc-item-495"></a>

### `new_window`

```rust
pub fn new_window(instance: &wgpu::Instance, adapter: &wgpu::Adapter, device: &wgpu::Device, window: Arc<Window>, format: wgpu::TextureFormat, window_size: (u32, u32)) -> Result<OverlaySurface, String>;
```

Create the overlay in the window posture: the UI's frames go to the
window's own surface, with no composition and no transparency.

This is the posture `PILL_EDITOR_NO_OVERLAY` asks for, and the one a
failed composition overlay falls back to. It needs no composition and
no transparency, so every backend can provide it.

#### Errors

Returns the reason, which the executable logs, when the window surface
cannot be created or does not offer the editor's format.

<a id="rustdoc-item-501"></a>

### `mode`

```rust
pub fn mode(self: &Self) -> OverlayMode;
```

Returns the posture this surface draws in.

<a id="rustdoc-item-502"></a>

### `floating_window`

```rust
pub fn floating_window(self: &Self) -> Option<&Arc<Window>>;
```

The window the floating posture draws into, if this is that posture.

<a id="rustdoc-item-503"></a>

### `resize`

```rust
pub fn resize(self: &mut Self, device: &wgpu::Device, window_size: (u32, u32));
```

Resize the swapchain to `window_size` physical pixels (the window's
client area), and commit the composition tree when there is one.

<a id="rustdoc-item-504"></a>

### `frames`

```rust
pub fn frames(self: &Self) -> u64;
```

Returns the number of overlay frames presented since startup.

<a id="rustdoc-item-505"></a>

### `render`

```rust
pub fn render(self: &mut Self, device: &wgpu::Device, queue: &wgpu::Queue, renderer: &mut egui_wgpu::Renderer, meshes: &[ClippedPrimitive], textures: TexturesDelta, pixels_per_point: f32) -> Result<bool, String>;
```

Draw the shell frame's meshes and present them.

An empty mesh list clears the overlay and presents that once, so the
previous frame's content disappears. The composition posture clears to
fully transparent; the window posture clears to `WINDOW_CLEAR`. A
still-empty list after that is not drawn at all. Returns whether GPU
work happened.

#### Errors

Returns the reason when the swapchain gives no frame this time; the
caller logs it and tries again on the next frame.

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
