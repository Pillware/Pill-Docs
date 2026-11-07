<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2598"></a>

# Module `pill_master_renderer::resources::renderer_resource_storage`

Visibility: `{'restricted': {'parent': 2227, 'path': '::resources'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_resource_storage.rs:1`

GPU-side storage for every resource the renderer holds.

## Responsibilities

- Own the slot maps that every GPU resource handle points into.
- Install the stand-in textures a shader slot falls back to when a material
  or pass binds nothing.

## Design

One struct carries all five maps and the engine parameters, so asset sync,
pass building, and drawing reach every GPU resource through the same
reference. The stand-in textures are created at construction and their
handles stay in this struct, so a slot that binds nothing falls back to the
same white, flat-normal, or black environment texture.

## Module contents

### Structs
- [`RendererResourceStorage`](struct.RendererResourceStorage.md#rustdoc-item-24) — Every GPU resource the renderer holds, keyed by the handles it hands out.

### Constants
- [`INITIAL_CAMERA_CAPACITY`](constant.INITIAL_CAMERA_CAPACITY.md#rustdoc-item-2581) — Starting capacity of the camera slot map.
- [`INITIAL_MATERIAL_CAPACITY`](constant.INITIAL_MATERIAL_CAPACITY.md#rustdoc-item-2579) — Starting capacity of the material slot map.
- [`INITIAL_MESH_CAPACITY`](constant.INITIAL_MESH_CAPACITY.md#rustdoc-item-2580) — Starting capacity of the mesh slot map.
- [`INITIAL_SHADER_CAPACITY`](constant.INITIAL_SHADER_CAPACITY.md#rustdoc-item-2577) — Starting capacity of the shader slot map.
- [`INITIAL_TEXTURE_CAPACITY`](constant.INITIAL_TEXTURE_CAPACITY.md#rustdoc-item-2578) — Starting capacity of the texture slot map.
