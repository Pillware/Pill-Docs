<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-460"></a>

# Struct `pill_editor_core::browser::AssetRoot`

```rust
pub struct AssetRoot;
```

Source: `editor\pill_editor_core\src\browser.rs:79`

One root of the Assets panel: the key that opening its row sets, and the
label the row shows.

A root sits at the panel's own level. It is not a folder inside another
root's tree: the tree draws both roots at the left edge, and a row whose
key is a root is never listed as another row's child.

## Fields

<a id="rustdoc-item-464"></a>

### `key`

```rust
key: &'static str
```

The key the root's row opens in the grid. Empty for the project's own
tree.

<a id="rustdoc-item-465"></a>

### `label`

```rust
label: &'static str
```

The label the root's row and the breadcrumb's first segment show.

<a id="rustdoc-item-466"></a>

### `read_only`

```rust
read_only: bool
```

Whether everything below the root is an extension's resource that may
be listed and inspected but never written into.

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
- `Equivalent<K>`
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
- `Eq`
