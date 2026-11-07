<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1457"></a>

# Struct `pill_engine_core::asset_import_registry::ImportFunctions`

```rust
pub(in asset_import_registry) struct ImportFunctions;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:232`

One type's erased entry points, all monomorphized in the binary that
registered it.

## Fields

<a id="rustdoc-item-1443"></a>

### `import`

```rust
import: fn (_: &mut crate::asset::AssetManager, _: &std::path::Path, _: crate::asset_metadata::MetadataPolicy) -> ErasedImportResult
```

_No documentation provided._

<a id="rustdoc-item-1444"></a>

### `reimport`

```rust
reimport: fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> ErasedImportResult
```

_No documentation provided._

<a id="rustdoc-item-1445"></a>

### `settings_json`

```rust
settings_json: fn (_: &std::path::Path) -> crate::asset::AssetLoadResult<serde_json::Value>
```

_No documentation provided._

<a id="rustdoc-item-1446"></a>

### `normalize_settings`

```rust
normalize_settings: fn (_: serde_json::Value) -> crate::asset::AssetLoadResult<serde_json::Value>
```

_No documentation provided._

<a id="rustdoc-item-1447"></a>

### `follow_move`

```rust
follow_move: fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> Result<Option<String>, crate::asset_metadata::AssetImportError>
```

_No documentation provided._

<a id="rustdoc-item-1448"></a>

### `is_loaded`

```rust
is_loaded: fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> bool
```

_No documentation provided._

<a id="rustdoc-item-1449"></a>

### `remove_loaded`

```rust
remove_loaded: fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> bool
```

_No documentation provided._

<a id="rustdoc-item-1450"></a>

### `identity`

```rust
identity: fn (_: &crate::asset::AssetManager, _: u32, _: u32) -> Option<AssetIdentity>
```

_No documentation provided._

<a id="rustdoc-item-1451"></a>

### `guid_by_path`

```rust
guid_by_path: fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> Option<crate::asset::AssetGuid>
```

_No documentation provided._

<a id="rustdoc-item-1452"></a>

### `loaded_by_guid`

```rust
loaded_by_guid: fn (_: &crate::asset::AssetManager, _: crate::asset::AssetGuid) -> Option<(String, u32, u32)>
```

_No documentation provided._

<a id="rustdoc-item-1453"></a>

### `loaded_by_name`

```rust
loaded_by_name: fn (_: &crate::asset::AssetManager, _: &str) -> Option<(u32, u32)>
```

_No documentation provided._

<a id="rustdoc-item-1454"></a>

### `loaded`

```rust
loaded: fn (_: &crate::asset::AssetManager) -> Vec<(Option<crate::asset::AssetGuid>, String)>
```

_No documentation provided._

<a id="rustdoc-item-1455"></a>

### `default_document`

```rust
default_document: Option<fn () -> crate::asset::AssetLoadResult<serde_json::Value>>
```

`Some` for a standalone type, whose file is the asset; `None` for a
sourced one.

<a id="rustdoc-item-1456"></a>

### `ensure_metadata`

```rust
ensure_metadata: Option<fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> Result<Option<crate::asset::AssetGuid>, crate::asset_metadata::AssetImportError>>
```

`Some` for a sourced type, whose metadata is a sidecar; `None` for a
standalone one, which holds its guid itself.

## Associated functions and methods

<a id="rustdoc-item-1458"></a>

### `for_type`

```rust
pub(in asset_import_registry) fn for_type<T: ImportedAsset>() -> Self;
```

The entry points for `T`, compiled into the calling binary.

<a id="rustdoc-item-1459"></a>

### `for_standalone_type`

```rust
pub(in asset_import_registry) fn for_standalone_type<T: StandaloneAsset>() -> Self;
```

The entry points for the standalone type `T`, compiled into the calling
binary. For this kind the import settings are the asset's own document.

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
- `Copy`
