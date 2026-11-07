<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-800"></a>

# Struct `pill_renderer_api::surface::SurfaceCameras`

```rust
pub struct SurfaceCameras;
```

Source: `rendering\pill_renderer_api\src\surface.rs:94`

The camera bindings of every surface, by surface id.

The frontend writes this into the world as a resource. A surface with no
entry draws through the frame's chosen camera when it is the primary one,
and draws nothing otherwise. An entry for [`SurfaceId::PRIMARY`](struct.SurfaceId.md#rustdoc-item-182) replaces
the choice the frame would make among the world's cameras.

## Fields

<a id="rustdoc-item-1142"></a>

### `bindings`

```rust
bindings: std::collections::BTreeMap<SurfaceId, CameraBinding>
```

Binding per surface.

<a id="rustdoc-item-1143"></a>

### `grid`

```rust
grid: crate::SceneGrid
```

The scene grid the view-bound surfaces draw. It is off until a
frontend turns it on.

## Associated functions and methods

<a id="rustdoc-item-1144"></a>

### `set`

```rust
pub fn set(self: &mut Self, surface: SurfaceId, binding: Option<CameraBinding>);
```

Binds `binding` to `surface`, or removes the surface's binding with
`None`.

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
- `Resource`
