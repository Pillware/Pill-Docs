<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7631"></a>

# Struct `pill_engine_core::scene::saved_references::SavedAssetReferenceFields`

```rust
pub(in scene::saved_references) struct SavedAssetReferenceFields;
```

Visibility: `{'restricted': {'parent': 7628, 'path': '::scene::saved_references'}}` · Source: `engine\pill_engine_core\src\scene\saved_references.rs:105`

The fields of the object form, as they are written and read.

## Fields

<a id="rustdoc-item-7627"></a>

### `guid`

```rust
guid: crate::asset::AssetGuid
```

The guid, written as 32 hex digits.

<a id="rustdoc-item-7629"></a>

### `path`

```rust
path: Option<String>
```

The path hint, when the writer knew one.

<a id="rustdoc-item-7630"></a>

### `sub_asset`

```rust
sub_asset: Option<String>
```

The sub-asset key, when one is named.

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
- `DeserializeOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Serialize`
- `Deserialize<'de>`
