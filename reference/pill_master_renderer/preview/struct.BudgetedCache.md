<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-774"></a>

# Struct `pill_master_renderer::preview::BudgetedCache`

```rust
pub(in preview) struct BudgetedCache<V>;
```

Visibility: `{'restricted': {'parent': 592, 'path': '::preview'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\preview.rs:826`

A cache of GPU data by file path, limited by bytes rather than by a count.

The preview has two of these, and both hold the same thing: a file's
contents on the GPU, which go stale once the file changes. Using an entry
makes it the newest, so the limit drops what a person scrolled past instead
of what they are looking at. The newest entry is never dropped, even when it
is alone over the limit, so a source bigger than the whole cache still
previews.

## Fields

<a id="rustdoc-item-820"></a>

### `cached_entries`

```rust
cached_entries: std::collections::HashMap<String, (Option<std::time::SystemTime>, V)>
```

The cached values by path, each with the modified time it was built
from.

<a id="rustdoc-item-822"></a>

### `eviction_order`

```rust
eviction_order: std::collections::VecDeque<(String, u64)>
```

The paths, oldest first, each with the bytes it holds. This is the
order entries are dropped in.

<a id="rustdoc-item-824"></a>

### `bytes`

```rust
bytes: u64
```

The bytes every entry holds together.

<a id="rustdoc-item-825"></a>

### `budget`

```rust
budget: u64
```

How many bytes the cache may hold.

## Associated functions and methods

<a id="rustdoc-item-826"></a>

### `new`

```rust
pub(in preview) fn new(budget: u64) -> Self;
```

An empty cache that may hold `budget` bytes.

<a id="rustdoc-item-827"></a>

### `fresh_value`

```rust
pub(in preview) fn fresh_value(self: &mut Self, path: &str, modified: Option<SystemTime>) -> Option<V>;
```

Returns the cached value for `path` if it was built from `modified`.

Using the value makes its entry the newest one.

<a id="rustdoc-item-828"></a>

### `insert`

```rust
pub(in preview) fn insert(self: &mut Self, path: &str, modified: Option<SystemTime>, value: V, bytes: u64) -> Vec<String>;
```

Stores `value` as the newest entry, drops entries until the cache fits
its limit again, and returns the paths it dropped.

<a id="rustdoc-item-829"></a>

### `forget`

```rust
pub(in preview) fn forget(self: &mut Self, path: &str);
```

Removes `path`'s bytes from the total, for the entry an insert
replaces.

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
