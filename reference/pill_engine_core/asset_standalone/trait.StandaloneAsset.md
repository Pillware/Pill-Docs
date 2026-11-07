<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1130"></a>

# Trait `pill_engine_core::asset_standalone::StandaloneAsset`

```rust
pub trait StandaloneAsset: Asset + TraitAccessible<dyn Asset> + Sized { ... }
```

Source: `engine\pill_engine_core\src\asset_standalone.rs:79`

An asset stored as its own JSON file in `res`, with no source file.

Implemented by the crate that owns the type, and registered with
[`World::register_standalone_asset`](../world/struct.World.md#rustdoc-item-2208)
so it can be loaded by extension.

## Required and provided items

<a id="rustdoc-item-2205"></a>

### `Document`

```rust
type Document: Serialize + DeserializeOwned + Default;
```

The asset's shape as written to its file. A newly created file holds
`Default`, so the default must build a valid asset on its own. Mark the
type `#[serde(default)]` so a file written before a field existed still
reads, and use `BTreeMap`, never `HashMap`, for maps (see
`ImportedAsset::ImportSettings`).

<a id="rustdoc-item-2206"></a>

### `FILE_EXTENSION`

```rust
const FILE_EXTENSION: &'static str;
```

The file extension the type is stored under, lowercase and without the
dot (`"material"`).

<a id="rustdoc-item-1710"></a>

### `metadata_type_name`

```rust
fn metadata_type_name() -> &'static str;
```

The stable name written to the file's `asset_type`. Defaults to
[`Asset::shared_name`](../asset/trait.Asset.md#rustdoc-item-712); a type without one should override it with a
pinned literal.

<a id="rustdoc-item-2207"></a>

### `from_document`

```rust
fn from_document(name: &str, document: <Self as >::Document, assets: &AssetManager) -> AssetLoadResult<Self>;
```

Build the asset named `name` from its document, resolving its
references against `assets`.

#### Errors

Returns an [`AssetLoadError`](../asset/enum.AssetLoadError.md#rustdoc-item-789) when the document cannot make a valid
asset.
