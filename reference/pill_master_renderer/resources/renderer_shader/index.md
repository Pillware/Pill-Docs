<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2629"></a>

# Module `pill_master_renderer::resources::renderer_shader`

Visibility: `{'restricted': {'parent': 2227, 'path': '::resources'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_shader.rs:1`

What a shader asset becomes on the GPU: its render pipeline and the
layouts of the groups its draws bind.

## Responsibilities

- Build the render pipeline and the group layouts from a shader's WGSL,
  and report a shader wgpu refuses against the asset that named it instead
  of taking the host down ([`RendererShader::new`](struct.RendererShader.md#rustdoc-item-2688)).
- Create the parameters group layout (set 2) and the textures group layout
  (set 3). Each one is absent when the shader declares no slots of that
  kind.
- Carry the flags that say whether the shader reads the engine's parameters
  or the camera's, so a drawer binds those groups only when the shader
  reads them.

## Design

A shader is built during asset sync, when its asset is loaded or its
content version changes, and once at startup for the built-in default
shader. It is not rebuilt per frame.

The four group slots are fixed by the engine's convention: engine
parameters at 0, camera parameters at 1, a material's or pass's parameters
at 2, and its textures at 3. A slot the shader does not declare still gets
an empty layout, so every pipeline has the same shape the drawers bind
against.

The WGSL is not written by hand. The data crate's build script compiles its
HLSL sources to it, and in development the host's shader watcher compiles
an edited source again and sends the new text to the shader asset.

## Module contents

### Structs
- [`RendererShader`](struct.RendererShader.md#rustdoc-item-2548) — One shader's GPU pipeline and the group layouts its draws bind.
- [`RendererShaderHandle`](struct.RendererShaderHandle.md#rustdoc-item-2) — A typed handle for the slots of the map it was issued by.
- [`UniformGroups`](struct.UniformGroups.md#rustdoc-item-2689) — Says which of the renderer's shared uniform groups a shader reads.

### Functions
- [`check_slot_shape`](fn.check_slot_shape.md#rustdoc-item-2762) — Checks that `texture` fits a slot of `slot_kind`, and names both when it
- [`slot_view_dimension`](fn.slot_view_dimension.md#rustdoc-item-2760) — Returns the view shape a texture slot of `kind` binds: a cube for a cubemap,
