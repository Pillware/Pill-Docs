<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-730"></a>

# Enum `pill_master_renderer_data::assets::shader::ShaderParameterType`

```rust
pub enum ShaderParameterType { ... }
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\shader.rs:51`

The kind of value a uniform parameter carries.

The renderer packs a slot's bytes according to this kind, not according to
the kind of value it was given. A value whose kind does not match its slot
is ignored, and that slot packs as zero.

## Variants

<a id="rustdoc-item-727"></a>

### `Scalar`

```rust
Scalar
```

A single float.

<a id="rustdoc-item-728"></a>

### `Bool`

```rust
Bool
```

A flag, packed as the integer `1` or `0`.

<a id="rustdoc-item-729"></a>

### `Color`

```rust
Color
```

An RGB color.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
- `MirrorValue`
- `MirrorReturn`
