<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1247"></a>

# Struct `pill_engine_core::asset_import_registry::ImportRegistry`

```rust
pub struct ImportRegistry;
```

Source: `engine\pill_engine_core\src\asset_import_registry.rs:604`

The imported asset types of a world, by metadata type name and source
extension.

Filled by [`World::register_imported_asset`](../world/struct.World.md#rustdoc-item-1702)
when a module or project registers its types. The module docs explain why an
entry cannot outlive the binary it points into, nor that binary's claim on
it.

Cloning is cheap: the type holds a few entries of weak references and
function pointers. Host code clones it to call it against the world's
[`AssetManager`](../asset/struct.AssetManager.md#rustdoc-item-714), which is another resource of the
same world. A clone keeps the same rule: it skips a registration that is
retired after the clone was taken.

## Fields

<a id="rustdoc-item-1699"></a>

### `entries`

```rust
entries: Vec<ImportedTypeEntry>
```

One entry per imported asset type, in the order the type was first
registered.

<a id="rustdoc-item-1700"></a>

### `references`

```rust
references: std::collections::BTreeMap<String, Vec<(String, String)>>
```

The reference fields each type declares, by owner type name. Each pair
is the field key a settings document uses and the type name it points
at. A key that ends in `.*` covers a whole family: `textures.*` is every
texture slot the asset's shader declares.

<a id="rustdoc-item-1701"></a>

### `decorators`

```rust
decorators: std::collections::BTreeMap<String, Vec<(String, FieldDecorator)>>
```

The field decorators each type declares, by owner type name. Each pair
is the document key an edit writes and how its row draws.

## Associated functions and methods

<a id="rustdoc-item-1555"></a>

### `register`

```rust
pub fn register<T: ImportedAsset>(self: &mut Self, alive: Weak<()>) -> Result<(), ImportRegistrationError>;
```

Record `T`'s entry points. They stay callable for as long as `alive`
has a strong reference.

Registering a type again (a reload, or a second binary) adds a newer
registration that takes precedence. The older one is dropped by the next
prune once it is no longer alive.

#### Errors

[`ImportRegistrationError::ExtensionClaimedTwice`](enum.ImportRegistrationError.md#rustdoc-item-1554) when another live
type already imports one of `T`'s extensions. Nothing is recorded then.

<a id="rustdoc-item-1703"></a>

### `register_standalone`

```rust
pub fn register_standalone<T: StandaloneAsset>(self: &mut Self, alive: Weak<()>) -> Result<(), ImportRegistrationError>;
```

Record the standalone type `T` under its file extension; otherwise as
[`Self::register`](#rustdoc-item-1555).

#### Errors

As [`Self::register`](#rustdoc-item-1555).

<a id="rustdoc-item-1704"></a>

### `record`

```rust
pub(in asset_import_registry) fn record(self: &mut Self, type_name: &str, extensions: &[&str], functions: ImportFunctions, alive: Weak<()>) -> Result<(), ImportRegistrationError>;
```

The registration both kinds share: the extension check, then the entry.

<a id="rustdoc-item-1705"></a>

### `prune`

```rust
pub fn prune(self: &mut Self);
```

Drop every registration whose generation is gone, and every entry left
with none.

<a id="rustdoc-item-1707"></a>

### `declare_field_decorators`

```rust
pub fn declare_field_decorators(self: &mut Self, owner_type: &str, decorators: &[(&str, FieldDecorator)]);
```

Record how `owner_type`'s document fields draw, as `(document key,
decorator)` pairs.

This is how a settings asset states that a value is a range or carries
a tooltip, without the Inspector knowing the type: the manager's crate
declares it where the document is defined, and the editor reads it back
through [`Self::field_decorators`](#rustdoc-item-1706).

<a id="rustdoc-item-1706"></a>

### `field_decorators`

```rust
pub fn field_decorators(self: &Self, owner_type: &str) -> &[(String, FieldDecorator)];
```

The decorators `owner_type` declares, as `(document key, decorator)`
pairs in declaration order.

<a id="rustdoc-item-1708"></a>

### `field_decorator`

```rust
pub fn field_decorator(self: &Self, owner_type: &str, field: &str) -> Option<&FieldDecorator>;
```

The decorator declared for one field of `owner_type`, if any.

<a id="rustdoc-item-1711"></a>

### `declare_references`

```rust
pub fn declare_references(self: &mut Self, owner_type: &str, references: &[(&str, &str)]);
```

Record the reference fields `owner_type` declares, as `(field key,
target type name)` pairs.

The target is the Rust type the field holds, named by
[`ImportedAsset::metadata_type_name`](../asset_metadata/trait.ImportedAsset.md#rustdoc-item-1709) or
[`StandaloneAsset::metadata_type_name`](../asset_standalone/trait.StandaloneAsset.md#rustdoc-item-1710). Because the name comes from the
code, a renamed type changes here with it instead of drifting away.
Declaring again replaces the owner's whole list, which is what a reload
does.

<a id="rustdoc-item-1712"></a>

### `reference_fields`

```rust
pub fn reference_fields(self: &Self, owner_type: &str) -> &[(String, String)];
```

The reference fields `owner_type` declares, as `(field key, target type
name)` pairs in declaration order. A key that ends in `.*` names a
family; a caller turns it into the concrete keys its own document uses.

<a id="rustdoc-item-1713"></a>

### `reference_target`

```rust
pub fn reference_target(self: &Self, owner_type: &str, field: &str) -> Option<&str>;
```

The type name the reference field `field` of `owner_type` points at.

An exact declaration wins; otherwise a family declaration (`textures.*`)
covers every key below its prefix.

<a id="rustdoc-item-1714"></a>

### `type_for_extension`

```rust
pub fn type_for_extension(self: &Self, extension: &str) -> Option<&str>;
```

The type that imports `extension` (without the dot, any case), if a
live registration claims it.

<a id="rustdoc-item-1715"></a>

### `registered_types`

```rust
pub fn registered_types(self: &Self) -> Vec<(String, Vec<String>)>;
```

The live types and the extensions each imports, sorted by type name.

<a id="rustdoc-item-1716"></a>

### `standalone_types`

```rust
pub fn standalone_types(self: &Self) -> Vec<(String, String)>;
```

The live standalone types - those whose file is the asset - with the
one extension each is stored under, sorted by type name.

<a id="rustdoc-item-1717"></a>

### `is_standalone_extension`

```rust
pub fn is_standalone_extension(self: &Self, extension: &str) -> bool;
```

Whether files with `extension` are standalone assets of a live type.

<a id="rustdoc-item-1718"></a>

### `default_document`

```rust
pub fn default_document(self: &Self, type_name: &str) -> Result<serde_json::Value, ErasedImportError>;
```

The document a new file of the standalone type `type_name` starts
from, as JSON.

#### Errors

[`ErasedImportError::UnknownType`](enum.ErasedImportError.md#rustdoc-item-1508) when no live standalone type has
that name.

<a id="rustdoc-item-1719"></a>

### `is_metadata_file`

```rust
pub fn is_metadata_file(path: &Path) -> bool;
```

Whether `path` is a metadata file rather than a source.

<a id="rustdoc-item-1720"></a>

### `functions_for_path`

```rust
pub(in asset_import_registry) fn functions_for_path(self: &Self, path: &Path) -> Result<ImportFunctions, ErasedImportError>;
```

The entry points for the type that imports `path`'s extension.

<a id="rustdoc-item-1721"></a>

### `functions_for_type`

```rust
pub(in asset_import_registry) fn functions_for_type(self: &Self, type_name: &str) -> Result<ImportFunctions, ErasedImportError>;
```

The entry points registered under `type_name`.

<a id="rustdoc-item-1722"></a>

### `import`

```rust
pub fn import(self: &Self, assets: &mut AssetManager, path: &Path, policy: MetadataPolicy) -> Result<ErasedImportOutcome, ErasedImportError>;
```

Import `path` as the type its extension maps to, with that type's
default initial settings; see [`AssetManager::import`](../asset/struct.AssetManager.md#rustdoc-item-1114).

#### Errors

[`ErasedImportError::UnknownExtension`](enum.ErasedImportError.md#rustdoc-item-1502), [`ErasedImportError::NoExtension`](enum.ErasedImportError.md#rustdoc-item-1504)
or [`ErasedImportError::MetadataFile`](enum.ErasedImportError.md#rustdoc-item-1506) when no type can be chosen, and
[`ErasedImportError::Import`](enum.ErasedImportError.md#rustdoc-item-1516) when the import fails.

<a id="rustdoc-item-1723"></a>

### `asset_identity`

```rust
pub fn asset_identity(self: &Self, assets: &AssetManager, type_name: &str, index: u32, generation: u32) -> Option<AssetIdentity>;
```

What the handle `index`/`generation` of the asset type `type_name`
addresses - its guid and name - for a tool that holds only a field
value; `None` when the type is not registered or the handle is stale.

<a id="rustdoc-item-1724"></a>

### `guid_by_path`

```rust
pub fn guid_by_path(self: &Self, assets: &AssetManager, path: &Path) -> Option<AssetGuid>;
```

The guid the store holds the asset at `path` under, when a live type of
this registry imports its extension and it is loaded.

A caller replacing a file asks this before writing: the identity the
store already has is the one every reference names, and a file that
disagrees with it cannot be imported at the same path.

<a id="rustdoc-item-1725"></a>

### `loaded_by_guid`

```rust
pub fn loaded_by_guid(self: &Self, assets: &AssetManager, guid: AssetGuid) -> Option<(String, String, u32, u32)>;
```

The name the store holds the asset with `guid` under, with the type
that owns it and the handle's raw parts; `None` when no live type has
it loaded.

An asset built in code - a chain's built-in pass, for instance - has no
file for a panel to read, so this is what turns the guid a document
stored back into a name to show and a handle to record.

<a id="rustdoc-item-1726"></a>

### `loaded_by_name`

```rust
pub fn loaded_by_name(self: &Self, assets: &AssetManager, name: &str) -> Option<(String, u32, u32)>;
```

The type the store holds an asset named `name` as, with the handle's raw
parts; `None` when no live type has it loaded.

An asset built in code - a chain's built-in pass - has no file for a
tool to name and may have no guid, so its name in the store is the one
identity it always has.

<a id="rustdoc-item-1727"></a>

### `loaded_assets`

```rust
pub fn loaded_assets(self: &Self, assets: &AssetManager) -> Vec<(String, Option<AssetGuid>, String)>;
```

Every live asset every type of this registry holds, as
`(type_name, guid, name)`.

A directory walk sees files: a chain's built-in passes are built in
code and appear in none, so this is the only place a picker learns they
exist.

<a id="rustdoc-item-1728"></a>

### `load_by_path`

```rust
pub fn load_by_path(self: &Self, assets: &mut AssetManager, path: &Path, policy: MetadataPolicy) -> Result<ErasedImportOutcome, ErasedImportError>;
```

Load the asset at `path`, whether or not it is loaded yet: the same
call as [`Self::import`](#rustdoc-item-1722), named for callers that resolve a reference.

#### Errors

As [`Self::import`](#rustdoc-item-1722).

<a id="rustdoc-item-1303"></a>

### `load_by_guid`

```rust
pub fn load_by_guid(self: &Self, assets: &mut AssetManager, database: &AssetDatabase, guid: AssetGuid, policy: MetadataPolicy) -> Result<ErasedImportOutcome, ErasedImportError>;
```

Load the asset with `guid`, whether or not it is loaded yet: the guid's
path comes from `database`, then the asset imports as [`Self::import`](#rustdoc-item-1722)
would.

#### Errors

[`ErasedImportError::UnknownGuid`](enum.ErasedImportError.md#rustdoc-item-1510) when `database` has no asset with
the guid; otherwise as [`Self::import`](#rustdoc-item-1722).

<a id="rustdoc-item-1729"></a>

### `load_handle_by_guid`

```rust
pub fn load_handle_by_guid<T>(self: &Self, assets: &mut AssetManager, database: &AssetDatabase, guid: AssetGuid, policy: MetadataPolicy) -> Result<Handle<T>, ErasedImportError> where T: Asset + TraitAccessible<dyn Asset>;
```

[`Self::load_by_guid`](#rustdoc-item-1303) for a caller that knows the asset's type, which
gets the typed handle back.

#### Errors

[`ErasedImportError::WrongType`](enum.ErasedImportError.md#rustdoc-item-1514) when the guid names an asset of
another type; otherwise as [`Self::load_by_guid`](#rustdoc-item-1303).

<a id="rustdoc-item-1730"></a>

### `load_handle_by_path`

```rust
pub fn load_handle_by_path<T>(self: &Self, assets: &mut AssetManager, path: &Path, policy: MetadataPolicy) -> Result<Handle<T>, ErasedImportError> where T: Asset + TraitAccessible<dyn Asset>;
```

[`Self::load_by_path`](#rustdoc-item-1728) for a caller that knows the asset's type, which
gets the typed handle back.

The game-code shape of loading an asset by name, recorded with its
guid the way any import is: `world.load_asset::<Mesh>("models/x.obj")`
wraps it.

#### Errors

[`ErasedImportError::WrongType`](enum.ErasedImportError.md#rustdoc-item-1514) when the extension names an asset of
another type; otherwise as [`Self::load_by_path`](#rustdoc-item-1728).

<a id="rustdoc-item-1731"></a>

### `reimport`

```rust
pub fn reimport(self: &Self, assets: &mut AssetManager, path: &Path) -> Result<ErasedImportOutcome, ErasedImportError>;
```

Decode `path` again in place as the type its extension maps to; see
[`AssetManager::reimport`](../asset/struct.AssetManager.md#rustdoc-item-1120).

#### Errors

As [`Self::import`](#rustdoc-item-1722).

<a id="rustdoc-item-1732"></a>

### `ensure_metadata`

```rust
pub fn ensure_metadata(self: &Self, assets: &AssetManager, path: &Path) -> Result<Option<AssetGuid>, ErasedImportError>;
```

Write the metadata file of the source at `path` when it has none; see
[`AssetManager::ensure_metadata`](../asset/struct.AssetManager.md#rustdoc-item-1124). Returns the guid written, or `None`
when nothing was written - the file exists, or `path` is a standalone
asset, which has no sidecar.

#### Errors

As [`Self::import`](#rustdoc-item-1722).

<a id="rustdoc-item-1733"></a>

### `ensure_all_metadata`

```rust
pub fn ensure_all_metadata(self: &Self, assets: &AssetManager, root: &Path) -> (Vec<String>, Vec<(String, String)>);
```

Give every source under `root` that a registered sourced type imports
a metadata file, where it has none. Nothing is decoded or loaded.
Returns the files written (as their sources' paths) and the failures.

<a id="rustdoc-item-1734"></a>

### `is_loaded`

```rust
pub fn is_loaded(self: &Self, assets: &AssetManager, path: &Path) -> bool;
```

Whether an asset of the type `path`'s extension maps to is loaded under
`path`'s name. `false` for a path no registered type imports.

<a id="rustdoc-item-1735"></a>

### `remove_loaded`

```rust
pub fn remove_loaded(self: &Self, assets: &mut AssetManager, path: &Path) -> bool;
```

Drop the asset loaded under `path`'s name, if there is one. A delete
calls this once the file is gone, so a new file at the same path does
not collide with the old asset's guid. Returns `false` when no asset was
loaded.

<a id="rustdoc-item-1736"></a>

### `follow_move`

```rust
pub fn follow_move(self: &Self, assets: &mut AssetManager, path: &Path) -> Result<Option<String>, ErasedImportError>;
```

When `path` is a loaded asset moved here with its metadata file, rename
it to `path` and return its old name; see
[`AssetManager::follow_move`](../asset/struct.AssetManager.md#rustdoc-item-1126).

#### Errors

As [`Self::import`](#rustdoc-item-1722).

<a id="rustdoc-item-1737"></a>

### `settings_json`

```rust
pub fn settings_json(self: &Self, path: &Path) -> Result<serde_json::Value, ErasedImportError>;
```

The import settings `path` would use, as JSON: its metadata file's, or
its type's defaults.

#### Errors

When no type is chosen for the path, or its metadata file exists but
does not read as that type's.

<a id="rustdoc-item-1738"></a>

### `normalize_settings_json`

```rust
pub fn normalize_settings_json(self: &Self, type_name: &str, settings: serde_json::Value) -> Result<serde_json::Value, ErasedImportError>;
```

`settings` read as `type_name`'s import settings and written back:
missing fields defaulted, unknown ones dropped.

#### Errors

When the type is not registered, or the settings do not fit it.

<a id="rustdoc-item-1740"></a>

### `scan`

```rust
pub fn scan(self: &Self, assets: &mut AssetManager, root: &Path, policy: MetadataPolicy) -> ScanReport;
```

Import every source file under `root` whose extension a registered
type imports.

`root` is the directory asset paths are relative to - a project's `res` -
and each file is imported by its path relative to it, exactly as loading
code names it. Metadata files are skipped (they are read with their
source), as are dot-files such as the temporary files a metadata write
leaves behind briefly. A file of an unknown extension is not an error:
the extension is reported once in the result, however many files carry
it.

A second scan of the same directory decodes and writes nothing: every
path is already loaded, and every file it would write exists.

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
- `Default`
- `Clone`
- `Resource`
