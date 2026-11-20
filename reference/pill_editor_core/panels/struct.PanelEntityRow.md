<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7837"></a>

# Struct `pill_editor_core::panels::PanelEntityRow`

```rust
pub struct PanelEntityRow;
```

Source: `editor\pill_editor_core\src\panels.rs:120`

One row of the world's entities, as a panel sees it.

## Fields

<a id="rustdoc-item-7834"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity's handle.

<a id="rustdoc-item-7835"></a>

### `display`

```rust
display: String
```

The list label the Entities tab shows.

<a id="rustdoc-item-7836"></a>

### `archetype`

```rust
archetype: String
```

The component type names joined into one string. A panel matches on
part of it instead of naming a type from another crate.

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
