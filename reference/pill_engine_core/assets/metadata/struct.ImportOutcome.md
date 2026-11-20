<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-103"></a>

# Struct `pill_engine_core::assets::metadata::ImportOutcome`

```rust
pub struct ImportOutcome<T: Asset>;
```

Source: `engine\pill_engine_core\src\assets\metadata.rs:307`

The result of a successful [`AssetManager::import`](../storage/struct.AssetManager.md#rustdoc-item-605).

## Fields

<a id="rustdoc-item-1104"></a>

### `handle`

```rust
handle: crate::asset::Handle<T>
```

The asset's handle.

<a id="rustdoc-item-1107"></a>

### `guid`

```rust
guid: Option<crate::asset::AssetGuid>
```

The asset's guid, or `None` when it has none.

The only import without a guid is a path that is already loaded and
was registered under its name alone ([`AssetManager::add_named`](../storage/struct.AssetManager.md#rustdoc-item-1105)
rather than [`AssetManager::add_named_with_guid`](../storage/struct.AssetManager.md#rustdoc-item-1106)) when there is also
no metadata file to take one from. Every other import reads a guid or
draws one.

<a id="rustdoc-item-1108"></a>

### `metadata`

```rust
metadata: MetadataSource
```

Where the guid and settings came from.

<a id="rustdoc-item-1109"></a>

### `already_loaded`

```rust
already_loaded: bool
```

`true` when the path was already loaded and its existing handle was
returned. The source is not decoded and nothing is written.

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
