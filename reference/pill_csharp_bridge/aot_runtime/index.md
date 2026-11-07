<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-361"></a>

# Module `pill_csharp_bridge::aot_runtime`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\aot_runtime.rs:1`

Loads the native library of a C# project published with NativeAOT.
NativeAOT library loader for the managed backend.

A C# project runs in one of two postures. The framework-dependent posture
starts CoreCLR through hostfxr and looks the `LoaderInterop` exports up with
the `load_assembly_and_get_function_pointer` delegate.

The NativeAOT posture loads the native library produced by
`dotnet publish -p:PublishAot=true`, which has a trimmed runtime embedded in
it. This module opens that library with `libloading` and looks the same
exports up directly by their `pill_*` symbol names. This posture needs no
hostfxr, no installed .NET and no JIT.

## Responsibilities

- Load the AOT-published native library and resolve the `pill_*` exports.
- Keep the loader's call surface identical to the hostfxr path's.

## Design

Everything downstream (system discovery, scheduler registration, per-frame
dispatch) is shared with the hostfxr path. Only the way the function
pointers are obtained differs.

## Module contents

### Structs
- [`AotRuntimeContext`](struct.AotRuntimeContext.md#rustdoc-item-362) — Owns a loaded NativeAOT library and resolves its unmanaged exports.
