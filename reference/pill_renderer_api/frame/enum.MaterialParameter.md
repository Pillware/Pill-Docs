<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-661"></a>

# Enum `pill_renderer_api::frame::MaterialParameter`

```rust
pub enum MaterialParameter { ... }
```

Source: `rendering\pill_renderer_api\src\frame.rs:183`

One named value a shader reads.

Parameters are keyed by the slot name the shader declares. The packer walks
the shader's own slots rather than this map, so a name the shader never
declares is ignored instead of shifting the values after it. Every value
fills one 16-byte uniform slot, padding included.

The type is serializable because a material file stores its parameters as
written: `{"Scalar": 1.0}`, `{"Bool": true}` or
`{"Color": [1.0, 0.5, 0.0]}`.

## Variants

<a id="rustdoc-item-656"></a>

### `Scalar`

```rust
Scalar
```

One `f32`, in the first four bytes of the slot.

<a id="rustdoc-item-658"></a>

### `Bool`

```rust
Bool
```

A boolean, packed as a `u32` of 0 or 1.

<a id="rustdoc-item-660"></a>

### `Color`

```rust
Color
```

An RGB colour: three `f32`s, with the rest of the slot as padding.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Serialize`
- `Deserialize<'de>`
