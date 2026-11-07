<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1169"></a>

# Struct `pill_editor_core::editor_state::ComponentSeed`

```rust
pub struct ComponentSeed;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:147`

One component to place on a newly created entity.

## Fields

<a id="rustdoc-item-2791"></a>

### `type_name`

```rust
type_name: String
```

Registered component type name.

<a id="rustdoc-item-2792"></a>

### `fields`

```rust
fields: Vec<(String, pill_engine::FieldValue)>
```

Field values to write over the zero-initialised image. Fields left out
stay zero.

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
