<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2092"></a>

# Struct `pill_development_host::native_library::NativeLibrary`

```rust
pub(crate) struct NativeLibrary;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\native_library.rs:608`

Owns one loaded native library, either the project or an extension.

Export symbols are resolved once during loading and stored as raw function
pointers. The pointers stay valid for as long as the `library` field keeps
the module mapped, so frame-loop calls never perform a dynamic lookup or
panic on a missing optional export.

## Fields

<a id="rustdoc-item-3192"></a>

### `library`

```rust
library: Option<libloading::Library>
```

Loaded module handle; keeps the native library mapped in memory.

<a id="rustdoc-item-3193"></a>

### `declaration_baseline`

```rust
declaration_baseline: pill_engine::declarations::DeclarationBaseline
```

Declarations the process already held when this image was mapped.

The entry points register declarations from this position, so a
reloaded generation declares its own systems, resources and asset types
and leaves the retired generation's - whose image the host keeps mapped
- alone.

<a id="rustdoc-item-3195"></a>

### `module_init`

```rust
module_init: unsafe extern "C" fn (_: *const pill_engine::EngineApi) -> u32
```

Required registration entry point, resolved once at load time.

<a id="rustdoc-item-3196"></a>

### `module_register`

```rust
module_register: Option<unsafe extern "C" fn (_: *const pill_engine::EngineApi) -> u32>
```

Optional registration-only entry point, resolved once at load time.

`None` means the artifact predates the split and must be called through
`pill_module_init` on every generation.

<a id="rustdoc-item-3197"></a>

### `abi_version`

```rust
abi_version: Option<u32>
```

ABI revision the module reports, when it exports one.

<a id="rustdoc-item-3198"></a>

### `value_type_count`

```rust
value_type_count: Option<unsafe extern "C" fn () -> u32>
```

Optional value-type manifest exports (`#[derive(PillMirror)]`), used by
the C# mirror codegen to resolve nested struct tags.

<a id="rustdoc-item-3199"></a>

### `copy_value_types`

```rust
copy_value_types: Option<unsafe extern "C" fn (_: *mut pill_engine::component_registry::PillValueTypeDescriptor, _: u32) -> u32>
```

_No documentation provided._

<a id="rustdoc-item-3200"></a>

### `mirror_method_count`

```rust
mirror_method_count: Option<unsafe extern "C" fn () -> u32>
```

Optional mirrored-method manifest exports (`#[pill_mirror_impl]`),
used by the C# mirror codegen and runtime method table.

<a id="rustdoc-item-3201"></a>

### `copy_mirror_methods`

```rust
copy_mirror_methods: Option<unsafe extern "C" fn (_: *mut pill_engine::component_registry::PillMethodDescriptor, _: u32) -> u32>
```

_No documentation provided._

<a id="rustdoc-item-3202"></a>

### `field_accessor_count`

```rust
field_accessor_count: Option<unsafe extern "C" fn () -> u32>
```

Optional heap-field accessor manifest exports (`#[derive(PillComponent)]`
components with `Vec`/`String` fields), used by the C# mirror codegen
and the managed runtime's method table.

<a id="rustdoc-item-3203"></a>

### `copy_field_accessors`

```rust
copy_field_accessors: Option<unsafe extern "C" fn (_: *mut pill_engine::component_registry::PillFieldAccessorDescriptor, _: u32) -> u32>
```

_No documentation provided._

<a id="rustdoc-item-3204"></a>

### `temporary_path`

```rust
temporary_path: std::path::PathBuf
```

Temporary copy backing this library; deleted when the library drops.

## Associated functions and methods

<a id="rustdoc-item-3211"></a>

### `load_copy`

```rust
pub(crate) fn load_copy(build_output: &Path, workspace_root: &Path, module_name: &str) -> Result<Self, LibraryError>;
```

Copy and load the built shared library from a unique temporary path.

#### Errors

Returns [`LibraryError::TemporaryDirectory`] when a staging directory
cannot be created, [`LibraryError::CopyFailed`] when the artifact cannot
be staged, [`LibraryError::LoadFailed`] when the copy is not a loadable
native library, and [`LibraryError::MissingExport`] when it does not
export `pill_module_init`. A load failure is then re-stated as
[`LibraryError::MissingImport`] or [`LibraryError::EngineDylibMismatch`]
when the gathered evidence supports one of those answers.

<a id="rustdoc-item-3212"></a>

### `abi_version`

```rust
pub(crate) fn abi_version(self: &Self) -> Option<u32>;
```

ABI revision reported by the module, when it exports one.

`None` means the library predates the versioned contract; the caller
decides whether that is acceptable for its module kind.

<a id="rustdoc-item-3213"></a>

### `fetch_descriptors`

```rust
pub(in native_library) fn fetch_descriptors<T: Clone>(self: &Self, prototype: T, count_export: Option<unsafe extern "C" fn () -> u32>, copy_export: Option<unsafe extern "C" fn (_: *mut T, _: u32) -> u32>) -> Vec<T>;
```

Run one descriptor table's count/copy export protocol.

Every table the host fetches (value types, mirror methods, field
accessors) follows the same shape: a count export, then a copy export
filling a host-owned buffer of that many slots and answering how many
it wrote. The one `unsafe` call pair that protocol needs lives here.

<a id="rustdoc-item-3214"></a>

### `value_type_descriptors`

```rust
pub(crate) fn value_type_descriptors(self: &Self) -> Vec<PillValueTypeDescriptor>;
```

Fetch the artifact's `#[derive(PillMirror)]` value-type descriptors.

Empty when the artifact predates the exports or declares no value
types. The returned descriptors reference static data inside this
loaded library, which stays mapped for the library's lifetime.

<a id="rustdoc-item-3215"></a>

### `mirror_methods`

```rust
pub(crate) fn mirror_methods(self: &Self) -> Vec<ResolvedMirrorMethod>;
```

Fetches the artifact's mirror descriptors: its mirrored functions and
the rows that describe its mirrored types. Each function row carries the
address of the trampoline the artifact compiled for it.

Nothing is looked up by symbol, because the artifact fills the address
into the descriptor itself. The list is empty when the artifact was built
before these exports or mirrors nothing. A function row with no address
is skipped, so a broken descriptor never gives C# a callable that points
at nothing. A type row without an address (an enum's or a resource's) is
kept, because the codegen needs it.

<a id="rustdoc-item-3216"></a>

### `field_accessors`

```rust
pub(crate) fn field_accessors(self: &Self) -> Vec<ResolvedFieldAccessor>;
```

Fetches the artifact's heap-field accessor descriptors. Each returned
row carries the addresses of the `#[no_mangle]` trampolines for one
field.

The list is empty when the artifact was built before these exports or
declares no heap fields. An operation whose trampoline the artifact does
not export is reported as `None`. A descriptor whose operations all
failed is skipped, so the host never publishes a row that cannot be
called. Checking which operations a mirror really needs is left to the
codegen, which knows the field's kind.

<a id="rustdoc-item-3217"></a>

### `load`

```rust
pub(in native_library) unsafe fn load(path: &Path, temporary_path: PathBuf, module_name: &str, isolated_engine: bool) -> Result<Self, LibraryError>;
```

Loads the staged module at `path` and resolves its required exports.

`temporary_path` is that same file, kept so the returned `NativeLibrary`
can delete the copy when it drops. `module_name` labels the artifact in
errors. `isolated_engine` records whether the module loads against
engine dylibs staged beside it.

#### Safety

`path` must point to a valid native library whose `pill_module_init`
export uses the expected C ABI.

<a id="rustdoc-item-3219"></a>

### `call_register`

```rust
pub(crate) fn call_register(self: &Self, api: &EngineApi) -> Option<u32>;
```

Calls the registration-only entry point, when the artifact exports one.

Returns `None` when it does not: the caller then has to use
[`Self::call_init`](#rustdoc-item-3218) and accept that the artifact's one-time work runs
again.

<a id="rustdoc-item-3218"></a>

### `call_init`

```rust
pub(crate) fn call_init(self: &Self, api: &EngineApi) -> u32;
```

Calls the module's registration entry point.

Returns the module's status code. Zero means registration succeeded.
Any other value means the module failed to initialize, so the caller
must keep the previous generation active.

<a id="rustdoc-item-3222"></a>

### `check_module_abi`

```rust
pub(crate) fn check_module_abi(self: &Self, module_name: &str) -> Result<(), ModuleError>;
```

Rejects an artifact built against a different revision of the module ABI.

An artifact may export `pill_module_abi_version`. When it does, this
compares that revision with the host's before anything calls into it. A
mismatch means the two sides disagree about what the entry points
expect, and a call through them would use a shape one side never agreed
to. An artifact with no such export was built before the contract was
versioned.

#### Errors

Returns [`ModuleError::AbiVersionMismatch`] when the revisions differ,
and [`ModuleError::AbiVersionMissing`] when the export is absent.

<a id="rustdoc-item-3224"></a>

### `resolve_export`

```rust
pub(crate) unsafe fn resolve_export<T: Copy>(self: &Self, name: &[u8]) -> Option<T>;
```

Finds an export that only one kind of caller knows about, or `None` when
the library does not export it.

The loader keeps the exports every artifact may have. An export that
belongs to one module's own contract, such as the renderer's attach and
detach entry points or a shader reload function, is looked up here by
the caller that knows its signature. That keeps `NativeLibrary` from
growing a field for every such module.

#### Safety

`T` must be the export's exact function-pointer type. The pointer is
valid only while this library stays mapped.

<a id="rustdoc-item-3225"></a>

### `install_plain_function`

```rust
pub(crate) fn install_plain_function(self: &Self, qualified_name: &str, address: usize, signature: &str) -> Result<bool, String>;
```

Offers a replacement implementation to this artifact's copy of one
`#[pill_hot_fn]`.

A crate linked into several artifacts gets compiled into each of them,
so one edited function has an independent redirect slot in every artifact
that links it. The host therefore offers the same replacement to every
loaded library instead of assuming that one of them owns the function.

Returns `Ok(true)` when this artifact installed the replacement. Returns
`Ok(false)` when the artifact declares no such function, which includes a
library built before this ABI that exports no resolver at all. Returns
`Err` when the artifact refused because the signature no longer matches.

<a id="rustdoc-item-3226"></a>

### `extent_coverage`

```rust
pub(crate) fn extent_coverage(self: &Self) -> Option<(usize, usize)>;
```

Returns how many of this artifact's functions have a length that the
exception directory records, and how many it has in total, as
`(known, total)`.

Only a function with a known length can be patched at its prologue, so
this turns a refusal into a diagnosis: it shows whether the one function
happens to be a leaf, or whether nothing in the artifact is reachable by
that route. Returns `None` when the artifact exports no such report.

<a id="rustdoc-item-3227"></a>

### `function_address`

```rust
pub(crate) fn function_address(self: &Self, qualified_name: &str) -> Option<(usize, Option<String>)>;
```

Returns the address of any function in this artifact, with the
declaration it was built with. Both come from the inventory the build
script writes, not from an attribute.

The declaration is the compatibility check for the prologue route, and
the only chance to refuse a reshaped function: overwriting a function's
first bytes cannot check what it jumps to. An artifact whose inventory
holds no declaration reports `None`, and the check refuses that case
rather than treating it as nothing to verify.

Returns `None` when the artifact exports no address resolver or has no
entry for the name.

<a id="rustdoc-item-3228"></a>

### `reset_plain_function`

```rust
pub(crate) fn reset_plain_function(self: &Self, qualified_name: &str) -> Result<bool, String>;
```

Returns this artifact's copy of one `#[pill_hot_fn]` to its own body.

This is the counterpart of [`Self::install_plain_function`](#rustdoc-item-3225), and it is
what a rollback uses: each artifact restores the code it was compiled
with, instead of being handed an address that belongs to another image.

Returns `Ok(true)` when this artifact emptied the slot. Returns
`Ok(false)` when it declares no such function or exports no resolver.

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
