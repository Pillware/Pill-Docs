<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Struct `pill_dummy_math::Adder`

```rust
pub struct Adder;
```

Source: `extensions\pill_dummy_math\pill_dummy_math\src\pill_dummy_math.rs:26`

Dummy accumulator exercising basic arithmetic.

## Fields

<a id="rustdoc-item-0"></a>

### `total`

```rust
total: i32
```

Sum of every amount added since the last reset.

## Associated functions and methods

<a id="rustdoc-item-2"></a>

### `add`

```rust
pub fn add(self: &mut Self, amount_to_add: i32) -> i32;
```

Adds `amount_to_add` to the running total and returns the new total.

<a id="rustdoc-item-3"></a>

### `reset`

```rust
pub fn reset(self: &mut Self);
```

Resets the running total to zero.

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
- `Default`
