<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-967"></a>

# Struct `pill_development_host::config::ExtensionCrateLocation`

```rust
pub(crate) struct ExtensionCrateLocation;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:2028`

Where one extension crate lives under `extensions/`, as its manifest
declares it.

Every question the host asks about an extension crate goes through this
record: which folder holds it, where its sources are, and whether it is its
folder's editor crate. The package name comes from the crate's own
`Cargo.toml`, so the directory a crate sits in does not have to repeat it.

## Fields

<a id="rustdoc-item-1296"></a>

### `package_name`

```rust
package_name: String
```

The package name the crate's manifest declares: the name `modules:`
lists, the cargo selector and the library name the host loads.

<a id="rustdoc-item-1297"></a>

### `folder`

```rust
folder: String
```

The extension folder under `extensions/` that holds the crate.

<a id="rustdoc-item-1298"></a>

### `directory_in_folder`

```rust
directory_in_folder: String
```

The crate's directory inside its extension folder, with `/`
separators: `modules/runtime`, `modules/editor`, or one level deeper
under the master renderer's `modules/runtime`.

<a id="rustdoc-item-1299"></a>

### `is_editor_crate`

```rust
is_editor_crate: bool
```

Whether this is the folder's editor crate: the crate in
`modules/editor`.

## Associated functions and methods

<a id="rustdoc-item-1300"></a>

### `conventional`

```rust
pub(in config) fn conventional(package_name: &str) -> Self;
```

The location a crate that no folder holds would have:
`extensions/<package>/modules/runtime`. A configuration built from it
fails at its watch path, which names the crate that is missing.

<a id="rustdoc-item-1301"></a>

### `workspace_relative_directory`

```rust
pub(crate) fn workspace_relative_directory(self: &Self) -> String;
```

The crate's directory relative to the workspace root, with `/`
separators.

<a id="rustdoc-item-1302"></a>

### `directory_under`

```rust
pub(in config) fn directory_under(self: &Self, extensions_root: &Path) -> PathBuf;
```

The crate's directory under `extensions_root`.

<a id="rustdoc-item-1303"></a>

### `is_nested_runtime_crate`

```rust
pub(in config) fn is_nested_runtime_crate(self: &Self) -> bool;
```

Whether the crate sits one level below `modules/runtime`, in a runtime
folder that groups crates instead of holding one (the master renderer's
`data` and `gpu`).

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
