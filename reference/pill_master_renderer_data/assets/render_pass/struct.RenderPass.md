<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-93"></a>

# Struct `pill_master_renderer_data::assets::render_pass::RenderPass`

```rust
pub struct RenderPass;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\render_pass.rs:59`

One pass in a [`RenderingPipeline`](../rendering_pipeline/struct.RenderingPipeline.md#rustdoc-item-435).

Its maps are `BTreeMap`s, never `HashMap`s. An empty `HashMap` does not
allocate, but it points at a static inside the binary that created it.
This value lives in the world and can outlive that binary: a project or
module that built it is reloaded, and its retired image is eventually
unmapped. Reading such a map afterwards faults. A `BTreeMap` holds no such
pointer.

## Fields

<a id="rustdoc-item-425"></a>

### `name`

```rust
name: String
```

Label used in logs, profiling and error messages.

<a id="rustdoc-item-426"></a>

### `shader`

```rust
shader: pill_engine::Handle<crate::Shader>
```

Shader the pass draws with. [`Handle::INVALID`] leaves a geometry pass
drawing through each instance's own material pipeline; a fullscreen or
skybox pass without one is not drawn.

<a id="rustdoc-item-428"></a>

### `material`

```rust
material: pill_engine::Handle<crate::Material>
```

Material the pass draws with. It supplies the shader, parameters and
textures, and anything this pass sets itself wins. [`Handle::INVALID`]
names no material.

A [`PassKind::Skybox`] pass takes its sky from here.

<a id="rustdoc-item-429"></a>

### `parameters`

```rust
parameters: std::collections::BTreeMap<String, pill_renderer_api::frame::MaterialParameter>
```

Uniform parameters, packed the same way a material packs its own. Each
value fills one 16-byte slot, and the values are written in the order
the shader declares its slots.

<a id="rustdoc-item-431"></a>

### `textures`

```rust
textures: std::collections::BTreeMap<String, pill_engine::Handle<crate::Texture>>
```

Textures bound to the slots the shader declares, by slot name. A colour
slot that neither this map nor [`Self::inputs`](#rustdoc-item-430) fills gets the renderer's
default texture for its type. A depth slot has no default, so the pass
has to name a source for it.

A slot named in both maps takes the input. That is the frame an earlier
pass of the same chain produced, which is usually what the pass wants.

<a id="rustdoc-item-430"></a>

### `inputs`

```rust
inputs: std::collections::BTreeMap<String, String>
```

The frame an earlier pass wrote, by the texture slot it binds to.

Separate from [`Self::textures`](#rustdoc-item-431) because a target is not an asset: it
lives for one frame, is named by the pass that writes it, and has no
handle to hold. The name `depth` means the frame's depth buffer instead
of a colour target. A target name that no earlier pass writes stops the
chain from being built, with a message naming the pass and the target,
instead of drawing a flat frame.

<a id="rustdoc-item-432"></a>

### `settings`

```rust
settings: pill_renderer_api::frame::PassSettings
```

What the pass draws, where it writes, and how the draw is set up.

<a id="rustdoc-item-434"></a>

### `enabled`

```rust
enabled: bool
```

Whether the pass runs at all. A disabled pass stays in the pipeline, so
toggling one is a one-field change rather than an edit to the chain.

## Associated functions and methods

<a id="rustdoc-item-436"></a>

### `new`

```rust
pub fn new<impl Into<String>: Into<String>>(name: impl Into<String>) -> Self;
```

A geometry pass that writes the surface. It names no shader, so it draws
each instance through that instance's material pipeline.

<a id="rustdoc-item-437"></a>

### `with_shader`

```rust
pub fn with_shader(self: Self, shader: Handle<Shader>) -> Self;
```

Set the shader the pass draws with.

<a id="rustdoc-item-438"></a>

### `with_material`

```rust
pub fn with_material(self: Self, material: Handle<Material>) -> Self;
```

Draw with a material's shader, parameters and textures.

<a id="rustdoc-item-439"></a>

### `with_parameter`

```rust
pub fn with_parameter<impl Into<String>: Into<String>>(self: Self, slot: impl Into<String>, value: MaterialParameter) -> Self;
```

Set one uniform parameter, by the slot name the shader declares.

<a id="rustdoc-item-440"></a>

### `with_texture`

```rust
pub fn with_texture<impl Into<String>: Into<String>>(self: Self, slot: impl Into<String>, texture: Handle<Texture>) -> Self;
```

Bind one texture slot.

<a id="rustdoc-item-441"></a>

### `with_input`

```rust
pub fn with_input<impl Into<String>: Into<String>, impl Into<String>: Into<String>>(self: Self, slot: impl Into<String>, target: impl Into<String>) -> Self;
```

Sample one offscreen target in the named texture slot.

<a id="rustdoc-item-442"></a>

### `with_kind`

```rust
pub fn with_kind(self: Self, kind: PassKind) -> Self;
```

Choose what the pass draws.

<a id="rustdoc-item-444"></a>

### `with_target`

```rust
pub fn with_target(self: Self, target: PassTarget) -> Self;
```

Choose where the pass reads and writes.

<a id="rustdoc-item-446"></a>

### `with_order`

```rust
pub fn with_order(self: Self, order: u8) -> Self;
```

Choose when the pass runs. A lower order runs first.

<a id="rustdoc-item-447"></a>

### `with_extra_target`

```rust
pub fn with_extra_target(self: Self, target: PassTarget) -> Self;
```

Write a further target in the same draw.

<a id="rustdoc-item-448"></a>

### `with_target_scale`

```rust
pub fn with_target_scale(self: Self, scale: u32) -> Self;
```

Write this pass's targets at `1 / scale` of the surface size. A scale of
0 is treated as 1.

<a id="rustdoc-item-449"></a>

### `with_blend`

```rust
pub fn with_blend(self: Self, blend: bool) -> Self;
```

Blend over what the target holds instead of replacing it.

<a id="rustdoc-item-450"></a>

### `with_depth_write`

```rust
pub fn with_depth_write(self: Self, depth_write: bool) -> Self;
```

Write depth, or only read it.

<a id="rustdoc-item-451"></a>

### `with_cull`

```rust
pub fn with_cull(self: Self, cull: CullMode) -> Self;
```

Choose which faces the pass drops.

<a id="rustdoc-item-453"></a>

### `with_enabled`

```rust
pub fn with_enabled(self: Self, enabled: bool) -> Self;
```

Include the pass in the frame, or leave it out.

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
