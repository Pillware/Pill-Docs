<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-219"></a>

# Struct `pill_csharp_bridge::components::StableComponentId`

```rust
pub(crate) struct StableComponentId;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\components.rs:71`

Stable 128-bit identity of a managed component, derived from its name.

The name is the C# full name with dots (`pill_spline.Spline`).
[`stable_component_id`](fn.stable_component_id.md#rustdoc-item-734) hashes it with the engine's own mixing function,
and the managed runtime computes the same value in `Engine.StableIdOf`, so
two separately compiled sides agree without exchanging anything. The C ABI
has no 128-bit integer, so `component_key` and `component_key_high` carry
the two `u64` halves, and [`Self::from_halves`](#rustdoc-item-735) puts them back together.

A shared component that Rust registered is named with `::` separators, so
it hashes to a different value. [`ModuleExposedComponent`](struct.ModuleExposedComponent.md#rustdoc-item-510) keeps the C#
name beside the engine component ID the Rust name produced, and neither
name is translated into the other.

## Fields

<a id="rustdoc-item-733"></a>

### `0`

```rust
0: u128
```

The 128-bit canonical identity value.

## Associated functions and methods

<a id="rustdoc-item-735"></a>

### `from_halves`

```rust
pub(crate) const fn from_halves(low: u64, high: u64) -> Self;
```

Reconstruct the canonical 128-bit ID from the two halves carried by the
C ABI, with the high half restored to its original bit position.

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
