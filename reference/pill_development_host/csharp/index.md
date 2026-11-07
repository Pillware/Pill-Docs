<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1331"></a>

# Module `pill_development_host::csharp`

Visibility: `crate` · Source: `hosting\pill_development_host\src\csharp\mod.rs:1`

C# development tooling on top of `pill_csharp_bridge`: generates the C#
mirrors, runs the in-process compiler, and re-exports the bridge items the
host names.

A shipped C# project needs none of it: it starts through the bridge's
`CSharpBackend`, run by the bridge's runtime.
C# development tooling over the `pill_csharp_bridge` backend.

## Responsibilities

- Generates the C# mirrors for the components, value types, object
  classes, enums, resource markers and free functions an extension exposes
  to managed code.
- Recompiles the project in-process with Roslyn on a hot reload.
- Pairs the bridge's [`CSharpRuntime`] with that compiler as the host's
  managed project, [`CSharpProject`].
- Re-exports the bridge items the rest of the host names, under one path.

## Design

The bridge owns everything needed to run C#: hosting .NET, the ABI,
components, systems and the reload poll. A C# shipping bundle links the
bridge without this crate. This module holds only what exists while
developing: the generated mirrors and the compiler. The whole module is
`hot_reload` only.

## Module contents

### Modules
- [`codegen`](codegen/index.md#rustdoc-item-1288) — Host-side generation of a module's `<module>_Components.g.cs` mirror file.
- [`fast_compile`](fast_compile/index.md#rustdoc-item-1342) — In-process Roslyn compilation of the C# project, which replaces MSBuild on
- [`mirror_codegen`](mirror_codegen/index.md#rustdoc-item-1426) — The C# members, object classes, enums and resource markers generated from

### Structs
- [`BuildReport`](struct.BuildReport.md#rustdoc-item-1681) — A finished assembly build: what it produced, and when it finished, so the
- [`CSharpProject`](struct.CSharpProject.md#rustdoc-item-1669) — A running C# project in the reloading host, made of the bridge's runtime
- [`InFlightAssemblyBuild`](struct.InFlightAssemblyBuild.md#rustdoc-item-1666) — One assembly build running on its own worker thread.
- [`ManagedReloadSummary`](struct.ManagedReloadSummary.md#rustdoc-item-1690) — A finished managed reload, broken down by phase, in milliseconds.
- [`ManagedReloadTiming`](struct.ManagedReloadTiming.md#rustdoc-item-1668) — One managed reload's armed timing, filled in as its phases complete.
- [`RebuiltAssembly`](struct.RebuiltAssembly.md#rustdoc-item-1719) — A finished assembly rebuild: when it was ready and what produced it.

### Enums
- [`BuildCollection`](enum.BuildCollection.md#rustdoc-item-1685) — What one collection attempt found.
- [`BuildOutcome`](enum.BuildOutcome.md#rustdoc-item-1832) — What one managed assembly build produced.

### Functions
- [`milliseconds`](fn.milliseconds.md#rustdoc-item-1907) — Returns `duration` in milliseconds.
