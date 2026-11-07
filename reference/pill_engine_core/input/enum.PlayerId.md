<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5243"></a>

# Enum `pill_engine_core::input::PlayerId`

```rust
pub enum PlayerId { ... }
```

Source: `engine\pill_engine_core\src\input.rs:321`

The player a gamepad belongs to.

Gamepads take the lowest free slot when they connect, and keep it until
they disconnect.

## Variants

<a id="rustdoc-item-5674"></a>

### `Player1`

```rust
Player1
```

The first slot.

<a id="rustdoc-item-5675"></a>

### `Player2`

```rust
Player2
```

The second slot.

<a id="rustdoc-item-5676"></a>

### `Player3`

```rust
Player3
```

The third slot.

<a id="rustdoc-item-5677"></a>

### `Player4`

```rust
Player4
```

The fourth slot.

## Associated functions and methods

<a id="rustdoc-item-5678"></a>

### `ALL`

```rust
const ALL: [PlayerId; 4] = _;
```

Every slot, in order.

<a id="rustdoc-item-5679"></a>

### `from_index`

```rust
pub const fn from_index(index: usize) -> Option<PlayerId>;
```

The slot at `index`, or `None` past the last one.

<a id="rustdoc-item-5680"></a>

### `index`

```rust
pub const fn index(self: Self) -> usize;
```

This slot's zero-based index.

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
- `Eq`
- `Hash`
