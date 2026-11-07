<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5531"></a>

# Enum `pill_engine_core::input::MouseButton`

```rust
pub enum MouseButton { ... }
```

Source: `engine\pill_engine_core\src\input.rs:209`

A mouse button.

## Variants

<a id="rustdoc-item-5526"></a>

### `Left`

```rust
Left
```

The primary button, usually the left one.

<a id="rustdoc-item-5527"></a>

### `Right`

```rust
Right
```

The secondary button, usually the right one.

<a id="rustdoc-item-5528"></a>

### `Middle`

```rust
Middle
```

The wheel button.

<a id="rustdoc-item-5529"></a>

### `Back`

```rust
Back
```

The "browser back" side button.

<a id="rustdoc-item-5530"></a>

### `Forward`

```rust
Forward
```

The "browser forward" side button.

## Associated functions and methods

<a id="rustdoc-item-5532"></a>

### `ALL`

```rust
const ALL: [MouseButton; 5] = _;
```

Every mouse button, in declaration order.

<a id="rustdoc-item-5533"></a>

### `bit_mask`

```rust
pub(in input) const fn bit_mask(self: Self) -> u8;
```

This button's bit mask.

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
