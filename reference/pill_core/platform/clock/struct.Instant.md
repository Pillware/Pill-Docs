<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1124"></a>

# Struct `pill_core::platform::clock::Instant`

```rust
pub struct Instant;
```

Source: `engine\pill_core\src\platform\clock.rs:36`

A monotonic timestamp that works on native and on the web.

Use it wherever `std::time::Instant` would be used. It offers the part of
that API the engine uses: `now`, `elapsed`, the `duration_since` methods,
and arithmetic with [`Duration`].

## Fields

<a id="rustdoc-item-1122"></a>

### `0`

```rust
0: std::time::Instant
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1125"></a>

### `now`

```rust
pub fn now() -> Self;
```

The current instant.

<a id="rustdoc-item-1126"></a>

### `elapsed`

```rust
pub fn elapsed(self: &Self) -> Duration;
```

The time elapsed since this instant.

<a id="rustdoc-item-1129"></a>

### `duration_since`

```rust
pub fn duration_since(self: &Self, earlier: Instant) -> Duration;
```

The time from `earlier` to this instant, zero if `earlier` is later.

It saturates: a reversed pair gives zero instead of a panic, the same
as [`std::time::Instant::duration_since`]. This and
[`saturating_duration_since`] do the same thing; prefer this one in new
code.

[`saturating_duration_since`]: #rustdoc-item-1128

<a id="rustdoc-item-1128"></a>

### `saturating_duration_since`

```rust
pub fn saturating_duration_since(self: &Self, earlier: Instant) -> Duration;
```

The time from `earlier` to this instant, zero if `earlier` is later.

The same operation as [`duration_since`](#rustdoc-item-1129), under
the name the standard library uses.

<a id="rustdoc-item-1130"></a>

### `checked_duration_since`

```rust
pub fn checked_duration_since(self: &Self, earlier: Instant) -> Option<Duration>;
```

The time from `earlier` to this instant, or `None` if `earlier` is later.

<a id="rustdoc-item-1131"></a>

### `checked_add`

```rust
pub fn checked_add(self: &Self, duration: Duration) -> Option<Instant>;
```

This instant moved forward by `duration`, or `None` on overflow.

<a id="rustdoc-item-1132"></a>

### `checked_sub`

```rust
pub fn checked_sub(self: &Self, duration: Duration) -> Option<Instant>;
```

This instant moved back by `duration`, or `None` on underflow.

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
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `PartialOrd`
- `Ord`
- `Hash`
- `Add<Duration>`
- `AddAssign<Duration>`
- `Sub<Duration>`
- `SubAssign<Duration>`
- `Sub`
