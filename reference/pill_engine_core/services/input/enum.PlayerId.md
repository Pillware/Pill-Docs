<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9066"></a>

# Enum `pill_engine_core::services::input::PlayerId`

```rust
pub enum PlayerId { ... }
```

Source: `engine\pill_engine_core\src\services\input.rs:321`

The player a gamepad belongs to.

Gamepads take the lowest free slot when they connect, and keep it until
they disconnect.

## Variants

<a id="rustdoc-item-9503"></a>

### `Player1`

```rust
Player1
```

The first slot.

<a id="rustdoc-item-9504"></a>

### `Player2`

```rust
Player2
```

The second slot.

<a id="rustdoc-item-9505"></a>

### `Player3`

```rust
Player3
```

The third slot.

<a id="rustdoc-item-9506"></a>

### `Player4`

```rust
Player4
```

The fourth slot.

## Associated functions and methods

<a id="rustdoc-item-9507"></a>

### `ALL`

```rust
const ALL: [PlayerId; 4] = _;
```

Every slot, in order.

<a id="rustdoc-item-9508"></a>

### `from_index`

```rust
pub const fn from_index(index: usize) -> Option<PlayerId>;
```

The slot at `index`, or `None` past the last one.

<a id="rustdoc-item-9509"></a>

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
- `Copy`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
