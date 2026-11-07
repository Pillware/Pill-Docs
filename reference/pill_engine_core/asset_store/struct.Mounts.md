<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2332"></a>

# Struct `pill_engine_core::asset_store::Mounts`

```rust
pub(in asset_store) struct Mounts;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:242`

Everything the store can read from: the packs in search order, the
project's asset directory and the directories extension modules declared.

## Fields

<a id="rustdoc-item-2328"></a>

### `packs`

```rust
packs: Vec<std::sync::Arc<AssetPack>>
```

_No documentation provided._

<a id="rustdoc-item-2329"></a>

### `project_directory`

```rust
project_directory: Option<std::path::PathBuf>
```

_No documentation provided._

<a id="rustdoc-item-2330"></a>

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
