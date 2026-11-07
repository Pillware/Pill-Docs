<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1210"></a>

# Struct `pill_core::profiling::GpuStatistics`

```rust
pub struct GpuStatistics;
```

Source: `engine\pill_core\src\profiling.rs:94`

The pipeline statistics of one geometry pass.

A frame's totals go to [`plot_gpu_statistics`](enabled/fn.plot_gpu_statistics.md#rustdoc-item-1333).

## Fields

<a id="rustdoc-item-1410"></a>

### `vertex_invocations`

```rust
vertex_invocations: u64
```

Vertex shader invocations.

<a id="rustdoc-item-1411"></a>

### `clipper_invocations`

```rust
clipper_invocations: u64
```

Primitives that entered clipping.

<a id="rustdoc-item-1412"></a>

### `clipper_primitives_out`

```rust
clipper_primitives_out: u64
```

Primitives that passed clipping.

<a id="rustdoc-item-1413"></a>

### `fragment_invocations`

```rust
fragment_invocations: u64
```

Fragment shader invocations.

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
- `Debug`
- `Clone`
- `Copy`
- `Default`
