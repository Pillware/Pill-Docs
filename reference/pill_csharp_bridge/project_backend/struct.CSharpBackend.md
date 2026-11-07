<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1833"></a>

# Struct `pill_csharp_bridge::project_backend::CSharpBackend`

```rust
pub struct CSharpBackend;
```

Source: `csharp\pill_csharp_bridge\src\project_backend.rs:51`

A shipped C# project: where its assemblies are, and how to host them.

A .NET assembly has no static form that could be linked in; it is always
loaded at run time. So this backend only loads it. Nothing is compiled, no
C# mirror sources are generated, and the assembly is not watched for
replacement.

## Fields

<a id="rustdoc-item-1830"></a>

### `posture`

```rust
posture: Posture
```

CoreCLR or NativeAOT.

<a id="rustdoc-item-1831"></a>

### `module_config`

```rust
module_config: crate::CSharpModuleConfig
```

Assembly names and output directories, in the same form a reloading
build gives them. A NativeAOT build uses only the project side, whose
output directory is the `dotnet publish` output.

<a id="rustdoc-item-1832"></a>

### `workspace_root`

```rust
workspace_root: std::path::PathBuf
```

Directory the output subdirectories in `module_config` are resolved
against.

A shipped bundle copies its assemblies beside the executable, and the
backend looks there first. This directory is the fallback, the
workspace the binary was built in.

## Associated functions and methods

<a id="rustdoc-item-1834"></a>

### `coreclr`

```rust
pub fn coreclr(module_config: CSharpModuleConfig, workspace_root: PathBuf) -> Self;
```

A project hosted by CoreCLR through hostfxr.

<a id="rustdoc-item-1835"></a>

### `native_aot`

```rust
pub fn native_aot(module_config: CSharpModuleConfig, workspace_root: PathBuf) -> Self;
```

A project published with NativeAOT and loaded as a native library.

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
- `ProjectBackend`
