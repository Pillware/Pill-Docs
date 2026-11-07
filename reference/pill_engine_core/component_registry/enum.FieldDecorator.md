<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3167"></a>

# Enum `pill_engine_core::component_registry::FieldDecorator`

```rust
pub enum FieldDecorator { ... }
```

Source: `engine\pill_engine_core\src\component_registry.rs:37`

Presentation metadata a field declares for the editor's Inspector.

The vocabulary is Unity's. A decorator changes only what the Inspector
draws and how it draws it. It never reaches storage, persistence, the
schema fingerprint or the C# mirror. Text payloads are [`Cow`] so a
deriving artifact can borrow its literals, while the C# manifest lane owns
the text it parsed.

## Variants

<a id="rustdoc-item-3408"></a>

### `HideInInspector`

```rust
HideInInspector
```

Unity's `[HideInInspector]`: the field is not drawn. It is still stored,
serialized and copied; only its row disappears.

<a id="rustdoc-item-3410"></a>

### `Header`

```rust
Header
```

Unity's `[Header("Text")]`: a separator line with the text is drawn
above the field.

<a id="rustdoc-item-3412"></a>

### `Space`

```rust
Space
```

Unity's `[Space(pixels)]`: a vertical gap is drawn above the field.

<a id="rustdoc-item-3414"></a>

### `Tooltip`

```rust
Tooltip
```

Unity's `[Tooltip("Text")]`: the text is shown on hover of the field's
label.

<a id="rustdoc-item-3417"></a>

### `Range`

```rust
Range
```

Unity's `[Range(min, max)]`: a numeric field is drawn as a slider over
the range. Integer fields slide in whole steps.

<a id="rustdoc-item-3420"></a>

### `TextArea`

```rust
TextArea
```

Unity's `[TextArea]` / `[TextArea(minLines, maxLines)]`: a text field is
drawn as a multi-line box.

<a id="rustdoc-item-3422"></a>

### `Multiline`

```rust
Multiline
```

Unity's `[Multiline(lines)]`: a text field is drawn as a multi-line box
that asks for that many rows.

<a id="rustdoc-item-3424"></a>

### `Min`

```rust
Min
```

Unity's `[Min(value)]`: a numeric field's drag value never goes below
the minimum.

<a id="rustdoc-item-3425"></a>

### `Color`

```rust
Color
```

The field draws as one colour row with a popup picker. That covers an
array of three or four numbers and the leaves of a nested colour struct
(`fill.r`, `fill.g`, ...), which the world flattens at registration.

<a id="rustdoc-item-3426"></a>

### `Vector`

```rust
Vector
```

Consecutive scalar leaves sharing a dotted prefix draw as one vector
row, X/Y/Z/W side by side, instead of one row each.

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
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
