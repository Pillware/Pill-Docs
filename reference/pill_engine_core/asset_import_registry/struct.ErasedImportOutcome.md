<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1315"></a>

# Struct `pill_engine_core::asset_import_registry::ErasedImportOutcome`

```rust
pub struct ErasedImportOutcome;
```

Source: `engine\pill_engine_core\src\asset_import_registry.rs:74`

What an erased import or reimport did, without the typed handle.

## Fields

<a id="rustdoc-item-1304"></a>

### `type_name`

```rust
type_name: String
```

The asset type's metadata type name.

<a id="rustdoc-item-1305"></a>

### `name`

```rust
name: String
```

The asset's name: its normalized path.

<a id="rustdoc-item-1306"></a>

### `guid`

```rust
guid: Option<crate::asset::AssetGuid>
```

The asset's guid, or `None` when it has none. That happens for a path
that was already loaded and has no metadata file.

<a id="rustdoc-item-1308"></a>

### `index`

```rust
index: u32
```

The slot index of the asset's handle. Together with [`Self::generation`](#rustdoc-item-1307)
it is the raw pair a typed caller turns back into a handle with
[`Handle::from_raw`](../asset/struct.Handle.md#rustdoc-item-872).

<a id="rustdoc-item-1307"></a>

### `generation`

```rust
generation: u32
```

The generation of the asset's handle.

<a id="rustdoc-item-1309"></a>

### `metadata`

```rust
metadata: crate::asset_metadata::MetadataSource
```

Where the guid and settings came from.

<a id="rustdoc-item-1311"></a>

### `change`

```rust
change: ImportChange
```

What the call did with a value that was already there. A consumer that
asks "did this change?" needs this, and a plain bool could not tell
loading an existing value apart from replacing it.

<a id="rustdoc-item-1313"></a>

### `content_version`

```rust
content_version: Option<u64>
```

The asset's content version after the call.

<a id="rustdoc-item-1314"></a>

### `previous_content_version`

```rust
previous_content_version: Option<u64>
```

The asset's content version before the call, when it was loaded. A
reimport moves the version; an import of a path that was already loaded
leaves it as it was.

## Associated functions and methods

<a id="rustdoc-item-1316"></a>

### `previously_loaded`

```rust
pub fn previously_loaded(self: &Self) -> bool;
```

Whether the call found a value already there - either because the path
was already loaded, or because it replaced one.

<a id="rustdoc-item-1317"></a>

### `from_import`

```rust
pub(in asset_import_registry) fn from_import<T>(assets: &AssetManager, type_name: &str, handle: Handle<T>, guid: Option<AssetGuid>, metadata: MetadataSource, already_loaded: bool) -> Self where T: Asset + TraitAccessible<dyn Asset>;
```

The outcome of a call that imported a path, or found it loaded.

The previous content version follows from the change: a path that was
already loaded keeps the version it had, and a fresh import had none.

<a id="rustdoc-item-1319"></a>

### `from_reimport`

```rust
pub(in asset_import_registry) fn from_reimport<T>(assets: &AssetManager, type_name: &str, handle: Handle<T>, guid: Option<AssetGuid>, metadata: MetadataSource, previous_content_version: Option<u64>) -> Self where T: Asset + TraitAccessible<dyn Asset>;
```

The outcome of a call that replaced a loaded value.

`previous_content_version` is read before the call, because the reimport
is what moves it.

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
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
