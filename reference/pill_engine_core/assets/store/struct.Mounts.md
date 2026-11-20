<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1883"></a>

# Struct `pill_engine_core::assets::store::Mounts`

```rust
pub(in assets::store) struct Mounts;
```

Visibility: `{'restricted': {'parent': 1779, 'path': '::assets::store'}}` · Source: `engine\pill_engine_core\src\assets\store.rs:242`

Everything the store can read from: the packs in search order, the
project's asset directory and the directories extension modules declared.

## Fields

<a id="rustdoc-item-1879"></a>

### `packs`

```rust
packs: Vec<std::sync::Arc<AssetPack>>
```

_No documentation provided._

<a id="rustdoc-item-1880"></a>

### `project_directory`

```rust
project_directory: Option<std::path::PathBuf>
```

_No documentation provided._

<a id="rustdoc-item-1881"></a>

### `module_roots`

```rust
module_roots: Vec<ModuleAssetRoot>
```

_No documentation provided._

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Default`
