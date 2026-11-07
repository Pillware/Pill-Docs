<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-495"></a>

# Struct `pill_master_renderer_data::assets::render_pass::RenderPassDocument`

```rust
pub struct RenderPassDocument;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\render_pass.rs:218`

A pass as written in its `.render_pass` file.

The file holds this document under the standard asset header. Its shader,
material and textures are guids ([`AssetReference`]), resolved when the file
loads. Every other field means the same as the [`RenderPass`](struct.RenderPass.md#rustdoc-item-93) field of the
same name.

The default document is [`RenderPass::new`](struct.RenderPass.md#rustdoc-item-436)'s pass: a geometry pass onto the
surface with no shader of its own. The renderer draws that pass as it is, so
a newly created file is valid before anyone edits it.

## Fields

<a id="rustdoc-item-501"></a>

### `shader`

```rust
shader: pill_engine::AssetReference<crate::Shader>
```

See [`RenderPass::shader`](struct.RenderPass.md#rustdoc-item-426); unset names no shader of its own.

<a id="rustdoc-item-502"></a>

### `material`

```rust
material: pill_engine::AssetReference<crate::Material>
```

See [`RenderPass::material`](struct.RenderPass.md#rustdoc-item-428); unset for none.

<a id="rustdoc-item-503"></a>

### `parameters`

```rust
parameters: std::collections::BTreeMap<String, pill_renderer_api::frame::MaterialParameter>
```

See [`RenderPass::parameters`](struct.RenderPass.md#rustdoc-item-429).

<a id="rustdoc-item-504"></a>

### `textures`

```rust
textures: std::collections::BTreeMap<String, pill_engine::AssetReference<crate::Texture>>
```

See [`RenderPass::textures`](struct.RenderPass.md#rustdoc-item-431).

<a id="rustdoc-item-505"></a>

### `inputs`

```rust
inputs: std::collections::BTreeMap<String, String>
```

See [`RenderPass::inputs`](struct.RenderPass.md#rustdoc-item-430).

<a id="rustdoc-item-506"></a>

### `settings`

```rust
settings: pill_renderer_api::frame::PassSettings
```

See [`RenderPass::settings`](struct.RenderPass.md#rustdoc-item-432). The block is flattened, so the file
carries its fields at the top level, beside the other ones.

<a id="rustdoc-item-507"></a>

### `enabled`

```rust
enabled: bool
```

See [`RenderPass::enabled`](struct.RenderPass.md#rustdoc-item-434).

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
