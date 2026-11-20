<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-569"></a>

# Struct `pill_engine_core::assets::import_registry::ImportFunctions`

```rust
pub(in assets::import_registry) struct ImportFunctions;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:232`

One type's erased entry points, all monomorphized in the binary that
registered it.

## Fields

<a id="rustdoc-item-555"></a>

### `import`

```rust
import: fn (_: &mut crate::asset::AssetManager, _: &std::path::Path, _: crate::asset_metadata::MetadataPolicy) -> ErasedImportResult
```

_No documentation provided._

<a id="rustdoc-item-556"></a>

### `reimport`

```rust
reimport: fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> ErasedImportResult
```

_No documentation provided._

<a id="rustdoc-item-557"></a>

### `settings_json`

```rust
settings_json: fn (_: &std::path::Path) -> crate::asset::AssetLoadResult<serde_json::Value>
```

_No documentation provided._

<a id="rustdoc-item-558"></a>

### `normalize_settings`

```rust
normalize_settings: fn (_: serde_json::Value) -> crate::asset::AssetLoadResult<serde_json::Value>
```

_No documentation provided._

<a id="rustdoc-item-559"></a>

### `follow_move`

```rust
follow_move: fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> Result<Option<String>, crate::asset_metadata::AssetImportError>
```

_No documentation provided._

<a id="rustdoc-item-560"></a>

### `is_loaded`

```rust
is_loaded: fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> bool
```

_No documentation provided._

<a id="rustdoc-item-561"></a>

### `remove_loaded`

```rust
remove_loaded: fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> bool
```

_No documentation provided._

<a id="rustdoc-item-562"></a>

### `identity`

```rust
identity: fn (_: &crate::asset::AssetManager, _: u32, _: u32) -> Option<AssetIdentity>
```

_No documentation provided._

<a id="rustdoc-item-563"></a>

### `guid_by_path`

```rust
guid_by_path: fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> Option<crate::asset::AssetGuid>
```

_No documentation provided._

<a id="rustdoc-item-564"></a>

### `loaded_by_guid`

```rust
loaded_by_guid: fn (_: &crate::asset::AssetManager, _: crate::asset::AssetGuid) -> Option<(String, u32, u32)>
```

_No documentation provided._

<a id="rustdoc-item-565"></a>

### `loaded_by_name`

```rust
loaded_by_name: fn (_: &crate::asset::AssetManager, _: &str) -> Option<(u32, u32)>
```

_No documentation provided._

<a id="rustdoc-item-566"></a>

### `loaded`

```rust
loaded: fn (_: &crate::asset::AssetManager) -> Vec<(Option<crate::asset::AssetGuid>, String)>
```

_No documentation provided._

<a id="rustdoc-item-567"></a>

### `default_document`

```rust
default_document: Option<fn () -> crate::asset::AssetLoadResult<serde_json::Value>>
```

`Some` for a standalone type, whose file is the asset; `None` for a
sourced one.

<a id="rustdoc-item-568"></a>

### `ensure_metadata`

```rust
ensure_metadata: Option<fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> Result<Option<crate::asset::AssetGuid>, crate::asset_metadata::AssetImportError>>
```

`Some` for a sourced type, whose metadata is a sidecar; `None` for a
standalone one, which holds its guid itself.

## Associated functions and methods

<a id="rustdoc-item-570"></a>

### `for_type`

```rust
pub(in assets::import_registry) fn for_type<T: ImportedAsset>() -> Self;
```

The entry points for `T`, compiled into the calling binary.

<a id="rustdoc-item-571"></a>

### `for_standalone_type`

```rust
pub(in assets::import_registry) fn for_standalone_type<T: StandaloneAsset>() -> Self;
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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
