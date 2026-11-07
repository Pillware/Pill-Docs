<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3637"></a>

# Struct `pill_engine_core::debug_draw::DebugStyle`

```rust
pub struct DebugStyle;
```

Source: `engine\pill_engine_core\src\debug_draw.rs:62`

How one drawn item looks and lasts.

## Fields

<a id="rustdoc-item-3633"></a>

### `color`

```rust
color: DebugColor
```

Its colour.

<a id="rustdoc-item-3634"></a>

### `depth_test`

```rust
depth_test: bool
```

Whether scene geometry in front of it hides it (`true`), or it draws
over everything (`false`).

<a id="rustdoc-item-3635"></a>

### `chrome`

```rust
chrome: bool
```

Whether this is the editor's own drawing - a drag guide, a constraint
line - rather than the game's. An editor view draws it. A game surface
does not.

<a id="rustdoc-item-3636"></a>

### `lifetime`

```rust
lifetime: DebugLifetime
```

How long it stays.

## Associated functions and methods

<a id="rustdoc-item-3638"></a>

### `colored`

```rust
pub fn colored(color: DebugColor) -> Self;
```

Returns the default style in `color`.

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
- `StructuralPartialEq`
- `PartialEq`
- `Default`
