<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-726"></a>

# Enum `pill_engine_core::asset::AssetLoader`

```rust
pub enum AssetLoader { ... }
```

Source: `engine\pill_engine_core\src\asset.rs:122`

Where an asset's bytes come from: a file of the project, or bytes already
in memory.

A relative path names a file below the project's `res` directory. The asset
store looks for it in the packs first - a shipping or web build carries a
packed copy - and then on disk, so a development run reads the file itself.
The loading code is the same on every target.

## Variants

<a id="rustdoc-item-722"></a>

### `Path`

```rust
Path
```

A file of the project, named relative to its asset directory.

<a id="rustdoc-item-725"></a>

### `Bytes`

```rust
Bytes
```

Bytes already in memory, such as an asset embedded at build time.

## Associated functions and methods

<a id="rustdoc-item-728"></a>

### `set_root`

```rust
pub fn set_root<impl Into<PathBuf>: Into<PathBuf>>(path: impl Into<PathBuf>);
```

Mounts the project's asset directory. Relative [`Self::Path`](#rustdoc-item-722) values are
looked up below it; see [`crate::asset_store::mount_directory`](../asset_store/fn.mount_directory.md#rustdoc-item-727).

<a id="rustdoc-item-729"></a>

### `root`

```rust
pub fn root() -> Option<PathBuf>;
```

Returns the asset directory that is currently mounted, if one is set.

<a id="rustdoc-item-733"></a>

### `load`

```rust
pub fn load(self: &Self) -> AssetLoadResult<Vec<u8>>;
```

Reads this source into owned bytes.

A path is looked up the way [`crate::asset_store::read`](../asset_store/fn.read.md#rustdoc-item-730) does it: in the
packs first, then on disk.

#### Errors

Returns [`AssetLoadError::PathNotFound`](enum.AssetLoadError.md#rustdoc-item-731) when no pack or directory
holds the path, and [`AssetLoadError::Read`](enum.AssetLoadError.md#rustdoc-item-732) when the file was found
but could not be read.

<a id="rustdoc-item-736"></a>

### `load_string`

```rust
pub fn load_string(self: &Self) -> AssetLoadResult<String>;
```

Reads this source as UTF-8 text.

#### Errors

Returns the same errors as [`Self::load`](#rustdoc-item-733), and [`AssetLoadError::Utf8`](enum.AssetLoadError.md#rustdoc-item-735)
when the bytes are not valid UTF-8.

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
- `MirrorValue`
