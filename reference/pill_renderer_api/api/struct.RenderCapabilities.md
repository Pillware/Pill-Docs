<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-103"></a>

# Struct `pill_renderer_api::api::RenderCapabilities`

```rust
pub struct RenderCapabilities;
```

Source: `rendering\pill_renderer_api\src\api.rs:68`

What the renderer can do: the limits of its device and the scene data it
draws.

The limits are what the device accepts. A caller that sizes transient
resources - render targets, uploads - reads them here instead of assuming
what a desktop GPU allows. A renderer with no GPU behind it reports the
zero defaults.

Not `Copy`: `consumed_components` is an owned list, not a `&'static` slice.
A renderer loaded as a module builds the list inside its own image, so a
static slice would point into that image after a reload unmaps it.

## Fields

<a id="rustdoc-item-97"></a>

### `max_texture_size`

```rust
max_texture_size: u32
```

Largest supported 2D texture dimension, in texels.

<a id="rustdoc-item-98"></a>

### `max_buffer_bytes`

```rust
max_buffer_bytes: u64
```

Largest single GPU buffer the device accepts, in bytes.

<a id="rustdoc-item-99"></a>

### `hdr`

```rust
hdr: bool
```

Whether the surface presents high-dynamic-range output (wider range of
brightness than a normal display shows). No renderer in this
repository reports `true`.

<a id="rustdoc-item-100"></a>

### `consumed_components`

```rust
consumed_components: Vec<String>
```

Names of the components this renderer reads to build a frame, in the
shared form every DLL knows a component type by.

The host compares this list with the render components a project uses
and warns about any the renderer ignores - a component that only
another renderer's data crate draws, for example. The list is empty for
a renderer that reads nothing, like the headless stub.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
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
- `Clone`
- `Default`
