<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6608"></a>

# Enum `pill_editor_core::inspector::FieldWidget`

```rust
pub enum FieldWidget { ... }
```

Source: `editor\pill_editor_core\src\inspector.rs:151`

The widget a value's kind asks for.

## Variants

<a id="rustdoc-item-6589"></a>

### `Checkbox`

```rust
Checkbox
```

A boolean: a checkbox.

<a id="rustdoc-item-6590"></a>

### `Integer`

```rust
Integer
```

A whole number: a drag field that scrubs and accepts typed input.

<a id="rustdoc-item-6591"></a>

### `Float`

```rust
Float
```

A floating point number: a drag field with decimals.

<a id="rustdoc-item-6592"></a>

### `Text`

```rust
Text
```

A string: a single-line text edit.

<a id="rustdoc-item-6593"></a>

### `ReadOnly`

```rust
ReadOnly
```

A value the row shows as text with no editor: a heap-backed string, a
long array, a list or an opaque payload.

<a id="rustdoc-item-6596"></a>

### `FloatSlider`

```rust
FloatSlider
```

A `[Range]` on a floating point field: a slider bounded by `min` and
`max`.

<a id="rustdoc-item-6599"></a>

### `IntegerSlider`

```rust
IntegerSlider
```

A `[Range]` on a whole-number field: a slider in whole steps.

<a id="rustdoc-item-6601"></a>

### `FloatDrag`

```rust
FloatDrag
```

A `[Min]` on a floating point field: a drag value with a floor.

<a id="rustdoc-item-6603"></a>

### `IntegerDrag`

```rust
IntegerDrag
```

A `[Min]` on a whole-number field: a drag value with a floor.

<a id="rustdoc-item-6605"></a>

### `MultilineText`

```rust
MultilineText
```

A `[TextArea]` or `[Multiline]` on a text field: a box of that many
rows.

<a id="rustdoc-item-6607"></a>

### `Enum`

```rust
Enum
```

A declared enum: a dropdown of its variants, which the value's own tag
lists ([`pill_engine::parse_enum_tag`]).

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
