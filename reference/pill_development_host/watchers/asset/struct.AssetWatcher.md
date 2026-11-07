<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3913"></a>

# Struct `pill_development_host::watchers::asset::AssetWatcher`

```rust
pub(crate) struct AssetWatcher;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\asset.rs:83`

A running asset watcher. Dropping it makes the worker stop when it next
reports a batch.

## Fields

<a id="rustdoc-item-4270"></a>

### `changes`

```rust
changes: std::sync::mpsc::Receiver<AssetChange>
```

Queued changes, oldest first; at most one per source per batch.

## Associated functions and methods

<a id="rustdoc-item-4272"></a>

### `spawn`

```rust
pub(crate) fn spawn(asset_directory: PathBuf) -> Result<Option<Self>, WatcherError>;
```

Watches `asset_directory` and queues every change in it.

Returns `Ok(None)` when the directory does not exist: a project without
`res` has nothing to reload.

#### Errors

Returns a [`WatcherError`] when the watcher or its worker thread cannot
be created, or the directory cannot be registered for watching.

<a id="rustdoc-item-4273"></a>

### `drain`

```rust
pub(crate) fn drain(self: &Self) -> Vec<AssetChange>;
```

Every change queued since the last call, oldest first.

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
