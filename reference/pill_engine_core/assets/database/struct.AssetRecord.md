<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-246"></a>

# Struct `pill_engine_core::assets::database::AssetRecord`

```rust
pub struct AssetRecord;
```

Source: `engine\pill_engine_core\src\assets\database.rs:53`

One asset the project holds, whether or not it is loaded.

## Fields

<a id="rustdoc-item-242"></a>

### `guid`

```rust
guid: crate::asset::AssetGuid
```

The asset's stable identity.

<a id="rustdoc-item-243"></a>

### `path`

```rust
path: String
```

The path the asset loads under, relative to `res` and separated by `/`.

<a id="rustdoc-item-244"></a>

### `asset_type`

```rust
asset_type: String
```

The asset type its header names, in its current form
(`pill_master_renderer::Mesh`), even when the file still spells it with
the module path it was written with.

<a id="rustdoc-item-245"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
