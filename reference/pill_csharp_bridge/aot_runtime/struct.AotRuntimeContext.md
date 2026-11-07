<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-362"></a>

# Struct `pill_csharp_bridge::aot_runtime::AotRuntimeContext`

```rust
pub(crate) struct AotRuntimeContext;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\aot_runtime.rs:40`

Owns a loaded NativeAOT library and resolves its unmanaged exports.

Only the shipping posture (a build without `hot_reload`) reaches this
type; a development build never calls it.

## Fields

<a id="rustdoc-item-359"></a>

### `_library`

```rust
_library: libloading::Library
```

Keeps the native library mapped for as long as the host runs, so every
function pointer taken from it stays valid.

## Associated functions and methods

<a id="rustdoc-item-365"></a>

### `new`

```rust
pub(crate) fn new(library_path: &Path) -> Result<Self, CSharpError>;
```

Loads the AOT native library from disk.

#### Errors

Returns [`CSharpError::AotLibraryNotFound`] when the file is absent,
and [`CSharpError::AotLibraryLoadFailed`] when it cannot be mapped.

<a id="rustdoc-item-369"></a>

### `resolve_unmanaged_function_pointer`

```rust
pub(crate) fn resolve_unmanaged_function_pointer<T: Copy>(self: &Self, symbol_name: &str) -> Result<T, CSharpError>;
```

Resolves one `pill_*` export into a typed function pointer.

`T` must be the exact `extern "system"` signature the export declares.

#### Errors

Returns [`CSharpError::AotExportMissing`] when the symbol is absent.

#### Panics

Panics when `symbol_name` holds an interior NUL byte; every export name
is a fixed `pill_*` string, so this never happens.

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
