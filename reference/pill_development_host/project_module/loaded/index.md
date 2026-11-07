<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3421"></a>

# Module `pill_development_host::project_module::loaded`

Visibility: `{'restricted': {'parent': 2656, 'path': '::project_module'}}` · Source: `hosting\pill_development_host\src\project_module.rs:30`

_No documentation provided._

## Module contents

### Enums
- [`LoadedProject`](enum.LoadedProject.md#rustdoc-item-3383) — The backend-specific state the host loop keeps alive.
- [`ManagedReloadStart`](enum.ManagedReloadStart.md#rustdoc-item-3350) — What starting a reload through the managed path produced.

### Functions
- [`build_csharp_outcome`](fn.build_csharp_outcome.md#rustdoc-item-3422) — Produces one managed build outcome, using the compiler choice the build
- [`poll_managed_assembly_swap`](fn.poll_managed_assembly_swap.md#rustdoc-item-3420) — Polls the managed loader and returns whether it swapped the assembly.
- [`reload_native`](fn.reload_native.md#rustdoc-item-3425) — Reload one native generation and migrate components whose persisted schema
- [`run_full_project_build`](fn.run_full_project_build.md#rustdoc-item-3424) — Runs the full `dotnet build` for a reload the captured command line
- [`start_csharp_assembly_build`](fn.start_csharp_assembly_build.md#rustdoc-item-3423) — Starts a C# assembly build on its own worker thread.
