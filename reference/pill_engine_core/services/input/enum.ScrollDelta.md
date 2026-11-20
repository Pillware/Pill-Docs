<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9553"></a>

# Enum `pill_engine_core::services::input::ScrollDelta`

```rust
pub enum ScrollDelta { ... }
```

Source: `engine\pill_engine_core\src\services\input.rs:364`

How far a mouse wheel turned.

Positive `y` scrolls up (away from the user), positive `x` scrolls right.

## Variants

<a id="rustdoc-item-9550"></a>

### `Lines`

```rust
Lines
```

Notched wheels: lines (or rows) to scroll.

<a id="rustdoc-item-9552"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Copy`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
