<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-504"></a>

# Struct `pill_master_renderer::rendering_resources_manager::GpuColumn`

```rust
pub(crate) struct GpuColumn<H>;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\rendering_resources_manager.rs:68`

One asset type's GPU objects, keyed by asset key.

An entry is the handle of the object on the GPU plus the content version it
was built from, which leaves the sync four cases per key: not built yet,
built from the current version, built from an older version, and built but
marked stale. The last one keeps the handle and forgets the version, so the
next sync rebuilds the object even though the asset's own content did not
change - which is what a material asks for when its shader or texture moved.

## Fields

<a id="rustdoc-item-2055"></a>

### `entries`

```rust
entries: std::collections::HashMap<u64, (H, Option<u64>)>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-2057"></a>

### `new`

```rust
pub(crate) fn new() -> Self;
```

Creates a column that holds no objects yet.

<a id="rustdoc-item-2058"></a>

### `handle`

```rust
pub(crate) fn handle(self: &Self, key: u64) -> Option<H>;
```

The handle of the object behind `key`, when one is there.

<a id="rustdoc-item-2059"></a>

### `is_current`

```rust
pub(in rendering_resources_manager) fn is_current(self: &Self, key: u64, version: u64) -> bool;
```

Returns whether `key`'s object was built from content version
`version`.

<a id="rustdoc-item-2060"></a>

### `insert`

```rust
pub(in rendering_resources_manager) fn insert(self: &mut Self, key: u64, handle: H, version: u64);
```

Records `handle` as `key`'s object, built from `version`.

<a id="rustdoc-item-2061"></a>

### `remove`

```rust
pub(in rendering_resources_manager) fn remove(self: &mut Self, key: u64) -> Option<H>;
```

Removes `key`'s entry and hands back its handle, for the rebuild that
replaces or drops the object.

<a id="rustdoc-item-2062"></a>

### `invalidate`

```rust
pub(in rendering_resources_manager) fn invalidate(self: &mut Self, key: u64);
```

Keeps `key`'s handle but forgets the version, so the next sync rebuilds
it from the assets it depends on as they are now.

<a id="rustdoc-item-2063"></a>

### `keys`

```rust
pub(in rendering_resources_manager) fn keys(self: &Self) -> impl Iterator<Item = _> + '_;
```

Returns every key the column holds.

<a id="rustdoc-item-2064"></a>

### `invalidate_all`

```rust
pub(in rendering_resources_manager) fn invalidate_all(self: &mut Self);
```

Forgets every object's version and keeps the handles, so the next sync
rebuilds all of them.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
