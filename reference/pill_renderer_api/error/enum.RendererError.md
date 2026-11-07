<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-179"></a>

# Enum `pill_renderer_api::error::RendererError`

```rust
pub enum RendererError { ... }
```

Source: `rendering\pill_renderer_api\src\error.rs:34`

Failures the renderer reports to its host.

Only failures a host or frontend acts on get a variant of their own. The
backend's startup and swapchain failures all arrive as [`Self::Backend`](#rustdoc-item-351),
with the text the GPU module wrote, so a new way for a device to fail needs
no change here.

## Variants

<a id="rustdoc-item-349"></a>

### `SurfaceCreation`

```rust
SurfaceCreation
```

The GPU surface could not be created for the supplied window.

<a id="rustdoc-item-351"></a>

### `Backend`

```rust
Backend
```

The GPU backend failed: no adapter or no device, no format or alpha
mode to present with, a configuration the driver refused, or a
swapchain that stayed lost or gave no texture.

wgpu's error values stay inside the renderer module, which writes their
text into `detail`. The host acts on the one thing the variant says: the
backend did not start, or did not hand this frame a surface.

<a id="rustdoc-item-192"></a>

### `UnsupportedSurface`

```rust
UnsupportedSurface
```

The renderer cannot draw into the surface the caller asked for. It may
draw a single surface only, the id may name the surface it was built
on, or the surface cannot use the format the renderer draws with.

<a id="rustdoc-item-353"></a>

### `RendererResourceNotFound`

```rust
RendererResourceNotFound
```

A resource the call referenced - a camera, a shader - is not in
storage.

<a id="rustdoc-item-355"></a>

### `Other`

```rust
Other
```

A failure the caller described in its own words: the pass that reads a
target no pass writes, the texture that is not loaded, the shader wgpu
refused.

The message has no generic prefix, because the caller already says what
it was doing - `Pass <name> is not drawn: <this>`. Repeating it would
read as a stutter.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `EngineMessage`
