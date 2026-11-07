<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-801"></a>

# Struct `pill_renderer_api::surface::SurfaceView`

```rust
pub struct SurfaceView;
```

Source: `rendering\pill_renderer_api\src\surface.rs:128`

The camera one surface draws through this frame.

The frame resolves it from the surface's binding or, for the primary
surface without one, from the world's cameras.

## Fields

<a id="rustdoc-item-1179"></a>

### `camera`

```rust
camera: crate::CameraComponent
```

The projection.

<a id="rustdoc-item-1180"></a>

### `transform`

```rust
transform: pill_engine::common_components::TransformComponent
```

Where the camera is and where it looks.

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
