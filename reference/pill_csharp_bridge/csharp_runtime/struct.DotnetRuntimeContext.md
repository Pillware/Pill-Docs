<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-454"></a>

# Struct `pill_csharp_bridge::csharp_runtime::DotnetRuntimeContext`

```rust
pub struct DotnetRuntimeContext;
```

Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:102`

Owns one initialized .NET runtime context and the delegate that loads
managed assemblies.

The native library stays loaded for as long as the context lives: `close`
and `load_assembly` point into that library's code, so unloading it first
would leave them dangling.

## Fields

<a id="rustdoc-item-1125"></a>

### `_library`

```rust
_library: libloading::Library
```

The `hostfxr` library, kept loaded so the function pointers below stay
valid.

<a id="rustdoc-item-1126"></a>

### `runtime_handle`

```rust
runtime_handle: *mut std::ffi::c_void
```

The context handle that runtime initialization returned.

<a id="rustdoc-item-1127"></a>

### `close`

```rust
close: unsafe extern "System" fn (_: *mut std::ffi::c_void) -> i32
```

The `hostfxr_close` export; `Drop` calls it to release the context.

<a id="rustdoc-item-1128"></a>

### `load_assembly`

```rust
load_assembly: unsafe extern "System" fn (_: *const u16, _: *const u16, _: *const u16, _: *const u16, _: *const std::ffi::c_void, _: *mut *const std::ffi::c_void) -> i32
```

The `load_assembly_and_get_function_pointer` delegate that
`resolve_unmanaged_function_pointer` calls.

## Associated functions and methods

<a id="rustdoc-item-1134"></a>

### `new`

```rust
pub fn new(runtime_config: &Path) -> Result<Self, CSharpError>;
```

Loads `hostfxr`, starts .NET from the runtime configuration file at
`runtime_config`, and gets the runtime delegate named
`load_assembly_and_get_function_pointer`.

`runtime_config` is the runtime configuration file of the managed
runtime assembly: `hostfxr` reads the target framework and its version
from it.

#### Errors

- [`CSharpError::HostfxrOverrideNotAFile`]: `ECS_DOTNET_HOSTFXR` is set
  but does not name a file.
- [`CSharpError::HostfxrNotFound`]: no `host/fxr` version directory
  exists under any configured .NET root.
- [`CSharpError::HostfxrLoadFailed`]: the chosen library cannot be
  loaded.
- [`CSharpError::HostfxrExportMissing`]: the library lacks one of the
  three bootstrap exports.
- [`CSharpError::InteriorNul`]: the configuration path contains a NUL
  byte inside it.
- [`CSharpError::RuntimeInitializationFailed`]: `hostfxr` refuses to
  start the runtime, or returns no context handle.
- [`CSharpError::RuntimeDelegateFailed`]: `hostfxr` refuses the delegate
  request, or returns no delegate.

<a id="rustdoc-item-1136"></a>

### `resolve_unmanaged_function_pointer`

```rust
pub fn resolve_unmanaged_function_pointer<T: Copy>(self: &Self, assembly: &Path, type_name: &str, method_name: &str) -> Result<T, CSharpError>;
```

Turns an `UnmanagedCallersOnly` static method in a managed assembly into
a native function pointer.

`assembly` is the managed assembly file. `type_name` is the
assembly-qualified type name (`Namespace.Type, Assembly`), and
`method_name` is the name of the method in it. `T` must be the exact
native signature the managed method declares; the pointer is copied into
a `T` without any check of the signature.

#### Errors

- [`CSharpError::ManagedExportNotPointerSized`]: `T` is not the size of
  a pointer.
- [`CSharpError::InteriorNul`]: the assembly path, the type name or the
  method name contains a NUL byte inside it.
- [`CSharpError::ManagedEntryPointFailed`]: `hostfxr` reports failure, or
  returns no function pointer.

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
