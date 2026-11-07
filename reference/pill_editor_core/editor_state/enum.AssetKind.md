<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3122"></a>

# Enum `pill_editor_core::editor_state::AssetKind`

```rust
pub enum AssetKind { ... }
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:330`

What a listing row is: a folder, or the type the host's listing reported
for the file.

The kind is parsed once, where the snapshot is built, and every branch that
cares asks this type. A misspelt label therefore cannot quietly reclassify
a row, which would let Rename and Delete queue a move against a directory.

## Variants

<a id="rustdoc-item-3119"></a>

### `Folder`

```rust
Folder
```

A directory: the tree expands it, the grid opens it, and no toolbar
action writes to it.

<a id="rustdoc-item-3121"></a>

### `Type`

```rust
Type
```

A file's type, as the host reported it: `Texture`, `file`, or a
registered path like `pill_master_renderer::assets::Material`.

## Associated functions and methods

<a id="rustdoc-item-3123"></a>

### `parse`

```rust
pub fn parse(label: &str) -> Self;
```

Parses a listing label into the kind it names.

[`FOLDER_KIND`](constant.FOLDER_KIND.md#rustdoc-item-2662) is the folder; any other label spells a type path.

<a id="rustdoc-item-3124"></a>

### `is_folder`

```rust
pub fn is_folder(self: &Self) -> bool;
```

Returns whether the row is a directory.

<a id="rustdoc-item-3125"></a>

### `text`

```rust
pub fn text(self: &Self) -> &str;
```

Returns the label a dump, a scripted channel or a panel row prints:
[`FOLDER_KIND`](constant.FOLDER_KIND.md#rustdoc-item-2662) or the type path.

<a id="rustdoc-item-3126"></a>

### `type_leaf`

```rust
pub fn type_leaf(self: &Self) -> Option<&str>;
```

Returns the type name's last `::` segment, which is what a preview and
a picker compare. It is `None` for a folder, which has no type.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
