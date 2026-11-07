<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-618"></a>

# Struct `pill_engine_core::archetype::ArchetypeId`

```rust
pub struct ArchetypeId;
```

Source: `engine\pill_engine_core\src\archetype.rs:1810`

ArchetypeId uniquely identifies an archetype by its component mask.

Derived from the archetype's [`ComponentMask`](../component/struct.ComponentMask.md#rustdoc-item-617), guaranteeing a 1:1
mapping without a separate lookup table.

## Fields

<a id="rustdoc-item-616"></a>

### `0`

```rust
0: u128
```

The packed component mask bits identifying this archetype.

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
- `PartialOrd`
- `Ord`
