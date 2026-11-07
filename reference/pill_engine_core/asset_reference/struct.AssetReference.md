<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1302"></a>

# Struct `pill_engine_core::asset_reference::AssetReference`

```rust
pub struct AssetReference<T: Asset>;
```

Source: `engine\pill_engine_core\src\asset_reference.rs:45`

A saved reference to an asset of type `T`, stored as the asset's guid.

A set reference is written as `{"guid": "<32 hex digits>"}` and an unset
one as `null`. The module docs say when to use this instead of a
[`Handle`](../asset/struct.Handle.md#rustdoc-item-869).

## Fields

<a id="rustdoc-item-2152"></a>

### `guid`

```rust
guid: Option<crate::asset::AssetGuid>
```

_No documentation provided._

<a id="rustdoc-item-2154"></a>

### `_asset_type`

```rust
_asset_type: std::marker::PhantomData<fn () -> T>
```

Marks `T` without storing one; a reference holds only its guid.

## Associated functions and methods

<a id="rustdoc-item-2155"></a>

### `new`

```rust
pub const fn new(guid: AssetGuid) -> Self;
```

Creates a reference to the asset with `guid`.

<a id="rustdoc-item-2156"></a>

### `unset`

```rust
pub const fn unset() -> Self;
```

Creates a reference to no asset.

It resolves to [`Handle::INVALID`](../asset/struct.Handle.md#rustdoc-item-870) and reports nothing: an empty slot
is a choice, not a missing asset.

<a id="rustdoc-item-2157"></a>

### `guid`

```rust
pub fn guid(self: &Self) -> Option<AssetGuid>;
```

Returns the referenced guid, or `None` when unset.

<a id="rustdoc-item-2158"></a>

### `is_set`

```rust
pub fn is_set(self: &Self) -> bool;
```

Returns whether the reference names an asset.

<a id="rustdoc-item-2159"></a>

### `from_handle`

```rust
pub fn from_handle(assets: &AssetManager, handle: Handle<T>) -> Option<Self> where T: TraitAccessible<dyn Asset>;
```

Creates a reference to the asset that `handle` points at, stored by
its guid.

Returns `None` when the handle is stale or the asset has no guid.

<a id="rustdoc-item-2160"></a>

### `try_resolve`

```rust
pub fn try_resolve(self: &Self, assets: &AssetManager) -> Option<Handle<T>> where T: TraitAccessible<dyn Asset>;
```

Returns the live handle of the referenced asset, or `None` when the
reference is unset or no asset has its guid. Reports nothing.

<a id="rustdoc-item-2161"></a>

### `resolve`

```rust
pub fn resolve(self: &Self, assets: &AssetManager) -> Handle<T> where T: TraitAccessible<dyn Asset>;
```

Returns the live handle of the referenced asset, or
[`Handle::INVALID`](../asset/struct.Handle.md#rustdoc-item-870).

When a set reference resolves to nothing, its guid is logged as a
warning the first time it is seen in this process. An unset reference
is not reported.

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
- `Clone`
- `Copy`
- `PartialEq`
- `Eq`
- `Default`
- `Debug`
- `Serialize`
- `Deserialize<'de>`
