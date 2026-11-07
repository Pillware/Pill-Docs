<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4760"></a>

# Enum `pill_editor_core::inspector::FieldRow`

```rust
pub enum FieldRow { ... }
```

Source: `editor\pill_editor_core\src\inspector.rs:292`

One row of a component section.

## Variants

<a id="rustdoc-item-4724"></a>

### `Header`

```rust
Header
```

A separator line with the text a field's `[Header]` declared.

<a id="rustdoc-item-4726"></a>

### `Space`

```rust
Space
```

A vertical gap a field's `[Space]` declared.

<a id="rustdoc-item-4731"></a>

### `Single`

```rust
Single
```

One field with the widget its kind asks for.

<a id="rustdoc-item-4737"></a>

### `Vector`

```rust
Vector
```

A short array of scalars: one row, one widget per element, labelled
with the element's axis (`X`, `Y`, `Z`, `W`) - Unity's vector row.

<a id="rustdoc-item-4742"></a>

### `Asset`

```rust
Asset
```

A reference to an asset: the asset it names, a picker of the assets
of its type, a clear button and a drop target for the Assets tab.

<a id="rustdoc-item-4746"></a>

### `Entity`

```rust
Entity
```

A reference to another entity: the referenced
entity's Hierarchy label, a picker over the scene's entities, a
viewport pick, a clear button and a drop target for the Entities tab.

<a id="rustdoc-item-4750"></a>

### `Color`

```rust
Color
```

A colour: one swatch, and a popup that holds the picker. Its leaves are
the channels, which are either one array field's elements or one scalar
field each.

<a id="rustdoc-item-4755"></a>

### `VectorGroup`

```rust
VectorGroup
```

A vector assembled from consecutive leaves that share a dotted prefix
and carry a `#[pill(vector)]` decorator. It draws as one row of X/Y/Z
numeric fields, the way a `[f32; 3]` field already draws.

<a id="rustdoc-item-4759"></a>

### `ReadOnly`

```rust
ReadOnly
```

A field shown read-only (a long array, a list, an opaque value).

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
