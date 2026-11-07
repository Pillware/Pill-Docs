<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3294"></a>

# Struct `pill_editor_core::editor_state::AssetDetail`

```rust
pub struct AssetDetail;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:456`

The selected asset's detail for the Inspector: its row data
and the import settings document the editable rows build on.

## Fields

<a id="rustdoc-item-3288"></a>

### `row`

```rust
row: AssetListing
```

The listing row the detail was captured from. Its
[`AssetListing::key`](struct.AssetListing.md#rustdoc-item-3172) is the selection identity the Inspector matches
on, so the detail carries the row itself rather than copies of its
fields.

<a id="rustdoc-item-3289"></a>

### `settings`

```rust
settings: Option<serde_json::Value>
```

The import settings document: a standalone asset's body, or the
sidecar's `settings`. It is `None` for folders and unknown extensions.

<a id="rustdoc-item-3290"></a>

### `references`

```rust
references: Vec<AssetReferenceField>
```

The reference fields the asset's type declares, expanded: one entry per
picker the Inspector draws, whether or not the document binds it yet.

<a id="rustdoc-item-3292"></a>

### `decorators`

```rust
decorators: Vec<AssetFieldDecorator>
```

How the asset's document fields draw, as the type declared them: a range
draws as a slider, a tooltip as the label's hover text. Empty for a
type that declares none.

## Associated functions and methods

<a id="rustdoc-item-3295"></a>

### `key`

```rust
pub fn key(self: &Self) -> String;
```

Returns the asset as the tree, the grid and the selection name it: the
row's own key, so a detail and the row it came from cannot disagree.

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
