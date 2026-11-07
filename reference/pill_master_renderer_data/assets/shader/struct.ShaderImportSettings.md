<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1001"></a>

# Struct `pill_master_renderer_data::assets::shader::ShaderImportSettings`

```rust
pub struct ShaderImportSettings;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\shader.rs:409`

How to build a shader from its `.hlsl` source: the settings its `.hlsl.meta`
holds.

Every field is part of the metadata file format, so renaming one breaks
existing files. `#[serde(default)]` lets a file written before a field
existed still load.

## Fields

<a id="rustdoc-item-1061"></a>

### `vertex`

```rust
vertex: String
```

The vertex stage, by path relative to the same root as the source.

One `.hlsl` file holds one stage and a shader needs two, so the meta
says which vertex stage this source pairs with.

<a id="rustdoc-item-1062"></a>

### `parameters`

```rust
parameters: Vec<ShaderParameterSlot>
```

The uniforms the shader declares, in the order their values pack.

<a id="rustdoc-item-1063"></a>

### `textures`

```rust
textures: Vec<ShaderTextureSlot>
```

The textures the shader declares, each with its texture and sampler
bindings.

<a id="rustdoc-item-1064"></a>

### `engine_parameters`

```rust
engine_parameters: bool
```

Whether the shader reads the engine's parameters, at set 0.

<a id="rustdoc-item-1065"></a>

### `camera_parameters`

```rust
camera_parameters: bool
```

Whether the shader reads the camera's parameters, at set 1.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
