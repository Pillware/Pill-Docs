<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2638"></a>

# Struct `pill_engine_core::ecs::component::ComponentMask`

```rust
pub struct ComponentMask;
```

Source: `engine\pill_engine_core\src\ecs\component.rs:531`

A set of component types, one bit per type.

One `u128` caps the ECS at 128 component types. That is the price of O(1)
archetype matching with a bitwise AND, and of masks that stay on the stack
and are `Copy`. Registration reports the ceiling as
[`WorldError::ComponentTypeLimitExceeded`](../../error/enum.WorldError.md#rustdoc-item-3210) instead of panicking; a project
stays under it by keeping related fields in one component.

## Fields

<a id="rustdoc-item-3209"></a>

### `0`

```rust
0: u128
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-3211"></a>

### `empty`

```rust
pub const fn empty() -> Self;
```

Constructs a mask with no bits set.

<a id="rustdoc-item-3212"></a>

### `set`

```rust
pub fn set(self: &mut Self, bit_index: u8);
```

Sets a bit in the mask.

#### Panics

In debug builds, panics if `bit_index >= 128`.

<a id="rustdoc-item-3213"></a>

### `has_bit`

```rust
pub fn has_bit(self: &Self, bit_index: u8) -> bool;
```

Returns whether a bit is set (O(1) component type check).

#### Panics

In debug builds, panics if `bit_index >= 128`.

<a id="rustdoc-item-3214"></a>

### `contains_all`

```rust
pub fn contains_all(self: &Self, other: &ComponentMask) -> bool;
```

Returns whether every bit set in `other` is also set in this mask.

The query hot path uses it to check whether an archetype has all the
components a query asks for.

<a id="rustdoc-item-3215"></a>

### `intersection`

```rust
pub fn intersection(a: &ComponentMask, b: &ComponentMask) -> ComponentMask;
```

Returns the bitwise AND of two masks: the bits set in both.

<a id="rustdoc-item-3216"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns `true` when no bit is set.

<a id="rustdoc-item-3217"></a>

### `intersects`

```rust
pub fn intersects(self: &Self, other: &ComponentMask) -> bool;
```

Returns `true` when any bit set in `other` is also set in this mask.

<a id="rustdoc-item-3218"></a>

### `bits`

```rust
pub(crate) fn bits(self: Self) -> u128;
```

Returns the raw `u128` bitfield, which is used to build a unique
[`ArchetypeId`](../archetype/struct.ArchetypeId.md#rustdoc-item-2639).

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
- `Default`
