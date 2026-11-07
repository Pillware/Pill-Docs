<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1008"></a>

# Module `pill_master_renderer_data::assets::shader`

Visibility: `{'restricted': {'parent': 248, 'path': '::assets'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\shader.rs:1`

Shader assets and their material binding declarations.

## Responsibilities

- Carry a shader's two WGSL stages plus the uniform and texture slots its
  source declares, under the names the source gives them.
- Keep the slots in the order the source declares them. Where a parameter
  slot sits in that order decides where its value lands in the uniform
  buffer, so reordering the slots would leave the packed buffer disagreeing
  with the shader's own declarations.
- Offer both ways in: [`ShaderBuilder::with_vertex_source`](struct.ShaderBuilder.md#rustdoc-item-1016) and
  [`ShaderBuilder::with_fragment_source`](struct.ShaderBuilder.md#rustdoc-item-1017) name files to read when the shader
  is built, and [`ShaderBuilder::with_wgsl`](struct.ShaderBuilder.md#rustdoc-item-1018) takes both stages already in
  memory.

## Design

[`ShaderBuilder`](struct.ShaderBuilder.md#rustdoc-item-959) exists because reading the sources is the one step that
can fail: the builder collects the parts in any order, and
[`ShaderBuilder::build`](struct.ShaderBuilder.md#rustdoc-item-957) reads the two stages, so a half-built shader is
never alive. The slots are where the shader meets the material and pass side
of the renderer: that side walks them by name, in declaration order, to size
the uniform buffer and place each value.

## Module contents

### Structs
- [`Shader`](struct.Shader.md#rustdoc-item-92) — A shader asset: its two WGSL stages plus the slots the source declares.
- [`ShaderBuilder`](struct.ShaderBuilder.md#rustdoc-item-959) — A [`Shader`] under construction, started by [`Shader::new`].
- [`ShaderImportSettings`](struct.ShaderImportSettings.md#rustdoc-item-1001) — How to build a shader from its `.hlsl` source: the settings its `.hlsl.meta`
- [`ShaderParameterSlot`](struct.ShaderParameterSlot.md#rustdoc-item-780) — One uniform a shader declares, under the name its source gives it.
- [`ShaderTextureSlot`](struct.ShaderTextureSlot.md#rustdoc-item-895) — One texture a shader declares, under the name its source gives it, at the

### Enums
- [`ShaderParameterType`](enum.ShaderParameterType.md#rustdoc-item-730) — The kind of value a uniform parameter carries.
- [`ShaderTextureKind`](enum.ShaderTextureKind.md#rustdoc-item-839) — What a shader texture slot reads: a texture asset's texels, or a depth

### Traits
- [`SlotName`](trait.SlotName.md#rustdoc-item-832) — A slot that carries the name its source binds it under.

### Functions
- [`cooked_wgsl_beside`](fn.cooked_wgsl_beside.md#rustdoc-item-1108) — The WGSL file this crate's build script cooked beside a shader source.
- [`slots_by_name`](fn.slots_by_name.md#rustdoc-item-948) — Key a list of slots by the names they carry, keeping the list's order.
