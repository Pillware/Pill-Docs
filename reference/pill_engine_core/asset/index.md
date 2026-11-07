<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-865"></a>

# Module `pill_engine_core::asset`

Source: `engine\pill_engine_core\src\asset.rs:1`

Many-per-type asset storage addressed by generational handle.

The counterpart to [`resource`](../resource/index.md#rustdoc-item-1162) for data a world holds several of - meshes,
textures, materials - where the type alone does not name one value. The
store is itself a resource, so it reaches systems through the `Res` /
`ResMut` parameters.
Many-per-type asset storage, addressed by generational handle.

## Responsibilities

- Defines the [`Asset`](trait.Asset.md#rustdoc-item-716) marker trait for types stored many-per-type.
- Provides [`Handle<T>`](struct.Handle.md#rustdoc-item-869), a typed generational reference to one asset.
- Implements [`AssetManager`](struct.AssetManager.md#rustdoc-item-714), the store holding every asset column.

## Design

A [`Resource`](../resource/trait.Resource.md#rustdoc-item-715)(crate::resource::Resource) holds one value per type, and code
fetches it by type through [`Res`](../query/resource/struct.Res.md#rustdoc-item-1163). A mesh or a texture
is one of many values of the same type, so the type alone cannot name one.
Assets therefore get their own store instead of a second reading of
[`Resource`](../resource/trait.Resource.md#rustdoc-item-715). [`AssetManager`](struct.AssetManager.md#rustdoc-item-714) is itself an ordinary resource, so
`Res<AssetManager>` and `ResMut<AssetManager>` reach it, and the scheduler
already keeps two systems from using it at once when their uses conflict.

Storage works like component storage - one type-erased column per type in a
`TraitTypeMap` - without archetypes. Archetypes group entities by their set
of components, and that grouping means nothing for an asset.

Each column is an `ErasedVecStorage` from `trait_type_map`. The operations
the column runs on its values are a table of function pointers that this
store owns, so loading new code can replace the table (see
[`AssetManager::rehome`](struct.AssetManager.md#rustdoc-item-1066)). Values and handle indices stay where they are
across that swap.

A [`Handle<T>`](struct.Handle.md#rustdoc-item-869) is generational. Freeing a slot adds one to that slot's
generation, so a handle kept across an unload returns `None` instead of
quietly naming whatever was loaded into the slot next.

## Module contents

### Structs
- [`AssetColumn`](struct.AssetColumn.md#rustdoc-item-978) — Bookkeeping for the slots of one asset column.
- [`AssetGuid`](struct.AssetGuid.md#rustdoc-item-974) — A stable 128-bit identity for one asset.
- [`AssetManager`](struct.AssetManager.md#rustdoc-item-714) — Stores many assets per type, each addressed by a [`Handle`].
- [`Handle`](struct.Handle.md#rustdoc-item-869) — A typed, generational reference to one asset in the [`AssetManager`].
- [`KeyIndex`](struct.KeyIndex.md#rustdoc-item-933) — One kind of key - names or guids - in an asset column, mapped both ways.

### Enums
- [`AssetBindingError`](enum.AssetBindingError.md#rustdoc-item-833) — Why the store refused to bind a name or a guid to an asset.
- [`AssetLoader`](enum.AssetLoader.md#rustdoc-item-726) — Where an asset's bytes come from: a file of the project, or bytes already
- [`AssetLoadError`](enum.AssetLoadError.md#rustdoc-item-789) — Something went wrong while loading an asset.

### Traits
- [`Asset`](trait.Asset.md#rustdoc-item-716) — Marks data that is stored many-per-type in the [`AssetManager`].

### Functions
- [`refresh_column_ops`](fn.refresh_column_ops.md#rustdoc-item-1060) — Rebuilds one asset type's function table from the code that is running now.

### Type aliases
- [`AssetBindingResult`](type.AssetBindingResult.md#rustdoc-item-863) — The result of a binding operation, which can be refused by an occupied name
- [`AssetLoadResult`](type.AssetLoadResult.md#rustdoc-item-734) — The result of any asset file operation: reading, decoding or writing a
- [`AssetOpsRefresher`](type.AssetOpsRefresher.md#rustdoc-item-1061) — The function that refreshes one asset type's column, given its storage key;

### Constants
- [`ASSET_MANAGER_SHARED_NAME`](constant.ASSET_MANAGER_SHARED_NAME.md#rustdoc-item-1161) — The shared name that the store's C# mirror registers the manager under
- [`INVALID_ASSET_GENERATION`](constant.INVALID_ASSET_GENERATION.md#rustdoc-item-930) — The generation that [`Handle::INVALID`] carries.
- [`INVALID_ASSET_INDEX`](constant.INVALID_ASSET_INDEX.md#rustdoc-item-929) — The slot index that [`Handle::INVALID`] carries.
