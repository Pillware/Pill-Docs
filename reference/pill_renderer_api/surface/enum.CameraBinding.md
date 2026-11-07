<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-894"></a>

# Enum `pill_renderer_api::surface::CameraBinding`

```rust
pub enum CameraBinding { ... }
```

Source: `rendering\pill_renderer_api\src\surface.rs:73`

Which camera draws into a surface.

## Variants

<a id="rustdoc-item-1109"></a>

### `Entity`

```rust
Entity
```

A camera entity in the world. The surface shows nothing while that
entity has no enabled camera.

<a id="rustdoc-item-895"></a>

### `View`

```rust
View
```

A camera given as plain data instead of an entity. The editor's own
camera is one of these.

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
- `Copy`
