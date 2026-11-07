<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-99"></a>

# Struct `pill_master_renderer_data::assets::material::MaterialBuilder`

```rust
pub struct MaterialBuilder;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\material.rs:111`

Builds a [`Material`](struct.Material.md#rustdoc-item-100) one field at a time.

A fresh builder holds the renderer's built-in shader, no textures, no
parameters and the highest rendering order. A call therefore only has to
name the fields that should differ from those defaults.

## Fields

<a id="rustdoc-item-160"></a>

### `material`

```rust
material: Material
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-162"></a>

### `shader`

```rust
pub fn shader(self: Self, shader: &Handle<Shader>) -> Self;
```

Set the shader the material draws with. [`Handle::INVALID`] keeps the
renderer's built-in shader.

<a id="rustdoc-item-163"></a>

### `texture`

```rust
pub fn texture<impl Into<String>: Into<String>>(self: Self, slot: impl Into<String>, texture: &Handle<Texture>) -> Self;
```

Bind a texture to one of the shader's declared slots.

Binding the same slot twice replaces the earlier binding: the map holds
one texture per slot, so the last call wins.

<a id="rustdoc-item-164"></a>

### `scalar_parameter`

```rust
pub fn scalar_parameter<impl Into<String>: Into<String>>(self: Self, slot: impl Into<String>, value: f32) -> Self;
```

Set one scalar uniform parameter, under the slot the shader declares.

<a id="rustdoc-item-165"></a>

### `bool_parameter`

```rust
pub fn bool_parameter<impl Into<String>: Into<String>>(self: Self, slot: impl Into<String>, value: bool) -> Self;
```

Set one boolean uniform parameter, packed as a `u32` of 0 or 1.

<a id="rustdoc-item-166"></a>

### `color_parameter`

```rust
pub fn color_parameter<impl Into<String>: Into<String>>(self: Self, slot: impl Into<String>, value: [f32; 3]) -> Self;
```

Set one colour uniform parameter, packed as three `f32`s.

<a id="rustdoc-item-167"></a>

### `rendering_order`

```rust
pub fn rendering_order(self: Self, value: u8) -> Self;
```

Choose when the material draws relative to the others in the same pass.

See [`Material::rendering_order`](struct.Material.md#rustdoc-item-98): a larger value is drawn earlier.

<a id="rustdoc-item-168"></a>

### `build`

```rust
pub fn build(self: Self) -> Material;
```

Finish building and return the material.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `MirrorValue`
- `MirrorReturn`
