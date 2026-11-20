<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1212"></a>

# Struct `pill_engine_core::assets::metadata::MetadataDocument`

```rust
pub(in assets::metadata) struct MetadataDocument<'settings, S>;
```

Visibility: `{'restricted': {'parent': 988, 'path': '::assets::metadata'}}` · Source: `engine\pill_engine_core\src\assets\metadata.rs:417`

The metadata file as written, holding the engine's header and then the
type's settings.

## Fields

<a id="rustdoc-item-1208"></a>

### `format_version`

```rust
format_version: u32
```

_No documentation provided._

<a id="rustdoc-item-1209"></a>

### `asset_type`

```rust
asset_type: &'static str
```

_No documentation provided._

<a id="rustdoc-item-1210"></a>

### `guid`

```rust
guid: crate::asset::AssetGuid
```

_No documentation provided._

<a id="rustdoc-item-1211"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Serialize`
