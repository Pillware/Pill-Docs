<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-680"></a>

# Struct `pill_editor_shell_egui_editor::shell::inspector_widgets::Number`

```rust
pub struct Number;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_widgets.rs:43`

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

<a id="rustdoc-item-676"></a>

### `current`

```rust
current: f64
```

The value, as the editors read and write it.

<a id="rustdoc-item-677"></a>

### `kind_min`

```rust
kind_min: f64
```

The kind's own lower bound.

<a id="rustdoc-item-678"></a>

### `kind_max`

```rust
kind_max: f64
```

The kind's own upper bound.

<a id="rustdoc-item-679"></a>

### `rebuild`

```rust
rebuild: fn (_: f64) -> FieldValue
```

The kind's `FieldValue` constructor for an edited value.

## Associated functions and methods

<a id="rustdoc-item-681"></a>

### `of`

```rust
pub fn of(value: &FieldValue) -> Option<Number>;
```

Returns the number inside `value` with its kind's own bounds, or `None`
for a kind without a numeric editor.

<a id="rustdoc-item-682"></a>

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
