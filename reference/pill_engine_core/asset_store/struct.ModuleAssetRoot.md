<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2331"></a>

# Struct `pill_engine_core::asset_store::ModuleAssetRoot`

```rust
pub struct ModuleAssetRoot;
```

Source: `engine\pill_engine_core\src\asset_store.rs:300`

A read-only directory an extension module contributes to the store.

The module declares the directory and the files under it that it cannot
run without. The declaration panics when either is missing, so a build that
loses a default resource stops with the module and the path in the message
instead of loading a blank texture three systems later. Nothing writes into
a root, because a module's resources ship with the module; the editor shows
the root read-only.

One module may contribute several roots: its `res`, the sources its
configuration is read from, the images it ships. The editor shows all of
them under one tree named after the module.

## Fields

<a id="rustdoc-item-2362"></a>

### `module`

```rust
module: String
```

The module that declared the root, as the host names it.

<a id="rustdoc-item-2363"></a>

### `directory`

```rust
directory: std::path::PathBuf
```

The directory the module's resources live in.

<a id="rustdoc-item-2364"></a>

### `files`

```rust
files: Vec<String>
```

The files below `directory` the module cannot run without.

<a id="rustdoc-item-2365"></a>

### `hidden`

```rust
hidden: Vec<String>
```

File extensions, lowercase and without the dot, that the listing leaves
out. A module's cooked output sits beside the sources it was built from
and is a build product, not content, so the editor's tree hides it. The
store still answers those files by name.

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
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
