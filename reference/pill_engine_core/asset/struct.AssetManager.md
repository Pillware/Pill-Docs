<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-714"></a>

# Struct `pill_engine_core::asset::AssetManager`

```rust
pub struct AssetManager;
```

Source: `engine\pill_engine_core\src\asset.rs:641`

Stores many assets per type, each addressed by a [`Handle`](struct.Handle.md#rustdoc-item-869).

Inserted into a world like any other resource, and reached through
`Res<AssetManager>` / `ResMut<AssetManager>`:

```
use pill_engine::asset::{Asset, AssetManager};
use trait_type_map::impl_trait_accessible;

#[derive(Debug, PartialEq)]
struct Mesh(&'static str);
impl Asset for Mesh {}
impl_trait_accessible!(dyn Asset; Mesh);

let mut assets = AssetManager::new();
let rock = assets.add(Mesh("rock"));
let tree = assets.add_named("tree", Mesh("tree")).expect("a fresh name");

assert_eq!(assets.get(rock), Some(&Mesh("rock")));
assert_eq!(assets.handle_by_name::<Mesh>("tree"), Some(tree));
```

## Fields

<a id="rustdoc-item-1063"></a>

### `columns`

```rust
columns: trait_type_map::TraitTypeMap<dyn Asset, trait_type_map::ErasedVecFamily>
```

One erased column per asset type, holding the values themselves.

<a id="rustdoc-item-1065"></a>

### `metadata`

```rust
metadata: std::collections::HashMap<std::any::TypeId, AssetColumn>
```

Slot bookkeeping for each column, keyed by the same storage key.

A storage key is a type's own `TypeId`, except for a shared asset type
(see [`Asset::shared_name`](trait.Asset.md#rustdoc-item-712)), whose key is the `TypeId` of the first
binary that registered it; see [`Self::shared_keys`](#rustdoc-item-1064).

<a id="rustdoc-item-1064"></a>

### `shared_keys`

```rust
shared_keys: std::collections::HashMap<u128, std::any::TypeId>
```

The storage key of each shared asset type, by its shared identity.

Written by the first registration and never replaced, so every binary's
copy of the type reaches the same column. A `TypeId` is only a value
here: it stays a valid key after the binary it came from is unloaded.

<a id="rustdoc-item-1067"></a>

### `ops_refreshers`

```rust
ops_refreshers: std::collections::HashMap<std::any::TypeId, fn (_: &mut trait_type_map::TraitTypeMap<dyn Asset, trait_type_map::ErasedVecFamily>, _: std::any::TypeId)>
```

The function that rebuilds each registered type's table, as recorded by
the last registration of that type; see [`Self::rehome`](#rustdoc-item-1066).

<a id="rustdoc-item-1068"></a>

### `registered_names`

```rust
registered_names: std::collections::HashMap<String, String>
```

The name each asset type is registered under, looked up by its Rust type
path.

The name is the type's shared name, or its Rust type name when it has
none. A caller that knows only the path - the C# mirror, which carries
`std::any::type_name` - uses this to find the name that asset references
use. The strings are owned copies.

<a id="rustdoc-item-1069"></a>

### `revision`

```rust
revision: u64
```

The change counter that renderer upload caches compare against.

## Associated functions and methods

<a id="rustdoc-item-1070"></a>

### `registered_asset_type`

```rust
pub fn registered_asset_type(self: &Self, type_path: &str) -> Option<&str>;
```

Returns the registered name of the asset type whose Rust type path is
`type_path` (`std::any::type_name`), if a type with that path registered.
This is the name a `Handle<T>` field's asset type is recorded as.

<a id="rustdoc-item-1071"></a>

### `key_of`

```rust
pub(in asset) fn key_of<T: Asset>(self: &Self) -> Option<TypeId>;
```

Returns the storage key that `T`'s column is kept under, or `None` when
`T` is a shared type that no binary has registered yet.

<a id="rustdoc-item-1072"></a>

### `metadata_of`

```rust
pub(in asset) fn metadata_of<T: Asset>(self: &Self) -> Option<&AssetColumn>;
```

`T`'s column bookkeeping, or `None` when `T` has no column.

<a id="rustdoc-item-1073"></a>

### `metadata_of_mut`

```rust
pub(in asset) fn metadata_of_mut<T: Asset>(self: &mut Self) -> Option<&mut AssetColumn>;
```

`T`'s column bookkeeping, mutably, or `None` when `T` has no column.

<a id="rustdoc-item-1074"></a>

### `column`

```rust
pub(in asset) fn column<T: Asset>(self: &Self) -> &ErasedVecStorage<dyn Asset>;
```

`T`'s column.

#### Panics

Panics when `T` has no column: every caller checks first.

<a id="rustdoc-item-1076"></a>

### `column_mut`

```rust
pub(in asset) fn column_mut<T: Asset>(self: &mut Self) -> &mut ErasedVecStorage<dyn Asset>;
```

`T`'s column, mutably.

#### Panics

Panics when `T` has no column: every caller checks first.

<a id="rustdoc-item-1078"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty manager with no asset types.

Types register themselves on first use, so nothing has to be declared in
advance: a project that loads no meshes carries no mesh column. Declaring
a type with [`Self::register`](#rustdoc-item-1077) is for types owned by a part of the code
that reloads; see that method for why it matters there.

<a id="rustdoc-item-1079"></a>

### `revision`

```rust
pub fn revision(self: &Self) -> u64;
```

The change counter that renderer upload caches compare against.

It moves on every operation that may change stored asset data: adding an
asset, borrowing one mutably, and removing one.

<a id="rustdoc-item-1080"></a>

### `content_version`

```rust
pub fn content_version<T>(self: &Self, handle: Handle<T>) -> Option<u64> where T: Asset + TraitAccessible<dyn Asset>;
```

Returns the content version of the slot that `handle` names, or `None`
when the handle is stale.

The version adds one whenever the value is borrowed mutably, so a
consumer that mirrors assets can rebuild the one asset that changed
instead of all of them. A version is only meaningful through one handle:
a refilled slot keeps the counter its previous occupant left, so versions
from two different handles cannot be compared.

<a id="rustdoc-item-1083"></a>

### `add`

```rust
pub fn add<T>(self: &mut Self, asset: T) -> Handle<T> where T: Asset + TraitAccessible<dyn Asset>;
```

Stores `asset` and returns a handle to it.

The type is registered first. That is also when its column, its metadata
and its function table are created or refreshed, and when the layout of a
shared column is checked. A slot freed by [`Self::remove`](#rustdoc-item-1082) is reused when
one is free, so a project that loads and unloads repeatedly does not grow
the column without bound.

<a id="rustdoc-item-1084"></a>

### `add_named`

```rust
pub fn add_named<T, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, asset: T) -> AssetBindingResult<Handle<T>> where T: Asset + TraitAccessible<dyn Asset>;
```

Stores `asset` under `name` and returns a handle to it.

The name is a lookup key for code that finds assets by string, such as a
scene file naming a mesh. A name that already addresses a live asset is
refused rather than rebound, so loading the same key twice is reported
instead of quietly adding a copy that nothing looks up. Remove the first
asset with [`Self::remove`](#rustdoc-item-1082) when a replacement is intended.

#### Errors

Returns [`AssetBindingError::NameInUse`](enum.AssetBindingError.md#rustdoc-item-831) when `name` already addresses a
live asset. Nothing is stored and no handle is issued.

<a id="rustdoc-item-1085"></a>

### `rename`

```rust
pub fn rename<T, impl Into<String>: Into<String>>(self: &mut Self, handle: Handle<T>, new_name: impl Into<String>) -> AssetBindingResult<()> where T: Asset + TraitAccessible<dyn Asset>;
```

Renames the live asset `handle`, keeping its handle, guid and value.

This is what following a moved source file needs: everything that holds
the handle or the guid keeps working, and only lookups by the old name
stop resolving. Renaming an asset to the name it already has does
nothing.

#### Errors

Returns [`AssetBindingError::NameInUse`](enum.AssetBindingError.md#rustdoc-item-831) when another live asset has
`new_name`, and [`AssetBindingError::StaleHandle`](enum.AssetBindingError.md#rustdoc-item-832) when `handle` is
stale. Nothing changes on an error.

<a id="rustdoc-item-1086"></a>

### `add_with_guid`

```rust
pub fn add_with_guid<T>(self: &mut Self, guid: AssetGuid, asset: T) -> Handle<T> where T: Asset + TraitAccessible<dyn Asset>;
```

Stores `asset` under `guid` and returns a handle to it.

Unlike [`Self::add_named`](#rustdoc-item-1084), a guid that is already in use is rebound: it
points at the new asset and leaves the old one reachable by its handle.
Nothing is unloaded.

<a id="rustdoc-item-1087"></a>

### `add_named_with_guid`

```rust
pub fn add_named_with_guid<T, impl Into<String>: Into<String>>(self: &mut Self, name: impl Into<String>, guid: AssetGuid, asset: T) -> AssetBindingResult<Handle<T>> where T: Asset + TraitAccessible<dyn Asset>;
```

Stores `asset` under both a name and a guid.

This is the usual shape for a cooked asset: the name is what a scene file
writes, and the guid is what survives the name changing.

#### Errors

Returns [`AssetBindingError::NameInUse`](enum.AssetBindingError.md#rustdoc-item-831) on the same terms as
[`Self::add_named`](#rustdoc-item-1084).

<a id="rustdoc-item-1088"></a>

### `bind_guid`

```rust
pub(in asset) fn bind_guid<T>(self: &mut Self, guid: AssetGuid, slot_index: u32) where T: Asset + TraitAccessible<dyn Asset>;
```

Points `guid` at the asset that already lives in `slot_index`.

Both guid-assigning entry points call this.

<a id="rustdoc-item-1089"></a>

### `get`

```rust
pub fn get<T>(self: &Self, handle: Handle<T>) -> Option<&T> where T: Asset + TraitAccessible<dyn Asset>;
```

Borrows the asset that `handle` refers to, or returns `None` when the
handle is stale.

<a id="rustdoc-item-1090"></a>

### `get_mut`

```rust
pub fn get_mut<T>(self: &mut Self, handle: Handle<T>) -> Option<&mut T> where T: Asset + TraitAccessible<dyn Asset>;
```

Mutably borrows the asset that `handle` refers to, or returns `None` when
the handle is stale.

<a id="rustdoc-item-1091"></a>

### `handle_by_name`

```rust
pub fn handle_by_name<T>(self: &Self, name: &str) -> Option<Handle<T>> where T: Asset + TraitAccessible<dyn Asset>;
```

Returns a live handle for `name`, or `None` when nothing holds it.

<a id="rustdoc-item-1092"></a>

### `get_by_name`

```rust
pub fn get_by_name<T>(self: &Self, name: &str) -> Option<&T> where T: Asset + TraitAccessible<dyn Asset>;
```

Borrows the asset stored under `name`, or returns `None` when nothing
holds it.

<a id="rustdoc-item-1093"></a>

### `handle_by_guid`

```rust
pub fn handle_by_guid<T>(self: &Self, guid: AssetGuid) -> Option<Handle<T>> where T: Asset + TraitAccessible<dyn Asset>;
```

Returns a live handle for `guid`, or `None` when nothing holds it.

<a id="rustdoc-item-1094"></a>

### `get_by_guid`

```rust
pub fn get_by_guid<T>(self: &Self, guid: AssetGuid) -> Option<&T> where T: Asset + TraitAccessible<dyn Asset>;
```

Borrows the asset stored under `guid`, or returns `None` when nothing
holds it.

<a id="rustdoc-item-1095"></a>

### `get_by_name_mut`

```rust
pub fn get_by_name_mut<T>(self: &mut Self, name: &str) -> Option<&mut T> where T: Asset + TraitAccessible<dyn Asset>;
```

Mutably borrows the asset stored under `name`, or returns `None` when
nothing holds it.

<a id="rustdoc-item-1096"></a>

### `get_by_guid_mut`

```rust
pub fn get_by_guid_mut<T>(self: &mut Self, guid: AssetGuid) -> Option<&mut T> where T: Asset + TraitAccessible<dyn Asset>;
```

Mutably borrows the asset stored under `guid`, or returns `None` when
nothing holds it.

<a id="rustdoc-item-1097"></a>

### `name_of`

```rust
pub fn name_of<T>(self: &Self, handle: Handle<T>) -> Option<&str> where T: Asset + TraitAccessible<dyn Asset>;
```

Returns the name that `handle` was stored under, or `None` when it has
none.

<a id="rustdoc-item-1098"></a>

### `guid_of`

```rust
pub fn guid_of<T>(self: &Self, handle: Handle<T>) -> Option<AssetGuid> where T: Asset + TraitAccessible<dyn Asset>;
```

Returns the guid that `handle` was stored under, or `None` when it has
none.

<a id="rustdoc-item-1099"></a>

### `set_import_settings`

```rust
pub(crate) fn set_import_settings<T>(self: &mut Self, handle: Handle<T>, settings: serde_json::Value) where T: Asset + TraitAccessible<dyn Asset>;
```

Records the import settings that `handle` was decoded with, as the JSON
that a metadata file carries; see `asset_metadata`.

The metadata layer calls this when it decoded an asset with settings of
its own because no metadata file supplied any. A later `ensure_metadata`
then writes those settings instead of the type's defaults.

<a id="rustdoc-item-1100"></a>

### `import_settings`

```rust
pub(crate) fn import_settings<T>(self: &Self, handle: Handle<T>) -> Option<&serde_json::Value> where T: Asset + TraitAccessible<dyn Asset>;
```

Returns the import settings that `handle` was decoded with, when they
were recorded; see [`Self::set_import_settings`](#rustdoc-item-1099).

<a id="rustdoc-item-1082"></a>

### `remove`

```rust
pub fn remove<T>(self: &mut Self, handle: Handle<T>) -> Option<T> where T: Asset + TraitAccessible<dyn Asset>;
```

Removes the asset that `handle` refers to and returns it.

The slot is freed and its generation increases, so every outstanding
handle to it - including this one - now resolves to `None`. Returns
`None` when the handle was already stale, so removing twice does nothing
instead of failing.

<a id="rustdoc-item-1101"></a>

### `contains`

```rust
pub fn contains<T>(self: &Self, handle: Handle<T>) -> bool where T: Asset + TraitAccessible<dyn Asset>;
```

Returns whether `handle` still refers to a live asset.

<a id="rustdoc-item-1102"></a>

### `len`

```rust
pub fn len<T>(self: &Self) -> usize where T: Asset + TraitAccessible<dyn Asset>;
```

Returns the number of live assets of type `T`.

<a id="rustdoc-item-1103"></a>

### `is_empty`

```rust
pub fn is_empty<T>(self: &Self) -> bool where T: Asset + TraitAccessible<dyn Asset>;
```

Returns whether the store holds no asset of type `T`.

<a id="rustdoc-item-1104"></a>

### `iter`

```rust
pub fn iter<T>(self: &Self) -> impl Iterator<Item = _> where T: Asset + TraitAccessible<dyn Asset>;
```

Iterates over every live asset of type `T`.

The order is row order: insertion order until the first removal, and
arbitrary after that. A caller that needs a stable order has to impose
one.

<a id="rustdoc-item-1105"></a>

### `iter_handles`

```rust
pub fn iter_handles<T>(self: &Self) -> impl Iterator<Item = _> where T: Asset + TraitAccessible<dyn Asset>;
```

Iterates over every live asset of type `T`, together with its handle.

<a id="rustdoc-item-1106"></a>

### `is_live`

```rust
pub(in asset) fn is_live<T: Asset>(self: &Self, handle: Handle<T>) -> bool;
```

Returns whether `handle`'s generation still matches its slot's.

Every accessor checks handles here, so they all agree on what "stale"
means.

<a id="rustdoc-item-1107"></a>

### `slot_row`

```rust
pub(in asset) fn slot_row<T: Asset>(self: &Self, index: u32) -> Option<u32>;
```

Returns the row that the live slot at `index` occupies, or `None` when
nothing lives there.

The check through `row_slots` is what proves the slot is occupied. A
freed slot's row entry belongs to another slot or to no row, so even a
handle that guessed a freed slot's generation cannot reach another
asset's row.

<a id="rustdoc-item-1077"></a>

### `register`

```rust
pub fn register<T>(self: &mut Self) where T: Asset + TraitAccessible<dyn Asset>;
```

Declares `T` as an asset type and points its column at the code that is
running now.

Using a type creates its column anyway, but an explicit declaration also
matters across a reload. The column's function table is code from the
copy that filled it, so the copy that owns an asset type should declare
the type when it registers, even if it adds no asset this run. Declaring
twice is harmless: the second call only refreshes the table.

A shared asset type ([`Asset::shared_name`](trait.Asset.md#rustdoc-item-712)) is keyed by the `TypeId` of
the first binary that registered it.

#### Panics

Panics when a later registrant of a shared type has a copy of another
size or alignment, before that copy can read a row.

<a id="rustdoc-item-1066"></a>

### `rehome`

```rust
pub fn rehome(self: &mut Self);
```

Points every registered asset column at its newest function table.

The reload transaction calls this next to the component and resource
re-homing passes, after the new copy of the code registered and before
the old copy can be unloaded. A column keeps working only while its table
points at code that is still loaded. A type that the new copy neither
declared nor used keeps the table it already has, because there is
nothing newer to point it at.

<a id="rustdoc-item-1114"></a>

### `import`

```rust
pub fn import<T: ImportedAsset>(self: &mut Self, request: AssetImport<T>) -> Result<ImportOutcome<T>, AssetImportError>;
```

Load the source asset at `request.path` through its metadata file.

The asset is named by its normalized path and keyed by the guid in its
metadata. An existing metadata file's guid and settings win; otherwise
the request's initial settings and a new random guid are used. With
[`MetadataPolicy::CreateIfMissing`](../asset_metadata/enum.MetadataPolicy.md#rustdoc-item-1109) the file is written beside the
source, and only after the source decoded, so a broken source never
leaves one behind. An existing file is never overwritten, even when it
cannot be read.

Importing a path that is already loaded returns its existing handle
with [`ImportOutcome::already_loaded`](../asset_metadata/struct.ImportOutcome.md#rustdoc-item-1110) set, and decodes nothing.

#### Errors

- [`AssetImportError::Load`](../asset_metadata/enum.AssetImportError.md#rustdoc-item-1111) when the path does not normalize or is a
  metadata file, the source cannot be read or decoded, or the metadata
  file is unreadable, for another asset type, or from a newer format.
- [`AssetImportError::PathBoundToOtherGuid`](../asset_metadata/enum.AssetImportError.md#rustdoc-item-1112) when the path is loaded
  under a different guid than its metadata file now holds.
- [`AssetImportError::DuplicateGuid`](../asset_metadata/enum.AssetImportError.md#rustdoc-item-1113) when another live asset of this
  type already has the metadata file's guid.

<a id="rustdoc-item-1120"></a>

### `reimport`

```rust
pub fn reimport<T: ImportedAsset>(self: &mut Self, path: &Path) -> Result<ReimportOutcome<T>, AssetImportError>;
```

Decode the asset at `path` again and replace the loaded value in its
slot, after its source or its metadata file changed.

The handle, name and guid stay what they were, and the slot's content
version moves. Whatever holds the handle therefore sees the new value,
and a renderer re-uploads only this asset. The settings come from the
metadata file, or are the type's defaults when there is none. Nothing
is written. A path that is not loaded is imported instead, with
[`MetadataPolicy::ReadIfPresent`](../asset_metadata/enum.MetadataPolicy.md#rustdoc-item-1119), and `replaced` is `false`.

#### Errors

The errors of [`Self::import`](#rustdoc-item-1114). A metadata file whose guid no longer
matches the loaded asset is [`AssetImportError::PathBoundToOtherGuid`](../asset_metadata/enum.AssetImportError.md#rustdoc-item-1112).
On every error the loaded value is left exactly as it was: a source
that fails to decode never empties its slot.

<a id="rustdoc-item-1124"></a>

### `ensure_metadata`

```rust
pub fn ensure_metadata<T: ImportedAsset>(self: &Self, path: &Path) -> Result<Option<AssetGuid>, AssetImportError>;
```

Write the metadata file of the source at `path` when it has none, and
return the guid written.

Returns `None` when the file already exists, when the source is not on
a writable filesystem (a packed asset), or when another writer's file
carries a different guid.

Nothing is decoded. A source nothing has loaded gets `T`'s default
settings, while one already loaded under `path`'s name gets the
settings it was decoded with. This way a `.meta` deleted while the
program ran comes back describing the same value. A loaded asset keeps
its own guid, and anything else gets a new random one. An existing file
is never touched.

#### Errors

When the path does not normalize, the existing metadata cannot be
probed, no random guid is available, or the file cannot be written or
read back.

<a id="rustdoc-item-1126"></a>

### `follow_move`

```rust
pub fn follow_move<T: ImportedAsset>(self: &mut Self, path: &Path) -> Result<Option<String>, AssetImportError>;
```

When the source at `path` is a loaded asset that was moved here
together with its metadata file, rename that asset to `path` and
return its old name.

A move is recognized by the guid. The metadata file at `path` holds the
guid of a loaded asset that has another name, and that asset's source
file is gone from its old path. The asset keeps its handle, guid and
value, and nothing is decoded, so whatever holds it is unaffected.

Returns `Ok(None)` and changes nothing when `path` is already loaded,
has no metadata file, holds a guid no loaded asset has, or when the
other asset's source still exists. That last case is a copy, which
importing reports as [`AssetImportError::DuplicateGuid`](../asset_metadata/enum.AssetImportError.md#rustdoc-item-1113).

#### Errors

When the path does not normalize, or its metadata file exists but does
not read as `T`'s.

<a id="rustdoc-item-1127"></a>

### `follow_move_of`

```rust
pub(crate) fn follow_move_of<T>(self: &mut Self, asset_name: String, guid: AssetGuid, identity_path: &Path) -> Result<Option<String>, AssetImportError> where T: Asset + TraitAccessible<dyn Asset>;
```

Follow a move once the path's identity is known.

A sourced asset reads its guid from a `.meta` sidecar and a standalone
asset reads it from its own header; both agree on everything after
that. The asset must already be loaded under another name, the old
source must be gone, and the loaded asset takes the new name. Keeping
the decision here means a new precondition is added in one place.

`identity_path` is what the error names when the rename fails: the
sidecar for a sourced asset, the source itself for a standalone one.

<a id="rustdoc-item-1129"></a>

### `import_standalone`

```rust
pub fn import_standalone<T: StandaloneAsset>(self: &mut Self, path: &Path) -> Result<ImportOutcome<T>, AssetImportError>;
```

Loads the standalone file at `path` as a `T`.

The asset is named by its normalized path and keyed by the guid in the
file's header. The identity rules match [`Self::import`](#rustdoc-item-1114)'s: a path that
is already loaded under that guid returns its handle with
`already_loaded` set and builds nothing, and a guid another live `T`
holds is refused. Nothing is written: the file is the asset, and its
header always supplies the guid.

#### Errors

[`AssetImportError::Load`](../asset_metadata/enum.AssetImportError.md#rustdoc-item-1111) when the file cannot be read, is not a `T`'s
file, or does not build; the guid conflicts as in [`Self::import`](#rustdoc-item-1114).

<a id="rustdoc-item-1131"></a>

### `reimport_standalone`

```rust
pub fn reimport_standalone<T: StandaloneAsset>(self: &mut Self, path: &Path) -> Result<ReimportOutcome<T>, AssetImportError>;
```

Reads the standalone file at `path` again and replaces the value in the
loaded asset's slot, keeping its handle, name and guid. A path that is
not loaded is imported instead.

#### Errors

As [`Self::import_standalone`](#rustdoc-item-1129). A file whose header now holds a
different guid than the loaded asset is
[`AssetImportError::PathBoundToOtherGuid`](../asset_metadata/enum.AssetImportError.md#rustdoc-item-1112). On every error the loaded
value stays as it was.

<a id="rustdoc-item-1132"></a>

### `follow_standalone_move`

```rust
pub fn follow_standalone_move<T: StandaloneAsset>(self: &mut Self, path: &Path) -> Result<Option<String>, AssetImportError>;
```

Renames a loaded `T` to `path` when the standalone file there is that
asset moved here, and returns the asset's old name. This is the
standalone counterpart of [`Self::follow_move`](#rustdoc-item-1126); it recognizes the move
by the guid in the file's own header.

#### Errors

When the path does not normalize, or the file exists but does not read
as a `T` file.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
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
- `Resource`
