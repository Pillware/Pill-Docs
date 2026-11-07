<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1481"></a>

# Module `pill_master_renderer_data::config`

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\mod.rs:1`

Bind group indices, the instance batch size, and the pipelines the renderer ships.
The layout facts every renderer pipeline shares, and the two frames the
renderer ships with.

## Responsibilities

- Name the bind group each kind of shader data goes in. That is the
  convention the engine's shaders declare and the drawers bind against.
- Set how many instances the mesh drawer's instance buffer starts with and
  how many it adds each time it grows.
- Hold the pipelines the renderer defines itself - [`simple_pipeline`], and
  [`pbr_pipeline`] with its [`post_processing`] and [`skybox`] parts - so a
  project can run a frame without declaring one. Each pipeline keeps its
  stages under a `shaders/` directory in the crate's `shader_sources/` tree.
- Import every one of their shaders from its `.hlsl` source and `.hlsl.meta`
  ([`import_shader`]), the same way a project's own shaders are imported.
- Name the cooked files each shader was built from ([`all_shader_sources`]),
  so a runtime reload of a source reaches the assets built from it.

## Design

Every pipeline here is an ordinary `RenderingPipeline` asset. The renderer
treats these like any other pipeline; the only difference is that it
installs one itself.

Each `install` is idempotent. It returns what the store already holds
instead of adding a second copy, which is what lets the renderer's
registration call it again on every generation.

A built-in shader is built the same way as a project's shader. Its slots,
its bindings and the guid that material files name live beside its source in
a `.hlsl.meta`, and the store lists it as the file it is. The GPU module
builds its stand-in shader from [`DEFAULT_VERTEX`] and
[`simple_pipeline::DEFAULT_LIT_FRAGMENT`]. That pair is the only stage text
anything reads out of the crate itself, because the stand-in is built before
a store exists.

[`pbr_pipeline`] is the default: [`register`](crate::register) installs it
and points [`RenderingManager`](../rendering_manager/struct.RenderingManager.md#rustdoc-item-1633) at it. A project
that wants a different frame calls `set_pipeline` after registering, and one
that wants the renderer's own fallback chain clears the manager instead.

## Module contents

### Modules
- [`pbr_pipeline`](pbr_pipeline/index.md#rustdoc-item-1470) — The PBR frame: the lit geometry pass and the post-processing half it
- [`post_processing`](post_processing/index.md#rustdoc-item-1483) — The post-processing passes the PBR frame composes.
- [`simple_pipeline`](simple_pipeline/index.md#rustdoc-item-1533) — The built-in lit pipeline, the fallback a project can opt into.
- [`skybox`](skybox/index.md#rustdoc-item-1479) — The sky pass drawn where the lit pass wrote nothing.

### Structs
- [`ConfigShaderFile`](struct.ConfigShaderFile.md#rustdoc-item-1469) — A cooked WGSL stage the renderer embeds at build time.
- [`ShaderSourceRecord`](struct.ShaderSourceRecord.md#rustdoc-item-1461) — The cooked files a built-in shader asset was built from.

### Functions
- [`all_shader_sources`](fn.all_shader_sources.md#rustdoc-item-1631) — Every shader asset the renderer's own pipelines install, with its files.
- [`import_shader`](fn.import_shader.md#rustdoc-item-1630) — Imports one of the renderer's own shaders, or hands back the one the store

### Constants
- [`CAMERA_PARAMETERS_BIND_GROUP_LAYOUT_INDEX`](constant.CAMERA_PARAMETERS_BIND_GROUP_LAYOUT_INDEX.md#rustdoc-item-1549) — Bind group the active camera's parameters go in, in a shader that reads
- [`DEFAULT_VERTEX`](constant.DEFAULT_VERTEX.md#rustdoc-item-1532) — The vertex stage every lit pass in the crate starts from.
- [`ENGINE_PARAMETERS_BIND_GROUP_LAYOUT_INDEX`](constant.ENGINE_PARAMETERS_BIND_GROUP_LAYOUT_INDEX.md#rustdoc-item-1548) — Bind group the engine's per-frame parameters go in, in a shader that reads
- [`INITIAL_INSTANCE_VECTOR_CAPACITY`](constant.INITIAL_INSTANCE_VECTOR_CAPACITY.md#rustdoc-item-1547) — Initial capacity for a staging vector of instances, sized like
- [`INSTANCE_BATCH_SIZE`](constant.INSTANCE_BATCH_SIZE.md#rustdoc-item-1546) — Instances the mesh drawer's instance buffer starts with, and the step it
- [`MATERIAL_PARAMETERS_BIND_GROUP_LAYOUT_INDEX`](constant.MATERIAL_PARAMETERS_BIND_GROUP_LAYOUT_INDEX.md#rustdoc-item-1550) — Bind group a material's, or a pass's, uniform parameters go in, when it has
- [`MATERIAL_TEXTURES_BIND_GROUP_LAYOUT_INDEX`](constant.MATERIAL_TEXTURES_BIND_GROUP_LAYOUT_INDEX.md#rustdoc-item-1551) — Bind group a material's, or a pass's, textures go in, when it has any.

### Macros
- [`config_shader_file`](macro.config_shader_file.md#rustdoc-item-1552) — Declares a [`ConfigShaderFile`] constant for a cooked file under `shader_sources/`.
