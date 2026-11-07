<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-161"></a>

# Module `pill_master_renderer_data::assets::material`

Visibility: `{'restricted': {'parent': 248, 'path': '::assets'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\material.rs:1`

Material assets connecting shaders, textures, and uniform parameters.

## Responsibilities

- Carry what one drawn surface needs: the shader it draws with and the
  values that shader reads, both as uniform parameters and as bound
  textures.
- Be plain data. A material names its shader by handle and its values by
  the slot names the shader declares, so a game describes an appearance
  without reaching into the renderer.
- Load a material from a `.material` file in `res`
  ([`StandaloneAsset`] with [`MaterialDocument`](struct.MaterialDocument.md#rustdoc-item-149)), which names its shader
  and textures by guid so the file still resolves in the next run.

## Design

The fields copy [`RenderPass`](../render_pass/struct.RenderPass.md#rustdoc-item-93) by design: a shader
handle, a map of parameter values and a map of textures. Both maps are keyed
by the slot names the shader declares and packed by the same rules, so the
renderer drives a material and a pass through one code path. A material's
`rendering_order` decides where it sorts inside the pass that draws it.

## Module contents

### Structs
- [`Material`](struct.Material.md#rustdoc-item-100) — How a surface looks: the shader a draw runs and the values that shader
- [`MaterialBuilder`](struct.MaterialBuilder.md#rustdoc-item-99) — Builds a [`Material`] one field at a time.
- [`MaterialDocument`](struct.MaterialDocument.md#rustdoc-item-149) — A material as written in its `.material` file.
- [`MaterialTexture`](struct.MaterialTexture.md#rustdoc-item-3) — A texture handle bound to one of a material's slots.
