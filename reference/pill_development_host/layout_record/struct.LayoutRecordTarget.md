<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2781"></a>

# Struct `pill_development_host::layout_record::LayoutRecordTarget`

```rust
pub(crate) struct LayoutRecordTarget<'a>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\layout_record.rs:77`

Where a subject's record lives, and what its declared paths resolve against.

A declaration names its sources relative to the crate that declares the
resource, which is the parent of the watched `src` directory. The record is
keyed by the subject, so one module's record never answers for another's.

## Fields

<a id="rustdoc-item-2778"></a>

### `workspace_root`

```rust
workspace_root: &'a std::path::Path
```

Root of the engine workspace: the lockfile and the record directory.

<a id="rustdoc-item-2779"></a>

### `source_directory`

```rust
source_directory: &'a std::path::Path
```

Crate root of the subject: what a declared source path resolves against.

<a id="rustdoc-item-2780"></a>

### `record_key`

```rust
record_key: &'a str
```

Subject name, which is also the record's file name.

## Associated functions and methods

<a id="rustdoc-item-2782"></a>

### `new`

```rust
pub(crate) fn new(workspace_root: &'a Path, watch_directory: &'a Path, record_key: &'a str) -> Self;
```

Builds a target from the values a module configuration carries.

`watch_directory` is the `src` directory the host watches, relative to
the workspace root, so its parent is the crate root.

<a id="rustdoc-item-2783"></a>

### `record_path`

```rust
pub(crate) fn record_path(self: &Self) -> PathBuf;
```

Path of this subject's record file.

<a id="rustdoc-item-2784"></a>

### `cargo_lock_path`

```rust
pub(in layout_record) fn cargo_lock_path(self: &Self) -> PathBuf;
```

Path of the workspace lockfile.

Every artifact resolves its dependencies through this one file, so it is
the authority on a declared crate's version.

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
- `Copy`
