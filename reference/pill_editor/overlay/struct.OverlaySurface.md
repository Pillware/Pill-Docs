<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-438"></a>

# Struct `pill_editor::overlay::OverlaySurface`

```rust
pub struct OverlaySurface;
```

Source: `editor\pill_editor\src\overlay.rs:78`

The composition overlay over the editor window.

## Fields

<a id="rustdoc-item-430"></a>

### `mode`

```rust
mode: OverlayMode
```

The posture this surface was created in.

<a id="rustdoc-item-431"></a>

### `composition`

```rust
composition: Option<composition::Tree>
```

The DirectComposition tree the surface is set on. It is kept alive
and committed for the surface's whole life; only the composition
posture has one.

<a id="rustdoc-item-432"></a>

### `surface`

```rust
surface: wgpu::Surface<'static>
```

The overlay's swapchain, drawn through the composition visual.

<a id="rustdoc-item-434"></a>

### `surface_configuration`

```rust
surface_configuration: wgpu::SurfaceConfiguration
```

The swapchain's configuration: the window's client area in physical
pixels, the editor's format, the posture's composition mode.

<a id="rustdoc-item-436"></a>

### `has_drawn_content`

```rust
has_drawn_content: bool
```

Whether the last frame drew content, so the first blank frame after
content clears the swapchain and later blanks cost no GPU work.

<a id="rustdoc-item-437"></a>

### `frame_count`

```rust
frame_count: u64
```

Overlay frames presented since startup.

## Associated functions and methods

<a id="rustdoc-item-439"></a>

### `new`

```rust
pub fn new(instance: &wgpu::Instance, adapter: &wgpu::Adapter, device: &wgpu::Device, window: Arc<Window>, format: wgpu::TextureFormat, window_size: (u32, u32)) -> Result<OverlaySurface, String>;
```

Create the composition overlay for `window`.

#### Errors

Returns the reason, which the executable logs, when the adapter is not
DX12, when the composition tree cannot be built or committed, when the
surface cannot be created from the visual, or when the swapchain cannot
carry the given format and premultiplied alpha.

<a id="rustdoc-item-445"></a>

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

<a id="rustdoc-item-446"></a>

### `mode`

```rust
pub fn mode(self: &Self) -> OverlayMode;
```

Returns the posture this surface draws in.

<a id="rustdoc-item-447"></a>

### `resize`

```rust
pub fn resize(self: &mut Self, device: &wgpu::Device, window_size: (u32, u32));
```

Resize the swapchain to `window_size` physical pixels (the window's
client area), and commit the composition tree when there is one.

<a id="rustdoc-item-448"></a>

### `frames`

```rust
pub fn frames(self: &Self) -> u64;
```

Returns the number of overlay frames presented since startup.

<a id="rustdoc-item-449"></a>

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
