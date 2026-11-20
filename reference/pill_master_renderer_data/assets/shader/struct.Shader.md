<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-92"></a>

# Struct `pill_master_renderer_data::assets::shader::Shader`

```rust
pub struct Shader;
```

Source: `extensions\pill_master_renderer\modules\runtime\data\src\assets\shader.rs:224`

A shader asset: its two WGSL stages plus the slots the source declares.

The slots travel with the sources because both describe the same shader:
the sources go to the pipeline, and the slots say how that pipeline's
uniform buffer and texture bindings must be laid out.

## Fields

<a id="rustdoc-item-941"></a>

### `name`

```rust
name: String
```

Name used in logs and error messages.

<a id="rustdoc-item-942"></a>

### `vertex_wgsl`

```rust
vertex_wgsl: String
```

The vertex stage, as WGSL text.

<a id="rustdoc-item-943"></a>

### `fragment_wgsl`

```rust
fragment_wgsl: String
```

The fragment stage, as WGSL text.

<a id="rustdoc-item-944"></a>

### `parameter_slots`

```rust
parameter_slots: indexmap::IndexMap<String, ShaderParameterSlot>
```

The uniforms the shader declares, by name, in declaration order.

<a id="rustdoc-item-946"></a>

### `texture_slots`

```rust
texture_slots: indexmap::IndexMap<String, ShaderTextureSlot>
```

The textures the shader declares, by name, each with its bindings.

<a id="rustdoc-item-947"></a>

### `pass_engine_parameters`

```rust
pass_engine_parameters: bool
```

Whether the shader reads the engine's parameters, at set 0.

<a id="rustdoc-item-948"></a>

### `pass_camera_parameters`

```rust
pass_camera_parameters: bool
```

Whether the shader reads the camera's parameters, at set 1.

## Associated functions and methods

<a id="rustdoc-item-950"></a>

### `new`

```rust
pub fn new<impl Into<String>: Into<String>>(name: impl Into<String>) -> ShaderBuilder;
```

Starts a shader with its name and returns the builder that collects the
rest.

[`RenderPass::new`](../render_pass/struct.RenderPass.md#rustdoc-item-433) starts a pass the same way:
the name comes first, then the parts, and [`ShaderBuilder::build`](struct.ShaderBuilder.md#rustdoc-item-949) reads
the sources and hands the asset back.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `MirrorObject`
- `Asset`
- `MirrorValue`
- `MirrorReturn`
- `TraitAccessible<dyn Asset>`
- `ImportedAsset`
