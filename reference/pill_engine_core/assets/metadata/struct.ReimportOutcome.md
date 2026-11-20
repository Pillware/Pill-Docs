<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1139"></a>

# Struct `pill_engine_core::assets::metadata::ReimportOutcome`

```rust
pub struct ReimportOutcome<T: Asset>;
```

Source: `engine\pill_engine_core\src\assets\metadata.rs:340`

The result of a successful [`AssetManager::reimport`](../storage/struct.AssetManager.md#rustdoc-item-614).

## Fields

<a id="rustdoc-item-1135"></a>

### `handle`

```rust
handle: crate::asset::Handle<T>
```

The asset's handle. It is the handle the asset already had when it was
loaded.

<a id="rustdoc-item-1136"></a>

### `guid`

```rust
guid: Option<crate::asset::AssetGuid>
```

The asset's guid, or `None` under the same conditions as
[`ImportOutcome::guid`](struct.ImportOutcome.md#rustdoc-item-1107). A path imported afresh always has one. A path
already loaded without one still has none.

<a id="rustdoc-item-1137"></a>

### `metadata`

```rust
metadata: MetadataSource
```

Where the settings came from. It is [`MetadataSource::ReadFromFile`](enum.MetadataSource.md#rustdoc-item-1066),
or [`MetadataSource::InMemoryOnly`](enum.MetadataSource.md#rustdoc-item-1068) when the source has no metadata
file and the type's default settings were used.

<a id="rustdoc-item-1138"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
