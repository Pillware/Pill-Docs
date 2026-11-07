<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1795"></a>

# Module `pill_csharp_bridge::project_backend`

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\project_backend.rs:1`

A shipped C# project as the runtime's external project backend.
A C# project as the runtime's external project backend.

## Responsibilities

- Implement `pill_player::ProjectBackend` for a shipped C# project, in
  either posture: CoreCLR through hostfxr, or a NativeAOT library.

## Design

The runtime never names the bridge: a C# shipping bundle builds a
[`CSharpBackend`](struct.CSharpBackend.md#rustdoc-item-1833) and hands it over as
`StaticProjectBackend::External`, and the runtime keeps the returned
[`CSharpRuntime`](../backend/struct.CSharpRuntime.md#rustdoc-item-500) alive beside the engine. A build that runs no C# therefore
links none of this.

## Module contents

### Structs
- [`CSharpBackend`](struct.CSharpBackend.md#rustdoc-item-1833) — A shipped C# project: where its assemblies are, and how to host them.

### Enums
- [`Posture`](enum.Posture.md#rustdoc-item-1794) — How the managed project is hosted.
