<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-134"></a>

# Struct `pill_master_renderer::instance::Instance`

```rust
pub struct Instance;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\instance.rs:59`

One instance's model matrix, packed the way the vertex shader reads it.

The renderer builds one for every queued instance and uploads the whole set
as the buffer the draws bind. The shader reads each as three `float4`
attributes.

## Fields

<a id="rustdoc-item-276"></a>

### `model_rows`

```rust
model_rows: [[f32; 4]; 3]
```

The top three rows of the model matrix. Row `i` holds the `i`th value
of each of the three scaled rotation axes, then the `i`th value of the
translation.

## Associated functions and methods

<a id="rustdoc-item-277"></a>

### `new`

```rust
pub fn new(transform_component: &TransformComponent) -> Instance;
```

Builds one instance's model matrix from a transform component: the
scale is applied first, then the rotation, then the translation.

A rotation that is not finite or has no length is ignored, so the
instance draws unrotated rather than with a degenerate matrix.

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
- `Copy`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Pod`
- `Zeroable`
- `Vertex`
