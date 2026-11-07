<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Struct `pill_master_renderer_data::assets::material::MaterialTexture`

```rust
pub struct MaterialTexture;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\material.rs:49`

A texture handle bound to one of a material's slots.

It holds the asset handle, not a GPU texture. The renderer looks the handle
up when it builds the material, so one texture asset can fill any number of
slots without being copied.

## Fields

<a id="rustdoc-item-0"></a>

### `texture`

```rust
texture: pill_engine::Handle<super::Texture>
```

The texture asset this binding points at.

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
- `Clone`
- `Debug`
