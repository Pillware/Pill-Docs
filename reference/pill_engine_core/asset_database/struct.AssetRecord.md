<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1168"></a>

# Struct `pill_engine_core::asset_database::AssetRecord`

```rust
pub struct AssetRecord;
```

Source: `engine\pill_engine_core\src\asset_database.rs:53`

One asset the project holds, whether or not it is loaded.

## Fields

<a id="rustdoc-item-1164"></a>

### `guid`

```rust
guid: crate::asset::AssetGuid
```

The asset's stable identity.

<a id="rustdoc-item-1165"></a>

### `path`

```rust
path: String
```

The path the asset loads under, relative to `res` and separated by `/`.

<a id="rustdoc-item-1166"></a>

### `asset_type`

```rust
asset_type: String
```

The asset type its header names (`pill_master_renderer::assets::Mesh`).

<a id="rustdoc-item-1167"></a>

### `standalone`

```rust
standalone: bool
```

Whether the file is the asset itself and holds its own header, rather
than a source with a `.meta` sidecar.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
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
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
