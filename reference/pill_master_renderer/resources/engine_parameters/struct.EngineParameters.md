<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2195"></a>

# Struct `pill_master_renderer::resources::engine_parameters::EngineParameters`

```rust
pub struct EngineParameters;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\engine_parameters.rs:114`

The engine parameters as the renderer owns them: the values, the buffer
they are uploaded to, and the bindings that expose them.

Built once when the renderer starts and refilled every frame through
[`update`](#rustdoc-item-2194). Every pass that reads engine
parameters binds this one group, so all of them see the same fog and frame
state.

## Fields

<a id="rustdoc-item-2190"></a>

### `parameters_data`

```rust
parameters_data: EngineParametersData
```

The values currently held in the buffer, kept CPU-side so `update` can
rewrite the buffer.

<a id="rustdoc-item-2191"></a>

### `parameters_uniform_buffer`

```rust
parameters_uniform_buffer: wgpu::Buffer
```

Uniform buffer holding one [`EngineParametersData`](struct.EngineParametersData.md#rustdoc-item-2146), bound at binding 0
of the group below.

<a id="rustdoc-item-2192"></a>

### `bind_group_layout`

```rust
bind_group_layout: wgpu::BindGroupLayout
```

Layout a pipeline declares for the engine group, so the one bind group
below works for every pass that reads these values.

<a id="rustdoc-item-2193"></a>

### `bind_group`

```rust
bind_group: wgpu::BindGroup
```

The group binding the buffer, built from the layout above.

## Associated functions and methods

<a id="rustdoc-item-2196"></a>

### `new`

```rust
pub fn new(device: &wgpu::Device) -> Self;
```

Creates the uniform buffer, its layout and its bind group, all holding
the engine parameters at their zero values.

A pipeline that reads engine parameters must be built against
[`bind_group_layout`](#rustdoc-item-2192), which is
what makes this one group bindable by every pass.

<a id="rustdoc-item-2194"></a>

### `update`

```rust
pub fn update(self: &mut Self, queue: &wgpu::Queue, fog_density: f32, fog_color: [f32; 3], frame_size: [u32; 2], time: [f32; 4]);
```

Refills the buffer with one frame's values.

The surface size comes in as pixels, and `update_data` stores it in the
form the shaders read. The write is queued before any command buffer
submitted after it, so every pass recorded later in the frame sees the
new values.

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
- `Debug`
