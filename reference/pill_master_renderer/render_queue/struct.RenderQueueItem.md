<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-139"></a>

# Struct `pill_master_renderer::render_queue::RenderQueueItem`

```rust
pub struct RenderQueueItem;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\render_queue.rs:43`

One draw waiting in the queue, with the handles it binds, the instance it
draws, and the key it is sorted by.

The renderer adds one entry for each drawable instance of the frame, so a
sorted queue describes everything the frame draws. Comparing two entries
looks at the key first and at the instance index second, which keeps the
instances that share a key in the frame's own order inside their batch. The
handles take no part in the comparison.

## Fields

<a id="rustdoc-item-1791"></a>

### `key`

```rust
key: u64
```

The key this entry is sorted by. It packs the draw's rendering order and
the slot identity of its three handles, as
[`compose_render_queue_key`](fn.compose_render_queue_key.md#rustdoc-item-1790) lays them out. The queue only compares it
and never turns it back into handles.

<a id="rustdoc-item-1792"></a>

### `frame_instance_index`

```rust
frame_instance_index: u32
```

Position of the drawn instance in the frame's instance vector.
`build_queued_instances` reads that instance's transform to build the
model matrix.

<a id="rustdoc-item-1793"></a>

### `shader`

```rust
shader: renderer_shader::RendererShaderHandle
```

The shader this draw binds.

<a id="rustdoc-item-1794"></a>

### `material`

```rust
material: renderer_material::RendererMaterialHandle
```

The material this draw binds.

<a id="rustdoc-item-1795"></a>

### `mesh`

```rust
mesh: renderer_mesh::RendererMeshHandle
```

The mesh this draw binds.

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
- `Equivalent<K>`
- `Comparable<K>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
- `Debug`
- `PartialEq`
- `Eq`
- `PartialOrd`
- `Ord`
