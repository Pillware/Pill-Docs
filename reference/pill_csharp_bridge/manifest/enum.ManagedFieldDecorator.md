<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1414"></a>

# Enum `pill_csharp_bridge::manifest::ManagedFieldDecorator`

```rust
pub(crate) enum ManagedFieldDecorator { ... }
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\manifest.rs:335`

One presentation decorator a managed field declares.

Mirrors the editor's [`FieldDecorator`](pill_engine::component_registry::FieldDecorator)
vocabulary. The managed side writes one flat record for the whole
vocabulary, so unused payload members arrive as `null` and each variant
reads only the members its kind carries. [`validate_decorations`](fn.validate_decorations.md#rustdoc-item-1460) refuses a
payload that cannot mean what it says; nothing here affects storage.

## Variants

<a id="rustdoc-item-1442"></a>

### `HideInInspector`

```rust
HideInInspector
```

Unity's `[HideInInspector]`: the Inspector draws no row for the field.

<a id="rustdoc-item-1444"></a>

### `Header`

```rust
Header
```

A separator line with text, drawn above the field.

<a id="rustdoc-item-1446"></a>

### `Space`

```rust
Space
```

A vertical gap above the field.

<a id="rustdoc-item-1448"></a>

### `Tooltip`

```rust
Tooltip
```

Hover text on the field's label.

<a id="rustdoc-item-1451"></a>

### `Range`

```rust
Range
```

A slider over the range.

<a id="rustdoc-item-1454"></a>

### `TextArea`

```rust
TextArea
```

A multi-line text box.

<a id="rustdoc-item-1456"></a>

### `Multiline`

```rust
Multiline
```

A fixed-height multi-line text box.

<a id="rustdoc-item-1458"></a>

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
