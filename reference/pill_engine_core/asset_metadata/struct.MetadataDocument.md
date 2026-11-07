<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2066"></a>

# Struct `pill_engine_core::asset_metadata::MetadataDocument`

```rust
pub(in asset_metadata) struct MetadataDocument<'settings, S>;
```

Visibility: `{'restricted': {'parent': 1859, 'path': '::asset_metadata'}}` · Source: `engine\pill_engine_core\src\asset_metadata.rs:417`

The metadata file as written, holding the engine's header and then the
type's settings.

## Fields

<a id="rustdoc-item-2062"></a>

### `format_version`

```rust
format_version: u32
```

_No documentation provided._

<a id="rustdoc-item-2063"></a>

### `asset_type`

```rust
asset_type: &'static str
```

_No documentation provided._

<a id="rustdoc-item-2064"></a>

### `guid`

```rust
guid: crate::asset::AssetGuid
```

_No documentation provided._

<a id="rustdoc-item-2065"></a>

### `settings`

```rust
settings: &'settings S
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
- `Serialize`
