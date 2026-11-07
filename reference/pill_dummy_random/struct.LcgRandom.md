<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Struct `pill_dummy_random::LcgRandom`

```rust
pub struct LcgRandom;
```

Source: `extensions\pill_dummy_random\pill_dummy_random\src\pill_dummy_random.rs:30`

Dummy linear congruential generator producing a deterministic sequence.

## Fields

<a id="rustdoc-item-0"></a>

### `state`

```rust
state: u32
```

Current value that the next number is derived from.

## Associated functions and methods

<a id="rustdoc-item-2"></a>

### `next_u32`

```rust
pub fn next_u32(self: &mut Self) -> u32;
```

Advances the generator and returns the next value in its sequence.

<a id="rustdoc-item-3"></a>

### `next_f32`

```rust
pub fn next_f32(self: &mut Self) -> f32;
```

Returns the next value mapped into `0.0..=1.0`.

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
