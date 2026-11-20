<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10"></a>

# Struct `pill_spline::component::TooManyControlPoints`

```rust
pub struct TooManyControlPoints;
```

Source: `extensions\pill_spline\modules\runtime\src\component.rs:67`

More control points than a [`Spline`](struct.Spline.md#rustdoc-item-8) can hold.

Returned by [`Spline::try_from_points`](struct.Spline.md#rustdoc-item-9); it names both counts so a caller
can trim the path without reading [`MAX_CONTROL_POINTS`](constant.MAX_CONTROL_POINTS.md#rustdoc-item-2) first.

## Fields

<a id="rustdoc-item-6"></a>

### `supplied`

```rust
supplied: usize
```

How many points the caller supplied.

<a id="rustdoc-item-7"></a>

### `capacity`

```rust
capacity: usize
```

How many a spline can hold ([`MAX_CONTROL_POINTS`](constant.MAX_CONTROL_POINTS.md#rustdoc-item-2)).

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
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Display`
- `Error`
