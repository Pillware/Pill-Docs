<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1438"></a>

# Enum `pill_csharp_bridge::manifest::ManagedFieldDecorator`

```rust
pub(crate) enum ManagedFieldDecorator { ... }
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:335`

One presentation decorator a managed field declares.

Mirrors the editor's [`FieldDecorator`](pill_engine::component_registry::FieldDecorator)
vocabulary. The managed side writes one flat record for the whole
vocabulary, so unused payload members arrive as `null` and each variant
reads only the members its kind carries. [`validate_decorations`](fn.validate_decorations.md#rustdoc-item-1484) refuses a
payload that cannot mean what it says; nothing here affects storage.

## Variants

<a id="rustdoc-item-1466"></a>

### `HideInInspector`

```rust
HideInInspector
```

Unity's `[HideInInspector]`: the Inspector draws no row for the field.

<a id="rustdoc-item-1468"></a>

### `Header`

```rust
Header
```

A separator line with text, drawn above the field.

<a id="rustdoc-item-1470"></a>

### `Space`

```rust
Space
```

A vertical gap above the field.

<a id="rustdoc-item-1472"></a>

### `Tooltip`

```rust
Tooltip
```

Hover text on the field's label.

<a id="rustdoc-item-1475"></a>

### `Range`

```rust
Range
```

A slider over the range.

<a id="rustdoc-item-1478"></a>

### `TextArea`

```rust
TextArea
```

A multi-line text box.

<a id="rustdoc-item-1480"></a>

### `Multiline`

```rust
Multiline
```

A fixed-height multi-line text box.

<a id="rustdoc-item-1482"></a>

### `Min`

```rust
Min
```

A drag value that never goes below the minimum.

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
- `DeserializeOwned`
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
- `Deserialize<'de>`
