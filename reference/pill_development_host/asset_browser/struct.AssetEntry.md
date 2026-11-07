<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3937"></a>

# Struct `pill_development_host::asset_browser::AssetEntry`

```rust
pub struct AssetEntry;
```

Source: `hosting\pill_development_host\src\asset_browser.rs:56`

One row of an asset tree listing.

## Fields

<a id="rustdoc-item-4461"></a>

### `root`

```rust
root: String
```

The root the entry came from: empty for the project's own `res`, or
otherwise the name of the module whose resources it is.

<a id="rustdoc-item-4462"></a>

### `read_only`

```rust
read_only: bool
```

Whether the entry belongs to a module's resources: it is listed and
shown, but never written.

<a id="rustdoc-item-4463"></a>

### `path`

```rust
path: String
```

The path relative to its root, with `/` separators. A folder's path has
no trailing slash.

<a id="rustdoc-item-4464"></a>

### `name`

```rust
name: String
```

The last component of [`Self::path`](#rustdoc-item-4463).

<a id="rustdoc-item-4465"></a>

### `depth`

```rust
depth: usize
```

How many folders deep the entry is: `0` for an entry directly in its
root.

<a id="rustdoc-item-4466"></a>

### `is_directory`

```rust
is_directory: bool
```

Whether the entry is a folder.

<a id="rustdoc-item-4467"></a>

### `type_name`

```rust
type_name: Option<String>
```

The registered asset type that imports the file, if any.

<a id="rustdoc-item-4468"></a>

### `standalone`

```rust
standalone: bool
```

Whether the file is a standalone asset, so it holds its own guid.

<a id="rustdoc-item-4469"></a>

### `loaded`

```rust
loaded: bool
```

Whether an asset is loaded under this path.

<a id="rustdoc-item-4470"></a>

### `guid`

```rust
guid: Option<String>
```

The guid held by the file's `.meta`, or by its own header, if any.

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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
