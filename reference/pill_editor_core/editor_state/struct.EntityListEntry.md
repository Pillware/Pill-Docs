<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2667"></a>

# Struct `pill_editor_core::editor_state::EntityListEntry`

```rust
pub struct EntityListEntry;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:68`

One line of the Hierarchy list. It is cheap to build and is rebuilt on
every refresh.

## Fields

<a id="rustdoc-item-2663"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The generation-tagged handle, which is also how the selection names an
entity.

<a id="rustdoc-item-2664"></a>

### `display`

```rust
display: String
```

`"{id}v{generation}"` display label.

<a id="rustdoc-item-2665"></a>

### `component_count`

```rust
component_count: usize
```

Number of components attached.

<a id="rustdoc-item-2666"></a>

### `archetype_label`

```rust
archetype_label: String
```

Joined component type names, for the list subtitle.

## Associated functions and methods

<a id="rustdoc-item-2668"></a>

### `display_of`

```rust
pub fn display_of(entity: Entity) -> String;
```

The label one entity is listed and referenced by.

The Hierarchy list, an entity reference row and the picker all name an
entity this way, so a reference reads the same wherever it is shown.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
