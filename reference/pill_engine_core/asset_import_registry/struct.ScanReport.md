<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1741"></a>

# Struct `pill_engine_core::asset_import_registry::ScanReport`

```rust
pub struct ScanReport;
```

Source: `engine\pill_engine_core\src\asset_import_registry.rs:1241`

What [`ImportRegistry::scan`](struct.ImportRegistry.md#rustdoc-item-1740) did, file by file.

## Fields

<a id="rustdoc-item-1773"></a>

### `imported`

```rust
imported: Vec<String>
```

Assets decoded by this scan, by name.

<a id="rustdoc-item-1774"></a>

### `already_loaded`

```rust
already_loaded: Vec<String>
```

Assets that were already loaded; nothing was decoded for them.

<a id="rustdoc-item-1775"></a>

### `metadata_created`

```rust
metadata_created: Vec<String>
```

The subset of [`Self::imported`](#rustdoc-item-1773) whose metadata file this scan wrote.

<a id="rustdoc-item-1776"></a>

### `failed`

```rust
failed: Vec<(String, String)>
```

Sources that failed, by name, with the error.

<a id="rustdoc-item-1777"></a>

### `unknown_extensions`

```rust
unknown_extensions: Vec<String>
```

Extensions no registered type imports, each listed once, sorted; an
empty string stands for files with no extension.

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
- `Debug`
- `Default`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
