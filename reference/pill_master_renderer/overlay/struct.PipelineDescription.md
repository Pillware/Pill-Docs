<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1422"></a>

# Struct `pill_master_renderer::overlay::PipelineDescription`

```rust
pub(in overlay) struct PipelineDescription<'a>;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1032`

The settings one overlay pipeline differs in.

## Fields

<a id="rustdoc-item-1408"></a>

### `label`

```rust
label: &'a str
```

_No documentation provided._

<a id="rustdoc-item-1409"></a>

### `pipeline_layout`

```rust
pipeline_layout: &'a wgpu::PipelineLayout
```

_No documentation provided._

<a id="rustdoc-item-1411"></a>

### `shader_module`

```rust
shader_module: &'a wgpu::ShaderModule
```

_No documentation provided._

<a id="rustdoc-item-1413"></a>

### `vertex_entry_point`

```rust
vertex_entry_point: &'a str
```

_No documentation provided._

<a id="rustdoc-item-1414"></a>

### `fragment_entry_point`

```rust
fragment_entry_point: &'a str
```

_No documentation provided._

<a id="rustdoc-item-1415"></a>

### `vertex_buffers`

```rust
vertex_buffers: &'a [wgpu::VertexBufferLayout<'a>]
```

_No documentation provided._

<a id="rustdoc-item-1416"></a>

### `topology`

```rust
topology: wgpu::PrimitiveTopology
```

_No documentation provided._

<a id="rustdoc-item-1418"></a>

### `color_target`

```rust
color_target: Option<wgpu::ColorTargetState>
```

_No documentation provided._

<a id="rustdoc-item-1420"></a>

### `depth_stencil`

```rust
depth_stencil: Option<wgpu::DepthStencilState>
```

_No documentation provided._

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
