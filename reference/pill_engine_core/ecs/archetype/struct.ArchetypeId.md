<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2639"></a>

# Struct `pill_engine_core::ecs::archetype::ArchetypeId`

```rust
pub struct ArchetypeId;
```

Source: `engine\pill_engine_core\src\ecs\archetype.rs:1825`

ArchetypeId uniquely identifies an archetype by its component mask.

Derived from the archetype's [`ComponentMask`](../component/struct.ComponentMask.md#rustdoc-item-2638), guaranteeing a 1:1
mapping without a separate lookup table.

## Fields

<a id="rustdoc-item-2637"></a>

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
- `Comparable<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
- `PartialOrd`
- `Ord`
