<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8747"></a>

# Struct `pill_engine_core::services::gizmos::GizmoContext`

```rust
pub struct GizmoContext<'a>;
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:134`

What one component's draw call knows about its entity.

It is the read-only half of a system's access: the entity, its place in an
editor's selection, and the world it belongs to, so a gizmo reads any
component or resource it needs for its drawing.

## Fields

<a id="rustdoc-item-8780"></a>

### `world`

```rust
world: &'a crate::ecs::world::World
```

The world the entity lives in, which every read goes through.

<a id="rustdoc-item-8781"></a>

### `entity`

```rust
entity: crate::ecs::entity::Entity
```

The entity the component belongs to.

<a id="rustdoc-item-8782"></a>

### `selected`

```rust
selected: bool
```

Whether an editor has this entity selected.

<a id="rustdoc-item-8783"></a>

### `hovered`

```rust
hovered: bool
```

Whether this entity is under the editor's pointer.

## Associated functions and methods

<a id="rustdoc-item-8784"></a>

### `transform`

```rust
pub fn transform(self: &Self) -> Option<&'a TransformComponent>;
```

The entity's transform, when it has one.

<a id="rustdoc-item-8785"></a>

### `translation`

```rust
pub fn translation(self: &Self) -> [f32; 3];
```

The entity's position, or the origin when it has no transform.

<a id="rustdoc-item-8786"></a>

### `rotation`

```rust
pub fn rotation(self: &Self) -> [f32; 4];
```

The entity's rotation as a `(x, y, z, w)` quaternion, or the identity
when it has no transform.

<a id="rustdoc-item-8787"></a>

### `scale`

```rust
pub fn scale(self: &Self) -> [f32; 3];
```

The entity's scale, or `1` on every axis when it has no transform.

<a id="rustdoc-item-8788"></a>

### `to_world`

```rust
pub fn to_world(self: &Self) -> [[f32; 4]; 4];
```

The entity's transform as a row-major matrix, which turns a point in the
entity's own space into world space.

<a id="rustdoc-item-8789"></a>

### `get_component`

```rust
pub fn get_component<T: Component>(self: &Self) -> Option<&'a T>;
```

Reads another component of the same entity, for a gizmo whose drawing
depends on a value beside its own.

<a id="rustdoc-item-8790"></a>

### `get_resource`

```rust
pub fn get_resource<T: Resource>(self: &Self) -> Option<&'a T>;
```

Reads a resource of the world, for a gizmo whose drawing depends on a
manager or a setting.

<a id="rustdoc-item-8791"></a>

### `get_component_of`

```rust
pub fn get_component_of<T: Component>(self: &Self, entity: Entity) -> Option<&'a T>;
```

Reads a component of any entity, for a gizmo that draws a link between
two of them.

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
