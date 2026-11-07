<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3756"></a>

# Struct `pill_engine_core::debug_draw::DebugLabel`

```rust
pub struct DebugLabel;
```

Source: `engine\pill_engine_core\src\debug_draw.rs:140`

One text label of a frame.

## Fields

<a id="rustdoc-item-3753"></a>

### `anchor`

```rust
anchor: LabelAnchor
```

Where it is placed.

<a id="rustdoc-item-3754"></a>

### `text`

```rust
text: String
```

What it says. The renderer's bitmap font draws it in uppercase and
draws `?` for a character it does not have.

<a id="rustdoc-item-3755"></a>

### `color`

```rust
color: DebugColor
```

Its colour.

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
- `StructuralPartialEq`
- `PartialEq`
