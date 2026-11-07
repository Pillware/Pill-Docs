<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1635"></a>

# Module `pill_master_renderer_data::rendering_manager`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\rendering_manager.rs:1`

The resource a game sets its pipeline in.
The world resource that holds the pipeline the renderer runs.

## Responsibilities

- Hold one optional pipeline handle, and nothing else. It is the pipeline
  the renderer should run: the game's choice, or the default that
  [`crate::register`](../fn.register.md#rustdoc-item-1475) installs.
- Cross the module boundary: a project DLL sets the pipeline, the host's
  renderer executes it, and both sides have to agree on one resource.

## Design

[`crate::register`](../fn.register.md#rustdoc-item-1475) inserts this resource when it is missing, so it exists
before any project code runs and code that sets a pipeline finds it already
there. The resource id the host binary and a project DLL both use is the
shared name that `#[pill_mirror_resource]` gives the type; `RenderFrame`
shares its id the same way. Without a shared name the renderer would read a
resource the project never wrote. C#'s generated `RenderingManager` marker
carries the same name, so a managed system declares
`ResMut<RenderingManager>` and calls `Clear()`.

## Module contents

### Structs
- [`RenderingManager`](struct.RenderingManager.md#rustdoc-item-1633) — The renderer's pipeline selection, carried as one optional handle.
