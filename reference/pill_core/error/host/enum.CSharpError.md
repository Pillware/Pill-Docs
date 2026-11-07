<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-518"></a>

# Enum `pill_core::error::host::CSharpError`

```rust
pub enum CSharpError { ... }
```

Source: `engine\pill_core\src\error\host.rs:580`

Managed (C#) backend startup and registration failures.

One variant for each step: finding and loading hostfxr, resolving the
runtime delegates, exchanging the component manifest, generating the host's
C# mirror, and starting the managed systems.

The loader's own error arrives as a boxed source. `pill_core` is the shared
dylib that every posture links, so it may not name `libloading`. The real
cause still reaches the reader through `Error::source()` and the error
chain.

## Variants

<a id="rustdoc-item-455"></a>

### `HostfxrNotFound`

```rust
HostfxrNotFound
```

No hostfxr installation was found in any configured dotnet root.

<a id="rustdoc-item-457"></a>

### `HostfxrOverrideNotAFile`

```rust
HostfxrOverrideNotAFile
```

The `ECS_DOTNET_HOSTFXR` override does not point at a file.

<a id="rustdoc-item-460"></a>

### `HostfxrLoadFailed`

```rust
HostfxrLoadFailed
```

The selected hostfxr library could not be loaded.

<a id="rustdoc-item-462"></a>

### `AotLibraryNotFound`

```rust
AotLibraryNotFound
```

The NativeAOT library could not be found on disk.

<a id="rustdoc-item-465"></a>

### `AotLibraryLoadFailed`

```rust
AotLibraryLoadFailed
```

The NativeAOT library could not be loaded.

<a id="rustdoc-item-468"></a>

### `AotExportMissing`

```rust
AotExportMissing
```

A required export is missing from the NativeAOT library.

<a id="rustdoc-item-471"></a>

### `HostfxrExportMissing`

```rust
HostfxrExportMissing
```

A required hostfxr export is missing.

<a id="rustdoc-item-473"></a>

### `RuntimeInitializationFailed`

```rust
RuntimeInitializationFailed
```

Runtime initialization failed with a negative hostfxr status.

<a id="rustdoc-item-475"></a>

### `RuntimeDelegateFailed`

```rust
RuntimeDelegateFailed
```

The runtime delegate request failed with a negative hostfxr status.

<a id="rustdoc-item-476"></a>

### `ManagedExportNotPointerSized`

```rust
ManagedExportNotPointerSized
```

The managed export type is not a pointer-sized function pointer.

<a id="rustdoc-item-479"></a>

### `ManagedEntryPointFailed`

```rust
ManagedEntryPointFailed
```

A managed entry point could not be resolved or returned no pointer.

<a id="rustdoc-item-480"></a>

### `RuntimeInitFailed`

```rust
RuntimeInitFailed
```

The managed loader rejected host initialization.

<a id="rustdoc-item-482"></a>

### `CodegenFailed`

```rust
CodegenFailed
```

The host-side C# mirror codegen step failed.

<a id="rustdoc-item-485"></a>

### `InteropVersionMismatch`

```rust
InteropVersionMismatch
```

The managed runtime was built for a different ABI contract version.

<a id="rustdoc-item-488"></a>

### `ManifestLengthOutOfRange`

```rust
ManifestLengthOutOfRange
```

The managed-reported manifest length lies outside the supported range.

<a id="rustdoc-item-491"></a>

### `SystemCountOutOfRange`

```rust
SystemCountOutOfRange
```

A managed-reported system or access count exceeds what the host
reflects.

The count decides how much memory the host reserves before it reads any
item, so it is checked against a fixed limit first. Without that check a
buggy assembly could ask for an allocation that aborts the process
instead of failing startup.

<a id="rustdoc-item-492"></a>

### `SystemSnapshotAllocationFailed`

```rust
SystemSnapshotAllocationFailed
```

The reflected system snapshot could not be allocated.

<a id="rustdoc-item-494"></a>

### `UnknownPollStatus`

```rust
UnknownPollStatus
```

The managed loader reported a reload status the host does not know.

The poll answers `0` (nothing happened), `1` (swapped), `2` (rejected)
or `3` (a rebuilt assembly is waiting for its manifest to be applied).
Anything else means the ABI drifted or the loader failed. Treating it
as "nothing happened" would keep the previous assembly running without
saying so anywhere.

<a id="rustdoc-item-495"></a>

### `ManifestAllocationFailed`

```rust
ManifestAllocationFailed
```

The manifest buffer could not be allocated.

<a id="rustdoc-item-496"></a>

### `ManifestCopyFailed`

```rust
ManifestCopyFailed
```

The manifest copy from the managed runtime failed.

<a id="rustdoc-item-499"></a>

### `ManifestParseFailed`

```rust
ManifestParseFailed
```

The managed component manifest failed host-side JSON parsing.

<a id="rustdoc-item-501"></a>

### `ManifestInvalid`

```rust
ManifestInvalid
```

The managed component manifest failed host-side validation.

<a id="rustdoc-item-503"></a>

### `StartupFailed`

```rust
StartupFailed
```

A reflected managed startup method failed.

<a id="rustdoc-item-505"></a>

### `StartupCommandsFailed`

```rust
StartupCommandsFailed
```

Queued startup commands failed to apply.

<a id="rustdoc-item-507"></a>

### `NoSystems`

```rust
NoSystems
```

The managed assembly contains no schedulable systems.

<a id="rustdoc-item-510"></a>

### `SystemAccessFailed`

```rust
SystemAccessFailed
```

The managed runtime refused to copy one system access declaration.

<a id="rustdoc-item-512"></a>

### `UnknownAccessMode`

```rust
UnknownAccessMode
```

A reflected access mode is neither read nor write.

<a id="rustdoc-item-514"></a>

### `UnregisteredComponent`

```rust
UnregisteredComponent
```

A reflected access references a component the host never registered.

<a id="rustdoc-item-516"></a>

### `UnregisteredResource`

```rust
UnregisteredResource
```

A reflected access references a resource the host never registered.

In almost every case the resource struct is missing `[EcsResource]`, so
the manifest never told the host about it, even though a system asks
for it through `Res<T>` or `ResMut<T>`.

<a id="rustdoc-item-517"></a>

### `InteriorNul`

```rust
InteriorNul
```

A managed string passed to hostfxr contains an interior NUL.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `EngineMessage`
- `From<String>`
- `From<Error>`
- `From<CSharpError>`
