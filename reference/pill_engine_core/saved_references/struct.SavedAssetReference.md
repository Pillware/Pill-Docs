<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7489"></a>

# Struct `pill_engine_core::saved_references::SavedAssetReference`

```rust
pub struct SavedAssetReference;
```

Source: `engine\pill_engine_core\src\saved_references.rs:68`

A saved reference to one asset.

The guid identifies the asset. `path` is a hint stored beside it for a
reader whose asset database no longer knows the guid, so a file copied into
another project keeps working. `sub_asset` names one part of a file rather
than the whole of it, and is written only when it is set.

## Fields

<a id="rustdoc-item-7486"></a>

### `guid`

```rust
guid: crate::asset::AssetGuid
```

The guid of the referenced asset.

<a id="rustdoc-item-7487"></a>

### `path`

```rust
path: Option<String>
```

The asset's path when the writer knew it, as a non-authoritative hint.

<a id="rustdoc-item-7488"></a>

### `sub_asset`

```rust
sub_asset: Option<String>
```

The sub-asset key inside the file. No loader reads it.

## Associated functions and methods

<a id="rustdoc-item-7490"></a>

### `new`

```rust
pub const fn new(guid: AssetGuid) -> Self;
```

Creates a reference to the asset with `guid`, with no hint and no
sub-asset key.

<a id="rustdoc-item-2199"></a>

### `with_path`

```rust
pub fn with_path<impl Into<String>: Into<String>>(self: Self, path: impl Into<String>) -> Self;
```

Returns the same reference carrying the path hint `path`.

<a id="rustdoc-item-7491"></a>

### `with_sub_asset`

```rust
pub fn with_sub_asset<impl Into<String>: Into<String>>(self: Self, key: impl Into<String>) -> Self;
```

Returns the same reference naming the sub-asset `key` inside the file.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Serialize`
- `Deserialize<'de>`
