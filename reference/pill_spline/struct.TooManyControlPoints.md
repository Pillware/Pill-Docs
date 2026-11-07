<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8"></a>

# Struct `pill_spline::TooManyControlPoints`

```rust
pub struct TooManyControlPoints;
```

Source: `extensions\pill_spline\pill_spline\src\pill_spline.rs:72`

More control points than a [`Spline`](struct.Spline.md#rustdoc-item-6) can hold.

Returned by [`Spline::try_from_points`](struct.Spline.md#rustdoc-item-7); it names both counts so a caller
can trim the path without reading [`MAX_CONTROL_POINTS`](constant.MAX_CONTROL_POINTS.md#rustdoc-item-0) first.

## Fields

<a id="rustdoc-item-4"></a>

### `supplied`

```rust
supplied: usize
```

How many points the caller supplied.

<a id="rustdoc-item-5"></a>

### `capacity`

```rust
capacity: usize
```

How many a spline can hold ([`MAX_CONTROL_POINTS`](constant.MAX_CONTROL_POINTS.md#rustdoc-item-0)).

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Display`
- `Error`
