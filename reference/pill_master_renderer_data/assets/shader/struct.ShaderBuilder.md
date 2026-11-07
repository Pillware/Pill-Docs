<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-959"></a>

# Struct `pill_master_renderer_data::assets::shader::ShaderBuilder`

```rust
pub struct ShaderBuilder;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\shader.rs:276`

A [`Shader`](struct.Shader.md#rustdoc-item-92) under construction, started by [`Shader::new`](struct.Shader.md#rustdoc-item-958).

The parts arrive in any order and [`Self::build`](#rustdoc-item-957) reads the two sources, so
a half-built shader is never alive.

## Fields

<a id="rustdoc-item-1007"></a>

### `name`

```rust
name: String
```

The name the finished shader will carry.

<a id="rustdoc-item-1009"></a>

### `vertex_source`

```rust
vertex_source: Option<pill_engine::AssetLoader>
```

The vertex stage's source, read when the shader is built.

<a id="rustdoc-item-1011"></a>

### `fragment_source`

```rust
fragment_source: Option<pill_engine::AssetLoader>
```

The fragment stage's source, read when the shader is built.

<a id="rustdoc-item-1012"></a>

### `parameter_slots`

```rust
parameter_slots: Vec<ShaderParameterSlot>
```

The uniform slots collected so far, in the order they were declared.

<a id="rustdoc-item-1013"></a>

### `texture_slots`

```rust
texture_slots: Vec<ShaderTextureSlot>
```

The texture slots collected so far, in the order they were declared.

<a id="rustdoc-item-1014"></a>

### `pass_engine_parameters`

```rust
pass_engine_parameters: bool
```

Whether the finished shader will read the engine's parameters.

<a id="rustdoc-item-1015"></a>

### `pass_camera_parameters`

```rust
pass_camera_parameters: bool
```

Whether the finished shader will read the camera's parameters.

## Associated functions and methods

<a id="rustdoc-item-1016"></a>

### `with_vertex_source`

```rust
pub fn with_vertex_source(self: Self, source: AssetLoader) -> Self;
```

The WGSL vertex stage, read from this source when the shader is built.

<a id="rustdoc-item-1017"></a>

### `with_fragment_source`

```rust
pub fn with_fragment_source(self: Self, source: AssetLoader) -> Self;
```

The WGSL fragment stage, read from this source when the shader is built.

<a id="rustdoc-item-1018"></a>

### `with_wgsl`

```rust
pub fn with_wgsl<impl Into<String>: Into<String>, impl Into<String>: Into<String>>(self: Self, vertex: impl Into<String>, fragment: impl Into<String>) -> Self;
```

Sets both WGSL stages from text already in hand.

For stages that are not files: `include_str!` gives a `&'static str`,
and a C# project can pass the text it holds, because the builder is
mirrored to C#. Nothing is resolved or read, so [`Self::build`](#rustdoc-item-957) already
has both stages, where [`Self::with_vertex_source`](#rustdoc-item-1016) holds a path that
may turn out not to exist.

<a id="rustdoc-item-1019"></a>

### `with_parameter_slots`

```rust
pub fn with_parameter_slots<impl IntoIterator<Item = ShaderParameterSlot>: IntoIterator<Item = _>>(self: Self, parameter_slots: impl IntoIterator<Item = _>) -> Self;
```

The uniform slots the fragment stage declares, each carrying the name it
binds under. Declaration order is the order their values pack in.

<a id="rustdoc-item-1021"></a>

### `with_texture_slots`

```rust
pub fn with_texture_slots<impl IntoIterator<Item = ShaderTextureSlot>: IntoIterator<Item = _>>(self: Self, texture_slots: impl IntoIterator<Item = _>) -> Self;
```

The texture slots the fragment stage declares, each carrying the name it
binds under and the bindings the shader declares it at.

<a id="rustdoc-item-1022"></a>

### `with_engine_parameters`

```rust
pub fn with_engine_parameters(self: Self, pass_engine_parameters: bool) -> Self;
```

Whether the shader reads the engine's parameters, at set 0.

<a id="rustdoc-item-1023"></a>

### `with_camera_parameters`

```rust
pub fn with_camera_parameters(self: Self, pass_camera_parameters: bool) -> Self;
```

Whether the shader reads the camera's parameters, at set 1.

<a id="rustdoc-item-957"></a>

### `build`

```rust
pub fn build(self: Self) -> AssetLoadResult<Shader>;
```

Reads both sources and produces the shader.

#### Errors

Returns [`AssetLoadError::Decode`] when one of the sources was never
set. Reading one of them can also fail: the path does not resolve, the
read fails, or the bytes are not UTF-8 text.

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
- `MirrorValue`
- `MirrorReturn`
- `Clone`
- `Debug`
