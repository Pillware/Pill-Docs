<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3867"></a>

# Struct `pill_development_host::runtime::PendingModule`

```rust
pub(in runtime) struct PendingModule;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:115`

An editor-only module whose tolerated first load failed.

Kept with the owner tag and watcher counter its first load would have had,
so [`DevHost::retry_extension`](struct.DevHost.md#rustdoc-item-3866) can build and load it later without
restarting the host.

## Fields

<a id="rustdoc-item-3863"></a>

### `config`

```rust
config: crate::config::ExtensionConfig
```

The module's configuration, reused verbatim by the retry.

<a id="rustdoc-item-3864"></a>

### `owner`

```rust
owner: pill_engine::SystemOwner
```

The owner tag the module's systems register under once it loads.

<a id="rustdoc-item-3865"></a>

### `source_edit_generation`

```rust
source_edit_generation: std::sync::Arc<std::sync::atomic::AtomicU64>
```

The counter the module's source watcher adds one to once it runs.

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
