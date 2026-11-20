<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-721"></a>

# Struct `pill_master_renderer::preview::MeshSource`

```rust
pub(crate) struct MeshSource;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\preview.rs:130`

One decoded mesh on the GPU, with the transform that frames it.

## Fields

<a id="rustdoc-item-717"></a>

### `vertices`

```rust
vertices: wgpu::Buffer
```

Interleaved vertices, in the asset crate's `MeshVertex` layout.

<a id="rustdoc-item-718"></a>

### `indices`

```rust
indices: wgpu::Buffer
```

Triangle indices into [`Self::vertices`](#rustdoc-item-717).

<a id="rustdoc-item-719"></a>

### `index_count`

```rust
index_count: u32
```

How many indices to draw.

<a id="rustdoc-item-720"></a>

### `transform`

```rust
transform: [[f32; 4]; 4]
```

Projection times view, framing the mesh inside the square.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
