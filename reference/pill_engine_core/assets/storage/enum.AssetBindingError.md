<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1471"></a>

# Enum `pill_engine_core::assets::storage::AssetBindingError`

```rust
pub enum AssetBindingError { ... }
```

Source: `engine\pill_engine_core\src\assets\storage.rs:188`

Why the store refused to bind a name or a guid to an asset.

Either the name already addresses a live asset, or the handle no longer
addresses one. This is a separate type from [`AssetLoadError`](enum.AssetLoadError.md#rustdoc-item-634) because
nothing failed to load: the store refused a request.

## Variants

<a id="rustdoc-item-1469"></a>

### `NameInUse`

```rust
NameInUse
```

The name already addresses a live asset.

<a id="rustdoc-item-1470"></a>

### `StaleHandle`

```rust
StaleHandle
```

The handle no longer addresses a live asset.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
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
- `Error`
- `Display`
