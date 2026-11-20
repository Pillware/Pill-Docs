<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9357"></a>

# Enum `pill_engine_core::services::input::MouseButton`

```rust
pub enum MouseButton { ... }
```

Source: `engine\pill_engine_core\src\services\input.rs:209`

A mouse button.

## Variants

<a id="rustdoc-item-9352"></a>

### `Left`

```rust
Left
```

The primary button, usually the left one.

<a id="rustdoc-item-9353"></a>

### `Right`

```rust
Right
```

The secondary button, usually the right one.

<a id="rustdoc-item-9354"></a>

### `Middle`

```rust
Middle
```

The wheel button.

<a id="rustdoc-item-9355"></a>

### `Back`

```rust
Back
```

The "browser back" side button.

<a id="rustdoc-item-9356"></a>

### `Forward`

```rust
Forward
```

The "browser forward" side button.

## Associated functions and methods

<a id="rustdoc-item-9358"></a>

### `ALL`

```rust
const ALL: [MouseButton; 5] = _;
```

Every mouse button, in declaration order.

<a id="rustdoc-item-9359"></a>

### `bit_mask`

```rust
pub(in services::input) const fn bit_mask(self: Self) -> u8;
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
