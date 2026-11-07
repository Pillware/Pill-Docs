<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-512"></a>

# Struct `pill_csharp_bridge::backend::ManagedExports`

```rust
pub(in backend) struct ManagedExports;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:568`

Every managed export the host calls, resolved once per posture.

The postures differ only in how a function pointer is obtained - a
`(assembly, type, method)` triple through hostfxr's delegate, or a
`pill_*` symbol through `libloading`. Keeping that difference inside two
constructors lets one startup consume either, so the `unsafe`
system-registration closure and the transactional startup rollback have
one copy.

## Fields

<a id="rustdoc-item-631"></a>

### `init`

```rust
init: extern "System" fn (_: *const super::abi::CsEngineApi) -> u8
```

The managed runtime entry point that receives the API table.

<a id="rustdoc-item-632"></a>

### `system_count`

```rust
system_count: extern "System" fn () -> u32
```

Number of registered scheduler systems.

<a id="rustdoc-item-633"></a>

### `startup_count`

```rust
startup_count: extern "System" fn () -> u32
```

Number of managed startup methods.

<a id="rustdoc-item-634"></a>

### `system_uses_commands`

```rust
system_uses_commands: extern "System" fn (_: u32) -> u8
```

Whether one system declares a Commands parameter.

<a id="rustdoc-item-635"></a>

### `run_startup`

```rust
run_startup: extern "System" fn (_: u32) -> u8
```

Executes one managed startup method by index.

<a id="rustdoc-item-636"></a>

### `manifest_length`

```rust
manifest_length: extern "System" fn () -> u32
```

Byte length of the serialized component manifest.

<a id="rustdoc-item-637"></a>

### `copy_manifest`

```rust
copy_manifest: extern "System" fn (_: *mut u8, _: u32) -> u8
```

Copies the serialized component manifest into a caller buffer.

<a id="rustdoc-item-638"></a>

### `system_name_length`

```rust
system_name_length: extern "System" fn (_: u32) -> u32
```

Byte length of one system's reflected name.

<a id="rustdoc-item-639"></a>

### `copy_system_name`

```rust
copy_system_name: extern "System" fn (_: u32, _: *mut u8, _: u32) -> u8
```

Copies one system's reflected name into a caller buffer.

<a id="rustdoc-item-640"></a>

### `access_count`

```rust
access_count: extern "System" fn (_: u32) -> u32
```

Number of accesses one system declared.

<a id="rustdoc-item-641"></a>

### `get_access`

```rust
get_access: extern "System" fn (_: u32, _: u32, _: *mut super::abi::NativeSystemAccess) -> u8
```

Copies one system's reflected accesses into a caller buffer.

<a id="rustdoc-item-642"></a>

### `run_system`

```rust
run_system: extern "System" fn (_: u32) -> u8
```

Runs one scheduler system by index.

<a id="rustdoc-item-643"></a>

### `system_error_length`

```rust
system_error_length: extern "System" fn (_: u32) -> u32
```

Byte length of one system's last error message.

<a id="rustdoc-item-644"></a>

### `copy_system_error`

```rust
copy_system_error: extern "System" fn (_: u32, _: *mut u8, _: u32) -> u8
```

Copies one system's last error message into a caller buffer.

<a id="rustdoc-item-645"></a>

### `poll_reload`

```rust
poll_reload: extern "System" fn () -> u8
```

Polls the collectible loader for a rebuilt assembly.

<a id="rustdoc-item-646"></a>

### `pending_manifest_length`

```rust
pending_manifest_length: extern "System" fn () -> u32
```

Byte length of the manifest the pending version carries.

<a id="rustdoc-item-647"></a>

### `copy_pending_manifest`

```rust
copy_pending_manifest: extern "System" fn (_: *mut u8, _: u32) -> u8
```

Copies the pending version's manifest for validation.

<a id="rustdoc-item-648"></a>

### `commit_reload`

```rust
commit_reload: extern "System" fn () -> u8
```

Installs the pending version once its manifest is in force.

<a id="rustdoc-item-649"></a>

### `abort_reload`

```rust
abort_reload: extern "System" fn () -> u8
```

Discards the pending version when its manifest cannot be applied.

<a id="rustdoc-item-650"></a>

### `notify_assembly_replaced`

```rust
notify_assembly_replaced: Option<extern "System" fn ()>
```

Clears the loader's poll interval after an in-process compile.

## Associated functions and methods

<a id="rustdoc-item-651"></a>

### `from_dotnet`

```rust
pub(in backend) fn from_dotnet(runtime: &DotnetRuntimeContext, assembly: &Path, type_name: &str) -> Result<Self, CSharpError>;
```

Resolves every export through hostfxr's managed delegate.

The ABI contract is validated before any export is resolved: a runtime
built against different signatures must be rebuilt before a single one
of its pointers can be trusted.

<a id="rustdoc-item-652"></a>

### `from_aot`

```rust
pub(in backend) fn from_aot(runtime: &AotRuntimeContext) -> Result<Self, CSharpError>;
```

Resolves every export by its `pill_*` symbol in the AOT library.

Same contract gate as [`Self::from_dotnet`](#rustdoc-item-651), applied before any symbol
is read.

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
