<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2121"></a>

# Struct `pill_engine_core::asset_metadata::RawHeader`

```rust
pub(crate) struct RawHeader;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\asset_metadata.rs:453`

What a header says, before any caller checks the type it expected.

## Fields

<a id="rustdoc-item-2119"></a>

### `asset_type`

```rust
asset_type: String
```

The `asset_type` the file declares.

<a id="rustdoc-item-2120"></a>

### `guid`

```rust
guid: crate::asset::AssetGuid
```

The guid the file carries.

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
