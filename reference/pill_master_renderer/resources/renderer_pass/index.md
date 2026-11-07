<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2576"></a>

# Module `pill_master_renderer::resources::renderer_pass`

Visibility: `{'restricted': {'parent': 2227, 'path': '::resources'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_pass.rs:1`

The GPU side of one pass of the chain.

## Responsibilities

- Hold what recording one pass needs: its pipeline, the bind groups for the
  values the pass carries itself, and the two flags that say which shared
  groups its draws bind.
- Build that pipeline for whichever shape the pass takes, geometry included.
- Hand its values and textures to the shared bind-group builder, so a pass
  and a material reach a shader's slots the same way.

## Design

Built when the chain changes, not every frame: a pass changes when the game
swaps its pipeline, not when the scene moves. One type covers the three
shapes a pass takes, told apart by [`PassKind`]:

- a geometry pass that names its own shader - the mesh and instance vertex
  layouts, the pass's cull mode, and a depth attachment it tests, writing it
  unless the pass asked not to;
- a fullscreen pass - three vertices, no vertex buffers, no depth test, no
  instance data, reading what an earlier pass wrote. Every post-processing
  step the default pipeline declares has this shape, and it is the shape
  that carries its own parameters and reads earlier passes' pictures;
- a skybox, which is the same triangle, tested against the depth the
  geometry passes wrote (less-or-equal, without writing) and put at the far
  plane by its shader, so it draws only where no mesh did.

A geometry pass reaches the frame through the mesh path like any other
drawable: the chain resolves it into a [`ResolvedPass`] and the renderer
records it with this pipeline. A geometry pass that names no shader has no
type here at all: it draws through each material's pipeline.

## Module contents

### Structs
- [`RendererPass`](struct.RendererPass.md#rustdoc-item-372) — One pass of the chain, in the shape its [`PassKind`] asks for: a geometry

### Constants
- [`DEPTH_INPUT`](constant.DEPTH_INPUT.md#rustdoc-item-2540) — The name a pass uses in its inputs to read the renderer's own depth buffer
