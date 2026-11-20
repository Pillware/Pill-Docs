<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-775"></a>

# Struct `pill_master_renderer_data::assets::shader::ShaderParameterSlot`

```rust
pub struct ShaderParameterSlot;
```

Source: `extensions\pill_master_renderer\modules\runtime\data\src\assets\shader.rs:74`

One uniform a shader declares, under the name its source gives it.

A slot is how a value finds the uniform meant for it. A material or a pass
carries its parameters by name, and the shader's slots say which names it
accepts and how each matching value packs.

This is also the type a `.hlsl.meta` declares its uniforms with: one type
means one serialized shape, so a new slot attribute is added only here.

## Fields

<a id="rustdoc-item-773"></a>

### `name`

```rust
name: String
```

The name the source binds the uniform under.

<a id="rustdoc-item-774"></a>

### `parameter_type`

```rust
parameter_type: ShaderParameterType
```

The kind of value the uniform carries, which decides how it packs.

## Associated functions and methods

<a id="rustdoc-item-776"></a>

### `new`

```rust
pub fn new<impl Into<String>: Into<String>>(name: impl Into<String>, parameter_type: ShaderParameterType) -> Self;
```

A slot for `name`, carrying `parameter_type`.

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
- `MirrorObject`
- `MirrorValue`
- `MirrorReturn`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
- `SlotName`
