<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-94"></a>

# Trait `pill_engine_core::assets::metadata::ImportedAsset`

```rust
pub trait ImportedAsset: Asset + TraitAccessible<dyn Asset> + Sized { ... }
```

Source: `engine\pill_engine_core\src\assets\metadata.rs:204`

An asset built from a source file in `res`, with import settings that can
live in an `<asset_name>.meta` file beside it.

Implemented by the crate that owns the asset type, next to that type's own
constructors. [`AssetManager::import`](../storage/struct.AssetManager.md#rustdoc-item-605) and [`AssetManager::reimport`](../storage/struct.AssetManager.md#rustdoc-item-614) are
the only callers.

## Required and provided items

<a id="rustdoc-item-993"></a>

### `ImportSettings`

```rust
type ImportSettings: Serialize + DeserializeOwned + Default + Clone;
```

Everything the source bytes do not say for themselves.

Every field becomes an on-disk contract, so keep the list short. Mark
the struct `#[serde(default)]` so a file written before a field existed
still reads, and use `BTreeMap` rather than `HashMap` for any map: a
value stored in the world outlives the binary that built it, and an
empty `HashMap` points into that binary.

<a id="rustdoc-item-995"></a>

### `SOURCE_EXTENSIONS`

```rust
const SOURCE_EXTENSIONS: &'static [&'static str];
```

The source file extensions this type is imported from, lowercase and
without the dot (`["png", "jpg"]`).

The [`ImportRegistry`](../import_registry/struct.ImportRegistry.md#rustdoc-item-344)
maps a file to its asset type by these extensions, so the mapping comes
from the types themselves rather than from a list in the engine. Two
types may not claim one extension.

<a id="rustdoc-item-833"></a>

### `metadata_type_name`

```rust
fn metadata_type_name() -> &'static str;
```

The stable name written to a metadata file's `asset_type`, which a
file must match to be read as this type.

Defaults to [`Asset::shared_name`](../storage/trait.Asset.md#rustdoc-item-996). A type without a shared name falls
back to its stored type name, `<crate>::<Type>`
([`stable_type_name`](../../reflection/type_names/fn.stable_type_name.md#rustdoc-item-997)), which does
not change when the type moves to another module.

<a id="rustdoc-item-998"></a>

### `import`

```rust
fn import(name: &str, source_bytes: &[u8], settings: &<Self as >::ImportSettings) -> AssetLoadResult<Self>;
```

Decode `source_bytes` into an asset with the given settings.

`name` is the asset's normalized path, for the asset's own label and
for error messages.

#### Errors

Returns an [`AssetLoadError`](../storage/enum.AssetLoadError.md#rustdoc-item-634) (usually `Decode`) when the bytes cannot
be read as this asset with these settings.
