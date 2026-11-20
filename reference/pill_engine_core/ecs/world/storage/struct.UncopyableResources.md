<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4957"></a>

# Struct `pill_engine_core::ecs::world::storage::UncopyableResources`

```rust
pub(crate) struct UncopyableResources;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:354`

The resource types a copy could not include.

Every name is listed, so one refusal tells a person everything to fix.

## Fields

<a id="rustdoc-item-4956"></a>

### `type_names`

```rust
type_names: Vec<String>
```

The names of the resources the copy could not include.

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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
