<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4319"></a>

# Struct `pill_engine_core::services::gizmos::GizmoSelection`

```rust
pub struct GizmoSelection;
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:705`

The entities an editor has selected and the one under its pointer.

An editor writes it; the engine never does. A game has none, so every gizmo
sees an empty selection.

## Fields

<a id="rustdoc-item-8991"></a>

### `selected`

```rust
selected: Vec<crate::ecs::entity::Entity>
```

The selected entities, in the order the editor selected them.

<a id="rustdoc-item-8992"></a>

### `hovered`

```rust
hovered: Option<crate::ecs::entity::Entity>
```

The entity under the editor's pointer, when there is one.

## Associated functions and methods

<a id="rustdoc-item-8993"></a>

### `replace`

```rust
pub fn replace(self: &mut Self, selected: Vec<Entity>, hovered: Option<Entity>) -> bool;
```

Replaces what is selected and hovered, answering whether anything
changed - which is what an editor publishes on.

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
- `Resource`
