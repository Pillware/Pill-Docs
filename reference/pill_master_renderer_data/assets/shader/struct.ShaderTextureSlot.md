<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-895"></a>

# Struct `pill_master_renderer_data::assets::shader::ShaderTextureSlot`

```rust
pub struct ShaderTextureSlot;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\shader.rs:159`

One texture a shader declares, under the name its source gives it, at the
texture and sampler bindings the shader declares.

This is also the type a `.hlsl.meta` declares its textures with.

## Fields

<a id="rustdoc-item-891"></a>

### `name`

```rust
name: String
```

The name the source binds the texture under.

<a id="rustdoc-item-892"></a>

### `kind`

```rust
kind: ShaderTextureKind
```

The kind of texture the slot binds, which decides the binding wgpu
accepts.

<a id="rustdoc-item-893"></a>

### `texture_binding`

```rust
texture_binding: u32
```

The binding the shader declares the texture at.

<a id="rustdoc-item-894"></a>

### `sampler_binding`

```rust
sampler_binding: u32
```

The binding the shader declares the sampler at.

## Associated functions and methods

<a id="rustdoc-item-896"></a>

### `new`

```rust
pub fn new<impl Into<String>: Into<String>>(name: impl Into<String>, kind: ShaderTextureKind, bindings: (u32, u32)) -> Self;
```

A slot for `name`, reading `kind`, at the texture and sampler bindings
the shader uses.

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
