<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1415"></a>

# Struct `pill_master_renderer_data::components::mesh_renderer::MeshRendererComponentBuilder`

```rust
pub struct MeshRendererComponentBuilder;
```

Source: `extensions\pill_master_renderer\modules\runtime\data\src\components\mesh_renderer.rs:29`

Assembles a [`MeshRendererComponent`](struct.MeshRendererComponent.md#rustdoc-item-1413) one handle at a time.

It starts from the component's `Default`, so a caller sets only the handles
it has, and `build` returns the finished component.

## Fields

<a id="rustdoc-item-1412"></a>

### `component`

```rust
component: MeshRendererComponent
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1416"></a>

### `mesh`

```rust
pub fn mesh(self: Self, mesh: &Handle<Mesh>) -> Self;
```

Sets the mesh the entity draws with.

<a id="rustdoc-item-1417"></a>

### `material`

```rust
pub fn material(self: Self, material: &Handle<Material>) -> Self;
```

Sets the material that shades the mesh.

<a id="rustdoc-item-1418"></a>

### `build`

```rust
pub fn build(self: Self) -> MeshRendererComponent;
```

Finishes the builder and returns the assembled component.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
