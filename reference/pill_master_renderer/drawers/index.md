<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-170"></a>

# Module `pill_master_renderer::drawers`

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\drawers\mod.rs:1`

The mesh drawer: batches the instances a frame queues and records the
instanced draws they become.

Crate-private: `renderer.rs` is its only consumer, and other crates reach
the renderer through its extension ABI, not through these helpers.
The master renderer's draw paths.

## Responsibilities

- Hold one module per draw path. [`mesh_drawer`] is the mesh path: it
  batches the instances a frame queues and records their instanced draws
  in the render pass.

## Module contents

### Modules
- [`mesh_drawer`](mesh_drawer/index.md#rustdoc-item-3) — The mesh drawer: batches the frame's queued instances and records their
