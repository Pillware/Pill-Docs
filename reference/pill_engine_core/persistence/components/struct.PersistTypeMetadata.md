<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6223"></a>

# Struct `pill_engine_core::persistence::components::PersistTypeMetadata`

```rust
pub struct PersistTypeMetadata;
```

Source: `engine\pill_engine_core\src\persistence\components.rs:31`

One persistable component type's registration, as the reload sees it.

The reload captures this before the swap, so it can compare the old schema
with the new one and migrate only the component types that changed.

## Fields

<a id="rustdoc-item-6220"></a>

### `component_id`

```rust
component_id: crate::component::ComponentId
```

Runtime component identifier used by archetype columns.

<a id="rustdoc-item-6221"></a>

### `schema_hash`

```rust
schema_hash: u64
```

Schema hash of the type: its name, its size, the field kinds of a
default instance and, when the type declared one, its field layout.

<a id="rustdoc-item-6222"></a>

### `serializer`

```rust
serializer: fn (storage: &crate::archetype::ComponentColumns, index: usize) -> Option<Vec<u8>>
```

Serializer of the retiring generation, the only code that can read
rows still stored in the old layout.

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
- `Copy`
