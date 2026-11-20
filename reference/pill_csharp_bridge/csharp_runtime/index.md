<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1140"></a>

# Module `pill_csharp_bridge::csharp_runtime`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\csharp_runtime.rs:1`

Low-level .NET hosting bootstrap used by the C# project backend.
Loads the .NET hosting library (`hostfxr`) and drives it for the C# project
backend.

## Responsibilities

- Finds the newest installed `hostfxr` library.
- Starts .NET from a managed runtime configuration file.
- Turns methods marked `UnmanagedCallersOnly` into native function pointers.
- Keeps the native hosting library and the runtime context alive.

## Design

This module knows nothing about the ECS. It is a thin layer over the
`hostfxr` ABI and hands typed function pointers back to the managed backend
registration code.

The file is named `csharp_runtime.rs`, but the library and export names come
from Microsoft (`hostfxr`), so they are not renamed.

## Module contents

### Structs
- [`DotnetRuntimeContext`](struct.DotnetRuntimeContext.md#rustdoc-item-464) — Owns one initialized .NET runtime context and the delegate that loads
- [`HostfxrVersion`](struct.HostfxrVersion.md#rustdoc-item-1188) — One installed `hostfxr` candidate with its parsed version key.

### Functions
- [`collect_hostfxr_versions`](fn.collect_hostfxr_versions.md#rustdoc-item-1214) — Adds every version directory under one .NET root's `host/fxr` to
- [`dotnet_roots`](fn.dotnet_roots.md#rustdoc-item-1213) — The .NET installation roots to search, in the order they are read.
- [`find_hostfxr_library_path`](fn.find_hostfxr_library_path.md#rustdoc-item-1212) — Finds the newest installed `hostfxr` library.
- [`host_string`](fn.host_string.md#rustdoc-item-1216) — Encodes an OS string as nul-terminated UTF-16 for Windows `hostfxr`.
- [`parse_hostfxr_version`](fn.parse_hostfxr_version.md#rustdoc-item-1215) — Splits a `hostfxr` directory name into a version key that can be compared.

### Type aliases
- [`CloseFn`](type.CloseFn.md#rustdoc-item-1145) — Signature of the `hostfxr_close` export.
- [`GetDelegateFn`](type.GetDelegateFn.md#rustdoc-item-1144) — Signature of the `hostfxr_get_runtime_delegate` export.
- [`HostChar`](type.HostChar.md#rustdoc-item-1141) — The character type `hostfxr` expects in strings on this platform.
- [`InitializeFn`](type.InitializeFn.md#rustdoc-item-1143) — Signature of the `hostfxr_initialize_for_runtime_config` export.
- [`LoadAssemblyFn`](type.LoadAssemblyFn.md#rustdoc-item-1146) — Signature of the `load_assembly_and_get_function_pointer` runtime delegate.
- [`RuntimeHandle`](type.RuntimeHandle.md#rustdoc-item-1142) — An opaque handle to one initialized `hostfxr` runtime context.

### Constants
- [`LOAD_ASSEMBLY_AND_GET_FUNCTION_POINTER`](constant.LOAD_ASSEMBLY_AND_GET_FUNCTION_POINTER.md#rustdoc-item-1139) — The `hostfxr_delegate_type::hdt_load_assembly_and_get_function_pointer`
