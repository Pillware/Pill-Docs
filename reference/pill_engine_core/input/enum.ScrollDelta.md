<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5723"></a>

# Enum `pill_engine_core::input::ScrollDelta`

```rust
pub enum ScrollDelta { ... }
```

Source: `engine\pill_engine_core\src\input.rs:364`

How far a mouse wheel turned.

Positive `y` scrolls up (away from the user), positive `x` scrolls right.

## Variants

<a id="rustdoc-item-5720"></a>

### `Lines`

```rust
Lines
```

Notched wheels: lines (or rows) to scroll.

<a id="rustdoc-item-5722"></a>

### `Pixels`

```rust
Pixels
```

Touchpads and smooth wheels: physical pixels to scroll.

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
- `Copy`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
