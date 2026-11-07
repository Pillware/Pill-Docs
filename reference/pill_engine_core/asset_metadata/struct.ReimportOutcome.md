<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1122"></a>

# Struct `pill_engine_core::asset_metadata::ReimportOutcome`

```rust
pub struct ReimportOutcome<T: Asset>;
```

Source: `engine\pill_engine_core\src\asset_metadata.rs:340`

The result of a successful [`AssetManager::reimport`](../asset/struct.AssetManager.md#rustdoc-item-1120).

## Fields

<a id="rustdoc-item-1995"></a>

### `handle`

```rust
handle: crate::asset::Handle<T>
```

The asset's handle. It is the handle the asset already had when it was
loaded.

<a id="rustdoc-item-1996"></a>

### `guid`

```rust
guid: Option<crate::asset::AssetGuid>
```

The asset's guid, or `None` under the same conditions as
[`ImportOutcome::guid`](struct.ImportOutcome.md#rustdoc-item-1968). A path imported afresh always has one. A path
already loaded without one still has none.

<a id="rustdoc-item-1997"></a>

### `metadata`

```rust
metadata: MetadataSource
```

Where the settings came from. It is [`MetadataSource::ReadFromFile`](enum.MetadataSource.md#rustdoc-item-1930),
or [`MetadataSource::InMemoryOnly`](enum.MetadataSource.md#rustdoc-item-1932) when the source has no metadata
file and the type's default settings were used.

<a id="rustdoc-item-1998"></a>

### `replaced`

```rust
replaced: bool
```

`true` when the loaded value was replaced in its slot. `false` when the
path was not loaded and was imported fresh instead.

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
- `Debug`
