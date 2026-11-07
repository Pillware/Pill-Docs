<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4059"></a>

# Struct `pill_development_host::watchers::shader::ShaderWatcher`

```rust
pub(crate) struct ShaderWatcher;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\shader.rs:78`

A running shader watcher. Dropping it stops the worker the next time it
has a shader to queue.

## Fields

<a id="rustdoc-item-4344"></a>

### `cooked_shaders`

```rust
cooked_shaders: std::sync::mpsc::Receiver<CookedShader>
```

The re-cooked files the worker has queued, oldest first.

## Associated functions and methods

<a id="rustdoc-item-4345"></a>

### `spawn`

```rust
pub(crate) fn spawn(tree_label: &str, shaders_directory: PathBuf) -> Result<Option<Self>, WatcherError>;
```

Starts a worker thread that watches `shaders_directory` and cooks the
tree when an edit settles. `tree_label` names the tree in the log line
that announces the watch - the data crate's name, or the project.

Returns `Ok(None)` when the directory does not exist: a tree with no
shaders has nothing to reload.

#### Errors

Returns a [`WatcherError`] when the watcher or its worker thread cannot
be created, or when the directory cannot be registered with the
watcher.

<a id="rustdoc-item-4346"></a>

### `drain`

```rust
pub(crate) fn drain(self: &Self) -> Vec<CookedShader>;
```

Returns every re-cooked file queued since the last call, oldest first.

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
