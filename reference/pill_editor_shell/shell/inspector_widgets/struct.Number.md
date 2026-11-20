<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-756"></a>

# Struct `pill_editor_shell::shell::inspector_widgets::Number`

```rust
pub struct Number;
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:98`

One whole number seen through `f64`, with the way back into its own
`FieldValue`.

Every integer kind needs the same editor behaviour, so this type lets the
slider and the drag value be written once instead of once per kind. Each
kind carries its own bounds, so a `[Range]` wider than the kind clamps to
the kind's limit.

Public like every item here, so a patch crate can reach it through the
shell's re-exports; the build script's inventory registers its functions by
qualified path.

## Fields

<a id="rustdoc-item-752"></a>

### `current`

```rust
current: f64
```

The value, as the editors read and write it.

<a id="rustdoc-item-753"></a>

### `kind_min`

```rust
kind_min: f64
```

The kind's own lower bound.

<a id="rustdoc-item-754"></a>

### `kind_max`

```rust
kind_max: f64
```

The kind's own upper bound.

<a id="rustdoc-item-755"></a>

### `rebuild`

```rust
rebuild: fn (_: f64) -> FieldValue
```

The kind's `FieldValue` constructor for an edited value.

## Associated functions and methods

<a id="rustdoc-item-757"></a>

### `of`

```rust
pub fn of(value: &FieldValue) -> Option<Number>;
```

Returns the number inside `value` with its kind's own bounds, or `None`
for a kind without a numeric editor.

<a id="rustdoc-item-758"></a>

### `rounded`

```rust
pub fn rounded(self: &Self, low: f64, high: f64) -> f64;
```

Returns `current` clamped into `low..=high` and rounded, ready for a
whole-number widget.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
