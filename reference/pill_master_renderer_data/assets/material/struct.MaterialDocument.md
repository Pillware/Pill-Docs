<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-149"></a>

# Struct `pill_master_renderer_data::assets::material::MaterialDocument`

```rust
pub struct MaterialDocument;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\material.rs:222`

A material as written in its `.material` file.

It is the asset itself, stored under the standard asset header (format
version, asset type, guid). Its shader and textures are guids
([`AssetReference`]), resolved to handles when the file loads: a handle means
nothing in the next run, a guid does. A reference that names no loaded asset
resolves to [`Handle::INVALID`], which draws with the renderer's built-in
shader or the slot's default texture.

A newly created file holds the default document, and it draws as it is: the
PBR chain's shader (by its fixed guid,
[`pbr_pipeline::SHADER_GUID`](../../config/pbr_pipeline/constant.SHADER_GUID.md#rustdoc-item-205)) at
the chain's neutral parameters, with no maps bound. Naming that shader
matters, because the chain's geometry pass draws only the instances using
its own shader; a material left on the built-in one would load and never be
drawn. Maps are `BTreeMap`s for the reason [`Material`](struct.Material.md#rustdoc-item-100) gives.

## Fields

<a id="rustdoc-item-200"></a>

### `shader`

```rust
shader: pill_engine::AssetReference<super::Shader>
```

The shader the material draws with. Unset means the renderer's
built-in shader.

<a id="rustdoc-item-202"></a>

### `textures`

```rust
textures: std::collections::BTreeMap<String, pill_engine::AssetReference<super::Texture>>
```

Textures bound to the shader's slots, by slot name.

<a id="rustdoc-item-203"></a>

### `parameters`

```rust
parameters: std::collections::BTreeMap<String, pill_renderer_api::frame::MaterialParameter>
```

Uniform parameters, by slot name.

<a id="rustdoc-item-204"></a>

### `rendering_order`

```rust
rendering_order: u8
```

See [`Material::rendering_order`](struct.Material.md#rustdoc-item-98).

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
- `Clone`
- `Debug`
- `Serialize`
- `Deserialize<'de>`
- `Default`
