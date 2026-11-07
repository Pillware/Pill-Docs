<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-833"></a>

# Enum `pill_engine_core::asset::AssetBindingError`

```rust
pub enum AssetBindingError { ... }
```

Source: `engine\pill_engine_core\src\asset.rs:188`

Why the store refused to bind a name or a guid to an asset.

Either the name already addresses a live asset, or the handle no longer
addresses one. This is a separate type from [`AssetLoadError`](enum.AssetLoadError.md#rustdoc-item-789) because
nothing failed to load: the store refused a request.

## Variants

<a id="rustdoc-item-831"></a>

### `NameInUse`

```rust
NameInUse
```

The name already addresses a live asset.

<a id="rustdoc-item-832"></a>

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
- `Error`
- `Display`
