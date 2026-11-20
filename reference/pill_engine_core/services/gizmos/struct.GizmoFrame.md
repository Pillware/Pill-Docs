<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8742"></a>

# Struct `pill_engine_core::services::gizmos::GizmoFrame`

```rust
pub struct GizmoFrame;
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:95`

What the pass gives every gizmo once per frame: whose gizmos draw and what
is under the pointer.

## Fields

<a id="rustdoc-item-8740"></a>

### `selected`

```rust
selected: Vec<crate::ecs::entity::Entity>
```

The entities an editor has selected.

<a id="rustdoc-item-8741"></a>

### `hovered`

```rust
hovered: Option<crate::ecs::entity::Entity>
```

The entity under the editor's pointer, when there is one.

## Associated functions and methods

<a id="rustdoc-item-8743"></a>

### `new`

```rust
pub fn new(selected: Vec<Entity>, hovered: Option<Entity>) -> Self;
```

Builds one frame's context.

<a id="rustdoc-item-8744"></a>

### `is_selected`

```rust
pub fn is_selected(self: &Self, entity: Entity) -> bool;
```

Whether an editor has this entity selected.

<a id="rustdoc-item-8745"></a>

### `hovered`

```rust
pub fn hovered(self: &Self) -> Option<Entity>;
```

The entity under the editor's pointer, when there is one.

<a id="rustdoc-item-8746"></a>

### `context`

```rust
pub fn context<'a>(self: &Self, world: &'a World, entity: Entity) -> GizmoContext<'a>;
```

Builds one entity's context by looking up its transform in `world`.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Clone`
- `Default`
