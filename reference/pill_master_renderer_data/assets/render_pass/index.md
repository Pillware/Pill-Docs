<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-544"></a>

# Module `pill_master_renderer_data::assets::render_pass`

Visibility: `{'restricted': {'parent': 248, 'path': '::assets'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\render_pass.rs:1`

A render pass, described as data instead of as code.

## Responsibilities

- Hold everything one pass needs: the shader it draws with, its uniform
  parameters, its texture slots, where it reads from and writes to, and the
  order it runs in.
- Be the only pass type. Every pass in the renderer (geometry, skybox,
  post-processing) is one of these values, so adding a pass means supplying
  data in a game, not writing a new struct into the renderer.
- Load a pass from a `.render_pass` file in `res` ([`StandaloneAsset`] with
  [`RenderPassDocument`](struct.RenderPassDocument.md#rustdoc-item-495)). The file names the pass's shader, material and
  textures by guid.

## Design

The fields mirror [`Material`](../material/struct.Material.md#rustdoc-item-100) on purpose: a shader handle,
a parameter map and a texture map, packed by the same rules. A pass therefore
holds what a material holds for a mesh - the shader and the values that
shader reads - and the renderer draws it through the same binder it uses for
materials.

A pass can also name a [`Material`](../material/struct.Material.md#rustdoc-item-100) outright
([`RenderPass::material`](struct.RenderPass.md#rustdoc-item-428)). The material supplies the shader, parameters and
textures, and anything the pass sets itself wins. That is how a skybox pass
draws a sky: the sky is a `.material` file an artist edits, and the pass only
says when and where it is drawn.

## Module contents

### Structs
- [`RenderPass`](struct.RenderPass.md#rustdoc-item-93) — One pass in a [`RenderingPipeline`](crate::RenderingPipeline).
- [`RenderPassDocument`](struct.RenderPassDocument.md#rustdoc-item-495) — A pass as written in its `.render_pass` file.
