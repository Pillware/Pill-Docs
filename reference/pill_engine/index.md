<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-614"></a>

# pill_engine API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The Pill engine, as projects and extensions see it.

## Responsibilities

- Re-export the engine core (`pill_engine_core`) under the same paths, so
  `use pill_engine::*` and every `::pill_engine::...` path the macros emit
  resolve.
- Own the per-DLL `inventory` registries ([`component_registry`](component_registry/index.md#rustdoc-item-313),
  [`declarations`](declarations/index.md#rustdoc-item-403), [`hot_patch`](hot_patch/index.md#rustdoc-item-536)) and re-export the hot-patch descriptor
  types at the crate root.
- Re-export the `submit!` macro that the derive and attribute macros
  expand to.

## Design

This crate is an `rlib`, so every DLL gets its own copy. The engine core
holds everything that is the same for every DLL. The registries live here
because each question they answer is about one DLL: which components this
artifact declares, and where a function's address is in this artifact.
Each DLL's copy of this crate therefore reads only that DLL's own
declarations. The core never reads a registry and never depends on this
crate; code here passes the core what it needs from one.

## Module contents

### Modules
- [`component_registry`](component_registry/index.md#rustdoc-item-313) — Per-DLL component, value-type, method, accessor and export registries.
- [`declarations`](declarations/index.md#rustdoc-item-403) — The systems, resources and asset types an artifact declares, registered
- [`hot_patch`](hot_patch/index.md#rustdoc-item-536) — The per-DLL hot-patch registries, built on the core's hot-patch machinery.

## Re-exports

- [`pub use hot_patch::PillHotFunctionDescriptor;`](hot_patch/struct.PillHotFunctionDescriptor.md#rustdoc-item-576)
- [`pub use hot_patch::PillHotSlotDescriptor;`](hot_patch/struct.PillHotSlotDescriptor.md#rustdoc-item-497)
- `pub use inventory::submit;`
- `pub use pill_engine_core;`
