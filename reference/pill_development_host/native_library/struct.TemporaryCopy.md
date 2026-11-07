<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3256"></a>

# Struct `pill_development_host::native_library::TemporaryCopy`

```rust
pub(in native_library) struct TemporaryCopy;
```

Visibility: `{'restricted': {'parent': 3075, 'path': '::native_library'}}` · Source: `hosting\pill_development_host\src\native_library.rs:651`

A copied artifact path that deletes itself if the load never takes it over.

`load_copy` writes the copy before the library exists, so without the guard
a rejected load leaves the file behind for the life of the process: the
`Drop` that removes it lives on `NativeLibrary`, which the failure path
never constructs. The guard owns the path from the moment the copy succeeds
and is disarmed only once the library owns the file.

## Fields

<a id="rustdoc-item-3255"></a>

### `path`

```rust
path: Option<std::path::PathBuf>
```

The copied file, or `None` once the library has taken it over.

## Associated functions and methods

<a id="rustdoc-item-3257"></a>

### `new`

```rust
pub(in native_library) fn new(path: PathBuf) -> Self;
```

_No documentation provided._

<a id="rustdoc-item-3258"></a>

### `path`

```rust
pub(in native_library) fn path(self: &Self) -> &Path;
```

The copied file, which the guard still owns.

#### Panics

Panics once the guard has handed the file to the library.

<a id="rustdoc-item-3259"></a>

### `disarm`

```rust
pub(in native_library) fn disarm(self: &mut Self);
```

Hand the file to the library that just mapped it.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Drop`
