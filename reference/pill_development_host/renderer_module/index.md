<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3718"></a>

# Module `pill_development_host::renderer_module`

Visibility: `crate` · Source: `hosting\pill_development_host\src\renderer_module.rs:1`

The GPU renderer as a loaded module: builds and attaches it, then drives
its backend.
The GPU renderer as a loaded module: starting it, and driving the backend
it builds on a window.

## Responsibilities

- Build, load, initialize and reload the renderer module with the same
  machinery as an extension, under an owner of its own
  ([`RendererModule`]).
- Attach it to a window through its `pill_renderer_attach` export, and wrap
  the backend that export returns in [`ModuleRenderer`].

## Design

The host links no renderer: wgpu exists only inside the module. The module
returns the backend as a `Box<Box<dyn PillRenderer>>` behind a raw pointer.
[`ModuleRenderer`] calls through that pointer and, when dropped, hands it
back to the module's `pill_renderer_detach`, so the renderer is freed by the
image that allocated it while that image is still mapped. A `ModuleRenderer`
must therefore be dropped before the module's slot, and `RenderingHost`
declares its fields in that order.

The module is kept out of the host's extension list. That list reloads its
members on a source change, and a renderer reload has to detach the backend
first. `RenderingHost` reloads it instead: it detaches through the reload's
`before_commit` hook and attaches whichever generation is current after.

A failed load never costs the scene. The module first loads when the window
opens, after the project has filled the world, so it loads under
[`FirstLoadFailure::ClearSystemsOnly`]: a refused generation clears its own
systems, stays mapped, and must have registered no data.

## Module contents

### Structs
- [`ModuleRenderer`](struct.ModuleRenderer.md#rustdoc-item-3804) — A renderer backend that lives in the renderer module.
- [`RendererModule`](struct.RendererModule.md#rustdoc-item-3728) — The renderer module: the slot a loaded generation lives in, and the edit

### Enums
- [`RendererModuleChange`](enum.RendererModuleChange.md#rustdoc-item-3734) — What [`RendererModule::reload_if_changed`] found.

### Functions
- [`attach_module_renderer`](fn.attach_module_renderer.md#rustdoc-item-3857) — Build a backend on `window` through the module's attach export.

### Type aliases
- [`AttachFn`](type.AttachFn.md#rustdoc-item-3720) — Signature of the `pill_renderer_attach` export: it builds a backend on the
- [`DetachFn`](type.DetachFn.md#rustdoc-item-3722) — Signature of the `pill_renderer_detach` export: it drops a backend inside

### Constants
- [`ATTACH_SYMBOL`](constant.ATTACH_SYMBOL.md#rustdoc-item-3717) — Export that builds a backend on a window.
- [`DETACH_SYMBOL`](constant.DETACH_SYMBOL.md#rustdoc-item-3719) — Export that drops a backend inside the module.
