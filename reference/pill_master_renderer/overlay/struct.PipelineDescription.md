<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1465"></a>

# Struct `pill_master_renderer::overlay::PipelineDescription`

```rust
pub(in overlay) struct PipelineDescription<'a>;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:1076`

The settings one overlay pipeline differs in.

## Fields

<a id="rustdoc-item-1451"></a>

### `label`

```rust
label: &'a str
```

_No documentation provided._

<a id="rustdoc-item-1452"></a>

### `pipeline_layout`

```rust
pipeline_layout: &'a wgpu::PipelineLayout
```

_No documentation provided._

<a id="rustdoc-item-1454"></a>

### `shader_module`

```rust
shader_module: &'a wgpu::ShaderModule
```

_No documentation provided._

<a id="rustdoc-item-1456"></a>

### `vertex_entry_point`

```rust
vertex_entry_point: &'a str
```

_No documentation provided._

<a id="rustdoc-item-1457"></a>

### `fragment_entry_point`

```rust
fragment_entry_point: &'a str
```

_No documentation provided._

<a id="rustdoc-item-1458"></a>

### `vertex_buffers`

```rust
vertex_buffers: &'a [wgpu::VertexBufferLayout<'a>]
```

_No documentation provided._

<a id="rustdoc-item-1459"></a>

### `topology`

```rust
topology: wgpu::PrimitiveTopology
```

_No documentation provided._

<a id="rustdoc-item-1461"></a>

### `color_target`

```rust
color_target: Option<wgpu::ColorTargetState>
```

_No documentation provided._

<a id="rustdoc-item-1463"></a>

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
