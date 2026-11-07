<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2370"></a>

# Module `pill_master_renderer::resources::renderer_material`

Visibility: `{'restricted': {'parent': 2227, 'path': '::resources'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_material.rs:1`

What one material becomes on the GPU: the bind groups its draws bind.

## Responsibilities

- Build the two bind groups a material's draws bind, following the slots
  its shader declares ([`RendererMaterial`](struct.RendererMaterial.md#rustdoc-item-2423)). Parameters go to group 2 and
  textures to group 3.
- Pack the material's parameter values, one 16-byte slot each, in
  declaration order. A pass packs through the same two functions, so a
  material and a pass cannot hand a shader different layouts.
- Fall back to the renderer's default texture for a slot's type, and
  refuse a depth slot: depth belongs to a pass, the only thing that can
  supply it. A texture whose view shape (2D or cube) differs from its
  slot's is refused with the slot named in the error.

## Design

A material is built during asset sync, when its own content version moves,
and never per frame: a frame only binds what is already built. When the
shader or a texture a material names is rebuilt, the material is rebuilt
too, because the sync drops the version record of every material whose
shader or texture changed. The struct keeps the bind groups and never the
uniform buffer: a bind group holds what it references, so the buffer lives
exactly as long as the group that reads it.

## Module contents

### Structs
- [`RendererMaterial`](struct.RendererMaterial.md#rustdoc-item-2423) — One material's GPU resources: the bind groups its draws bind.
- [`RendererMaterialHandle`](struct.RendererMaterialHandle.md#rustdoc-item-7) — A typed handle for the slots of the map it was issued by.
