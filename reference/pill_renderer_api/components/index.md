<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-362"></a>

# Module `pill_renderer_api::components`

Source: `rendering\pill_renderer_api\src\components\mod.rs:1`

The contract's camera component and viewport rectangle, and
[`register_contract_components`](fn.register_contract_components.md#rustdoc-item-360).
The scene types that are part of the renderer contract.

## Responsibilities

- Declare [`CameraComponent`](camera/struct.CameraComponent.md#rustdoc-item-244), the camera [`crate::frame::RenderFrame`](../frame/struct.RenderFrame.md#rustdoc-item-191)
  carries for each surface, and [`RenderViewport`](viewport/struct.RenderViewport.md#rustdoc-item-190), the rectangle a frontend
  points a renderer at.
- Register the contract's components through
  [`register_contract_components`](fn.register_contract_components.md#rustdoc-item-360), field layout included.

## Design

Only what every renderer must understand lives here. A renderer's own
components - the master renderer's mesh renderer and directional light, for
instance - live in that renderer's data crate, which registers these first
and its own after.

**The camera sets its shared name explicitly.** The `PillComponent` derive
would otherwise build the name from `module_path!()`. A name built that way
registers a *different* component, and the world would no longer find the
columns it already holds for this one.

## Module contents

### Modules
- [`camera`](camera/index.md#rustdoc-item-359) — The camera a frame renders through.
- [`viewport`](viewport/index.md#rustdoc-item-408) — The rectangle of the target a frame draws into.

### Functions
- [`register_contract_components`](fn.register_contract_components.md#rustdoc-item-360) — Registers the contract's components - the engine's transform and the

## Re-exports

- [`pub use camera::CameraComponent;`](camera/struct.CameraComponent.md#rustdoc-item-244)
- [`pub use viewport::RenderViewport;`](viewport/struct.RenderViewport.md#rustdoc-item-190)
