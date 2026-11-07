<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-725"></a>

# Struct `pill_master_renderer::preview::MeshSource`

```rust
pub(crate) struct MeshSource;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\preview.rs:130`

One decoded mesh on the GPU, with the transform that frames it.

## Fields

<a id="rustdoc-item-721"></a>

### `vertices`

```rust
vertices: wgpu::Buffer
```

Interleaved vertices, in the asset crate's `MeshVertex` layout.

<a id="rustdoc-item-722"></a>

### `indices`

```rust
indices: wgpu::Buffer
```

Triangle indices into [`Self::vertices`](#rustdoc-item-721).

<a id="rustdoc-item-723"></a>

### `index_count`

```rust
index_count: u32
```

How many indices to draw.

<a id="rustdoc-item-724"></a>

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
