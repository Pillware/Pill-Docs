<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2168"></a>

# pill_csharp_bridge API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The Rust half of the C#/Rust ABI: runs a C# project inside the engine.

## Responsibilities

- Starts the .NET runtime used by managed gameplay assemblies (CoreCLR
  through hostfxr, or a NativeAOT library).
- Exposes native ECS component storage to managed query iterators.
- Converts reflected C# query access into Rust scheduler metadata.
- With `hot_reload`, swaps a rebuilt project assembly into the running
  engine.

## Design

`pill_csharp_runtime` is the managed half of this boundary, and the two
change together. [`INTEROP_CONTRACT_VERSION`](backend/constant.INTEROP_CONTRACT_VERSION.md#rustdoc-item-156) is checked from both sides
when the runtime starts. [`csharp_runtime`](csharp_runtime/index.md#rustdoc-item-1140) owns the low-level .NET hosting
boundary. The remaining modules split ABI layout, registration, invocation
scope, queries, commands and backend lifecycle. [`CSharpRuntime`](backend/struct.CSharpRuntime.md#rustdoc-item-510) is the
entry point.

Mirror generation and the in-process Roslyn compiler live in
`pill_development_host`. This crate reads no project settings, builds
nothing and watches no files. A shipped C# project reaches `pill_player`
as a [`CSharpBackend`](project_backend/struct.CSharpBackend.md#rustdoc-item-1858) implementing `pill_player::ProjectBackend`; the
bridge depends on `pill_player`, never the other way round.

## Module contents

### Modules
- [`abi`](abi/index.md#rustdoc-item-6) — C-compatible data structures and callback table shared with the managed runtime.
- [`aot_runtime`](aot_runtime/index.md#rustdoc-item-364) — Loads the native library of a C# project published with NativeAOT.
- [`backend`](backend/index.md#rustdoc-item-403) — High-level C# project startup, discovery, and scheduler registration.
- [`commands`](commands/index.md#rustdoc-item-718) — Native callbacks that translate C# lifecycle requests into deferred ECS commands.
- [`components`](components/index.md#rustdoc-item-803) — C# component identities, native bindings, and manifest registration.
- [`config`](config/index.md#rustdoc-item-1045) — Output locations and assembly names of a managed project.
- [`context`](context/index.md#rustdoc-item-1052) — Thread-local access scope installed around one scheduled C# system.
- [`csharp_runtime`](csharp_runtime/index.md#rustdoc-item-1140) — Low-level .NET hosting bootstrap used by the C# project backend.
- [`frame_state`](frame_state/index.md#rustdoc-item-1223) — Read-only frame state for managed code: input and time.
- [`managed_buffer`](managed_buffer/index.md#rustdoc-item-1268) — The two-call protocol that carries every managed payload across the boundary.
- [`manifest`](manifest/index.md#rustdoc-item-1270) — C# component manifest schema, field validation, and engine type mapping.
- [`manifest_apply`](manifest_apply/index.md#rustdoc-item-992) — The single pipeline that applies every kind of manifest.
- [`mirror_calls`](mirror_calls/index.md#rustdoc-item-1751) — The native calls the mirror ABI needs besides its trampolines: text
- [`mirror_naming`](mirror_naming/index.md#rustdoc-item-1771) — The naming rules a generated C# mirror's fields follow.
- [`parallel`](parallel/index.md#rustdoc-item-1776) — Parallel dispatch of managed callbacks onto the shared Rayon pool.
- [`project_backend`](project_backend/index.md#rustdoc-item-1819) — A shipped C# project as the runtime's external project backend.
- [`queries`](queries/index.md#rustdoc-item-1897) — Native callbacks used by C# query enumerators.
- [`resources`](resources/index.md#rustdoc-item-2018) — Managed resource registration and the callback that serves resource bytes.

### Structs
- [`ResolvedFieldAccessor`](struct.ResolvedFieldAccessor.md#rustdoc-item-2136) — One heap-field accessor resolved to callable addresses, shared by the
- [`ResolvedMirrorMethod`](struct.ResolvedMirrorMethod.md#rustdoc-item-194) — One mirrored Rust method, resolved to a callable address, shared by the

### Functions
- [`accessor_operation_name`](fn.accessor_operation_name.md#rustdoc-item-2166) — Returns the name a generated `MirrorMethods.Resolve` call and the host's
- [`accessor_rows`](fn.accessor_rows.md#rustdoc-item-2167) — Converts heap-field accessors into mirror-method rows. The managed

## Re-exports

- [`pub use abi::publish_mirror_methods;`](abi/fn.publish_mirror_methods.md#rustdoc-item-9)
- [`pub use backend::CSharpRuntime;`](backend/struct.CSharpRuntime.md#rustdoc-item-510)
- [`pub use backend::INTEROP_CONTRACT_VERSION;`](backend/constant.INTEROP_CONTRACT_VERSION.md#rustdoc-item-156)
- [`pub use backend::POLL_MANIFEST_PENDING;`](backend/constant.POLL_MANIFEST_PENDING.md#rustdoc-item-400)
- [`pub use backend::POLL_NO_CHANGE;`](backend/constant.POLL_NO_CHANGE.md#rustdoc-item-397)
- [`pub use backend::POLL_REJECTED;`](backend/constant.POLL_REJECTED.md#rustdoc-item-399)
- [`pub use backend::POLL_RELOADED;`](backend/constant.POLL_RELOADED.md#rustdoc-item-398)
- [`pub use config::CSharpModuleConfig;`](config/struct.CSharpModuleConfig.md#rustdoc-item-519)
- [`pub use csharp_runtime::DotnetRuntimeContext;`](csharp_runtime/struct.DotnetRuntimeContext.md#rustdoc-item-464)
- [`pub use managed_buffer::fetch_managed_buffer;`](managed_buffer/fn.fetch_managed_buffer.md#rustdoc-item-1266)
- [`pub use managed_buffer::ManagedBufferError;`](managed_buffer/enum.ManagedBufferError.md#rustdoc-item-1230)
- [`pub use mirror_naming::is_heap_owned_tag;`](mirror_naming/fn.is_heap_owned_tag.md#rustdoc-item-1767)
- [`pub use mirror_naming::is_opaque_container_tag;`](mirror_naming/fn.is_opaque_container_tag.md#rustdoc-item-1768)
- [`pub use mirror_naming::snake_to_pascal;`](mirror_naming/fn.snake_to_pascal.md#rustdoc-item-1770)
- [`pub use mirror_naming::split_array_tag;`](mirror_naming/fn.split_array_tag.md#rustdoc-item-1769)
- [`pub use project_backend::CSharpBackend;`](project_backend/struct.CSharpBackend.md#rustdoc-item-1858)
- [`pub use components::exposed_components_from_names;`](components/fn.exposed_components_from_names.md#rustdoc-item-908)
- [`pub use components::ModuleExposedComponent;`](components/struct.ModuleExposedComponent.md#rustdoc-item-520)
