<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4855"></a>

# Struct `pill_engine_core::ecs::world::storage::UncopyableComponents`

```rust
pub(crate) struct UncopyableComponents;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\ecs\world\storage.rs:134`

The component types a storage copy could not include.

Every name is listed, not just the first: a person who has to derive
`Clone` on a handful of components wants the whole list in one go.

The play session turns these names into a refusal, so the type is compiled
in ahead of its caller.

## Fields

<a id="rustdoc-item-4884"></a>

### `type_names`

```rust
type_names: Vec<String>
```

The registered names of the types the copy could not include.

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
