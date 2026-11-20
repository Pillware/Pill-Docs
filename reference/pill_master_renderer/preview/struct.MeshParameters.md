<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-678"></a>

# Struct `pill_master_renderer::preview::MeshParameters`

```rust
pub(in preview) struct MeshParameters;
```

Visibility: `{'restricted': {'parent': 589, 'path': '::preview'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\preview.rs:117`

The uniform a mesh preview writes. It carries the camera framing and the
colour the mesh is shaded in.

## Fields

<a id="rustdoc-item-676"></a>

### `transform`

```rust
transform: [[f32; 4]; 4]
```

Projection times view, aimed at the centre of the mesh's bounds.

<a id="rustdoc-item-677"></a>

### `color`

```rust
color: [f32; 4]
```

The grey a mesh preview shades in.

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
- `AnyBitPattern`
- `CheckedBitPattern`
- `NoUninit`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
- `Pod`
- `Zeroable`
