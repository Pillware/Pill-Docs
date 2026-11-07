<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-686"></a>

# Struct `pill_renderer_api::frame::RenderInstance`

```rust
pub struct RenderInstance;
```

Source: `rendering\pill_renderer_api\src\frame.rs:221`

One drawable the frame collected: where it stands and what it draws with.

The frame writer adds an instance only for a mesh renderer whose mesh and
material both still resolve. The renderer turns each instance into GPU work,
and runs that share a shader, a material and a mesh become one instanced
draw.

## Fields

<a id="rustdoc-item-679"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity this instance belongs to, which is what outlining and picking
address.

<a id="rustdoc-item-681"></a>

### `transform`

```rust
transform: pill_engine::common_components::TransformComponent
```

World transform the instance is drawn at.

<a id="rustdoc-item-683"></a>

### `mesh`

```rust
mesh: AssetKey
```

Key of the mesh to draw.

<a id="rustdoc-item-684"></a>

### `material`

```rust
material: AssetKey
```

Key of the material to draw it with.

<a id="rustdoc-item-685"></a>

### `rendering_order`

```rust
rendering_order: u8
```

The rendering order of the instance's material, copied here so the
renderer can sort draws without reading the material asset again for
each one.

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
- `Clone`
- `Debug`
