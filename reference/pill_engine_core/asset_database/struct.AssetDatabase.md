<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1244"></a>

# Struct `pill_engine_core::asset_database::AssetDatabase`

```rust
pub struct AssetDatabase;
```

Source: `engine\pill_engine_core\src\asset_database.rs:90`

Every asset of a project, indexed by guid and by path; see the module docs.

The host inserts it as a world resource when it mounts the project's
assets. Whatever resolves a reference or lists the assets of a type reads
it from there.

## Fields

<a id="rustdoc-item-1239"></a>

### `records`

```rust
records: std::collections::BTreeMap<String, AssetRecord>
```

Every indexed asset, keyed by path and kept sorted so listings are
stable.

<a id="rustdoc-item-1242"></a>

### `paths_by_guid`

```rust
paths_by_guid: std::collections::HashMap<crate::asset::AssetGuid, String>
```

The path that holds each indexed guid.

<a id="rustdoc-item-1243"></a>

### `conflicts`

```rust
conflicts: Vec<GuidConflict>
```

Guids that a second path claimed, as found by the build and by each
refresh.

## Associated functions and methods

<a id="rustdoc-item-1245"></a>

### `new`

```rust
pub fn new() -> Self;
```

An empty database.

<a id="rustdoc-item-1246"></a>

### `from_directory`

```rust
pub fn from_directory(root: &Path, registry: &ImportRegistry) -> Self;
```

Indexes every asset under `root`, which is a project's `res` directory.

`registry` says which file extensions belong to standalone types, where
the file itself holds the header. Every other file is indexed through
its `.meta`, when it has one. Files are visited in path order, so when
two paths claim one guid, the first path keeps it on every machine.

<a id="rustdoc-item-1248"></a>

### `from_pack`

```rust
pub fn from_pack(pack: &AssetPack) -> Self;
```

Indexes every asset that a shipping pack carries, from the `.meta`
entries and the standalone files it holds beside the sources.

This needs no registry, because a shipping build indexes its pack before
any module has registered a type. An entry with a `.meta` beside it is a
sourced asset. An entry without one is a standalone asset when the entry
itself is an asset header, so a binary source is skipped.

<a id="rustdoc-item-1250"></a>

### `refresh`

```rust
pub fn refresh(self: &mut Self, root: &Path, relative_path: &str, registry: &ImportRegistry);
```

Re-reads one path under `root` after the file changed on disk.

`relative_path` is the source's path relative to `root`. A change to a
`.meta` file is reported under its source's path. A file that is gone,
or that no longer has a header, leaves the index.

A file whose guid another path holds takes the guid over when that other
path no longer exists, which is what a file moved with its `.meta`
looks like. While the other path still exists, the file is refused as a
conflict.

<a id="rustdoc-item-1251"></a>

### `by_guid`

```rust
pub fn by_guid(self: &Self, guid: AssetGuid) -> Option<&AssetRecord>;
```

The asset with `guid`, if one is indexed.

<a id="rustdoc-item-1252"></a>

### `by_path`

```rust
pub fn by_path(self: &Self, path: &str) -> Option<&AssetRecord>;
```

The asset at `path` (relative to `res`, either separator), if indexed.

<a id="rustdoc-item-1253"></a>

### `records`

```rust
pub fn records(self: &Self) -> impl Iterator<Item = _>;
```

Every indexed asset, in path order.

<a id="rustdoc-item-1254"></a>

### `records_of_type`

```rust
pub fn records_of_type<'a>(self: &'a Self, asset_type: &'a str) -> impl Iterator<Item = _> + 'a;
```

Every indexed asset of type `asset_type`, in path order. This is what a
reference picker lists.

<a id="rustdoc-item-1255"></a>

### `conflicts`

```rust
pub fn conflicts(self: &Self) -> &[GuidConflict];
```

The guids that a second path claimed, as found by the build and by each
refresh.

<a id="rustdoc-item-1256"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

How many assets are indexed.

<a id="rustdoc-item-1257"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether nothing is indexed.

<a id="rustdoc-item-1258"></a>

### `index_from_disk`

```rust
pub(in asset_database) fn index_from_disk(self: &mut Self, root: &Path, relative_path: &str, registry: &ImportRegistry);
```

Reads `relative_path` from disk under `root` and indexes it, when it
carries a header.

<a id="rustdoc-item-1259"></a>

### `insert`

```rust
pub(in asset_database) fn insert(self: &mut Self, record: AssetRecord);
```

Adds `record`. When another path already holds its guid, records a
conflict instead and does not index the asset.

<a id="rustdoc-item-1260"></a>

### `remove_path`

```rust
pub(in asset_database) fn remove_path(self: &mut Self, path: &str);
```

Drops the record at `path`, when there is one, and the guid entry that
points at it.

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
- `Resource`
