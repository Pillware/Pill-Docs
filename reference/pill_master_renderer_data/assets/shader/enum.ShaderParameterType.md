<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-726"></a>

# Enum `pill_master_renderer_data::assets::shader::ShaderParameterType`

```rust
pub enum ShaderParameterType { ... }
```

Source: `extensions\pill_master_renderer\modules\runtime\data\src\assets\shader.rs:51`

The kind of value a uniform parameter carries.

The renderer packs a slot's bytes according to this kind, not according to
the kind of value it was given. A value whose kind does not match its slot
is ignored, and that slot packs as zero.

## Variants

<a id="rustdoc-item-723"></a>

### `Scalar`

```rust
Scalar
```

A single float.

<a id="rustdoc-item-724"></a>

### `Bool`

```rust
Bool
```

A flag, packed as the integer `1` or `0`.

<a id="rustdoc-item-725"></a>

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
