<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7535"></a>

# Struct `pill_engine_core::saved_references::SavedAssetReferenceFields`

```rust
pub(in saved_references) struct SavedAssetReferenceFields;
```

Visibility: `{'restricted': {'parent': 7532, 'path': '::saved_references'}}` · Source: `engine\pill_engine_core\src\saved_references.rs:105`

The fields of the object form, as they are written and read.

## Fields

<a id="rustdoc-item-7531"></a>

### `guid`

```rust
guid: crate::asset::AssetGuid
```

The guid, written as 32 hex digits.

<a id="rustdoc-item-7533"></a>

### `path`

```rust
path: Option<String>
```

The path hint, when the writer knew one.

<a id="rustdoc-item-7534"></a>

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
- `DeserializeOwned`
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
- `Deserialize<'de>`
