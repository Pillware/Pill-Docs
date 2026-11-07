<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-333"></a>

# Enum `pill_core::error::host::LibraryError`

```rust
pub enum LibraryError { ... }
```

Source: `engine\pill_core\src\error\host.rs:355`

Native project-library loading and initialization failures.

One variant for each step: preparing the per-process temporary directory,
copying the artifact there, mapping it, resolving its imports, and calling
its `pill_module_init` entry point.

The loader's own error arrives as a boxed source. `pill_core` is the shared
dylib that every posture links, so it may not name `libloading`. The real
cause still reaches the reader through `Error::source()` and the error
chain.

## Variants

<a id="rustdoc-item-310"></a>

### `TemporaryDirectory`

```rust
TemporaryDirectory
```

The per-process temporary directory could not be created.

<a id="rustdoc-item-314"></a>

### `CopyFailed`

```rust
CopyFailed
```

The built library could not be copied to its temporary path.

<a id="rustdoc-item-317"></a>

### `LoadFailed`

```rust
LoadFailed
```

The temporary copy is not a loadable native library.

<a id="rustdoc-item-321"></a>

### `EngineDylibMismatch`

```rust
EngineDylibMismatch
```

The artifact was linked against a different engine dylib than the host
has mapped, so the loader cannot resolve its imports.

Cargo puts the features a dependency resolved into the `-C metadata` of
the crate that uses it, and that hash is part of every symbol name
`pill_core` exports. Two builds that resolved different feature sets
therefore produce two `pill_core.dll` files with different symbols, and
an artifact built against one cannot load against the other. Windows
reports that as `LoadLibrary` error 127, "The specified procedure could
not be found", which names neither the dylib nor the feature.

Copying the matching dylib beside the artifact does not help. The loader
uses the copy already mapped in the process, whatever directory a new
one sits in, and the host maps `pill_core.dll` before it builds
anything.

<a id="rustdoc-item-326"></a>

### `MissingImport`

```rust
MissingImport
```

A named import the module needs is not exported by the copy of the
imported DLL the loader would use.

Windows reports a missing named import as `LoadLibrary` error 127,
"The specified procedure could not be found", naming neither the DLL
nor the symbol. Comparing the module's import table with the export
table of each candidate copy says which symbol is missing and which
copy was looked at.

<a id="rustdoc-item-330"></a>

### `MissingExport`

```rust
MissingExport
```

The library does not export a required entry point.

The error names the artifact as well as the symbol. A project and an
extension export the same entry points, so the symbol alone would not
say which artifact is missing one.

<a id="rustdoc-item-332"></a>

### `InitializationFailed`

```rust
InitializationFailed
```

`pill_module_init` reported a failed generation.

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
- `From<LibraryError>`
