<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1387"></a>

# Struct `pill_development_host::csharp::fast_compile::FastCompiler`

```rust
pub(crate) struct FastCompiler;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\fast_compile.rs:121`

The loaded managed compiler, bound to one project's captured command line.

## Fields

<a id="rustdoc-item-1382"></a>

### `compile`

```rust
compile: extern "System" fn (_: *const u8, _: *const u8) -> i32
```

`Compile` export.

<a id="rustdoc-item-1383"></a>

### `diagnostics_length`

```rust
diagnostics_length: extern "System" fn () -> u32
```

`DiagnosticsLength` export.

<a id="rustdoc-item-1384"></a>

### `copy_diagnostics`

```rust
copy_diagnostics: extern "System" fn (_: *mut u8, _: u32) -> u8
```

`CopyDiagnostics` export.

<a id="rustdoc-item-1385"></a>

### `response_file_path`

```rust
response_file_path: std::path::PathBuf
```

Absolute path of the file holding the captured compiler arguments.

<a id="rustdoc-item-1386"></a>

### `output_assembly_path`

```rust
output_assembly_path: std::path::PathBuf
```

Absolute path the recompiled project assembly is written to.

## Associated functions and methods

<a id="rustdoc-item-1388"></a>

### `try_new`

```rust
pub(crate) fn try_new(runtime: &DotnetRuntimeContext, workspace_root: &Path, config: &CSharpModuleConfig) -> Option<Self>;
```

Build the compiler assembly, load it, and start its warmup.

Returns `None` when the fast path cannot be set up: there is no captured
command line to replay (a project shape that never hot reloads), the
compiler build fails, or the assembly is missing an export or implements
another ABI version. Build and load failures are each logged with one
warning; either way the host stays on the ordinary `dotnet build` path,
so a broken fast path costs reload speed and nothing else.

<a id="rustdoc-item-1391"></a>

### `resolve`

```rust
pub(in csharp::fast_compile) fn resolve(runtime: &DotnetRuntimeContext, compiler_assembly_path: &Path, response_file_path: PathBuf, output_assembly_path: PathBuf) -> Result<Self, CSharpError>;
```

Resolve every export and check the contract version.

#### Errors

Returns the export-resolution errors of
[`DotnetRuntimeContext::get_unmanaged_fn`] when the assembly lacks one of
the exports above, and [`CSharpError::InteropVersionMismatch`] when the
assembly implements a different contract than this host was built
against.

<a id="rustdoc-item-1393"></a>

### `start_warmup`

```rust
pub(in csharp::fast_compile) fn start_warmup(self: &Self, runtime: &DotnetRuntimeContext, compiler_assembly_path: &Path);
```

Ask the compiler to prepare its caches on a background thread.

This is best effort: if the export is missing or the request cannot be
made, the first reload simply pays the full Roslyn startup cost.

<a id="rustdoc-item-1394"></a>

### `compile`

```rust
pub(crate) fn compile(self: &Self, workspace_root: &Path, watch_directory: &str) -> FastCompileOutcome;
```

Recompile the project in-process, or say why that was not possible.

`watch_directory` is the project's source directory, relative to the
workspace root. The captured source list is checked against it.

<a id="rustdoc-item-1395"></a>

### `diagnostics`

```rust
pub(in csharp::fast_compile) fn diagnostics(self: &Self) -> String;
```

Read back the last compile's diagnostics as UTF-8.

A compile with nothing to report has no diagnostics, which is an empty
string rather than a failure. Any other problem reading them is returned
as text: the caller is already handling a failure and has nowhere better
to put an error.

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
