<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-100"></a>

# Struct `pill_master_renderer_data::assets::material::Material`

```rust
pub struct Material;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\material.rs:73`

How a surface looks: the shader a draw runs and the values that shader
reads.

A material is an asset, so the renderer rebuilds its bind groups whenever the
asset's content version changes. A game never has to edit renderer state in
the middle of a frame. [`MaterialBuilder`](struct.MaterialBuilder.md#rustdoc-item-99) is the supported way to make one.

Its maps are `BTreeMap`s, never `HashMap`s. An empty `HashMap` allocates
nothing: it points at a static inside the binary that created it. A material
lives in the world and outlives that binary - a project or module that made
it reloads and its old image is eventually unloaded - so reading such a map
afterwards would fault. A `BTreeMap` keeps no such pointer.

## Fields

<a id="rustdoc-item-88"></a>

### `name`

```rust
name: String
```

Label used in logs and error messages.

<a id="rustdoc-item-91"></a>

### `shader`

```rust
shader: pill_engine::Handle<super::Shader>
```

Shader the material draws with. [`Handle::INVALID`] selects the
renderer's built-in shader, as does a handle that names no loaded
shader.

<a id="rustdoc-item-94"></a>

### `textures`

```rust
textures: std::collections::BTreeMap<String, MaterialTexture>
```

Textures bound to the shader's slots, by slot name.

It is a map, like [`RenderPass::textures`](../render_pass/struct.RenderPass.md#rustdoc-item-93): a slot
named twice has one entry, where a list would leave the binder to take
its first match. A slot the shader declares and the material leaves
unbound gets the renderer's default texture for that slot's type.

<a id="rustdoc-item-96"></a>

### `parameters`

```rust
parameters: std::collections::BTreeMap<String, pill_renderer_api::frame::MaterialParameter>
```

Uniform parameters, packed one 16-byte slot each, in the order the
shader declares them. A declared slot the material leaves unset packs
as zero.

<a id="rustdoc-item-98"></a>

### `rendering_order`

```rust
rendering_order: u8
```

Sort key for materials inside the pass that draws them.

The render queue stores this byte inverted in its sort key and sorts the
key ascending, so a larger value is drawn earlier. The default `u8::MAX`
therefore draws before any material given an explicit order. Passes are
the reverse: a lower `order` in
[`RenderPass::settings`](../render_pass/struct.RenderPass.md#rustdoc-item-93) runs first.

## Associated functions and methods

<a id="rustdoc-item-101"></a>

### `builder`

```rust
pub fn builder<impl Into<String>: Into<String>>(name: impl Into<String>) -> MaterialBuilder;
```

Start building a material under the given name.

The name labels the material in logs and error messages, which is why
the builder asks for it up front.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `MirrorObject`
- `Asset`
- `MirrorValue`
- `MirrorReturn`
- `Clone`
- `Debug`
- `StandaloneAsset`
- `TraitAccessible<dyn Asset>`
