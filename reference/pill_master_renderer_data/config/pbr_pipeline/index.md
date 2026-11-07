<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1470"></a>

# Module `pill_master_renderer_data::config::pbr_pipeline`

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\pbr_pipeline\mod.rs:1`

The PBR frame: the lit geometry pass and the post-processing half it
composes.
The PBR frame: a lit geometry pass into a half-float target, and the
post-processing chain that brings it to the surface.

## Responsibilities

- Install the half of the frame that draws geometry ([`install`]): the lit
  pass, the shader it draws through, the offscreen target it writes, and the
  neutral material the chain ships as a file ([`DEFAULT_MATERIAL_PATH`]).
- Compose that pass with the post-processing half
  ([`super::post_processing`]) into one pipeline asset, with a skybox pass
  between them that a project turns on by giving it a sky material
  ([`set_skybox`]).

## Design

A frame written as data, exactly as a project would write it: the lit pass is
a `RenderPass` asset and the chain is a `RenderingPipeline` asset, so nothing
here needs an API a project cannot reach. The crate adds only this: the
assets exist without anyone declaring them, and the renderer's manager is
pointed at the result.

```text
pill.pbr.pass.opaque   geometry → hdr    the lit surface, in the range lighting produces
pill.pbr.pass.skybox   skybox   → hdr    the sky, where the lit pass drew nothing (off until set)
─── the four post-processing passes, declared in `super::post_processing` ───
```

The shaders are cooked from HLSL to WGSL at build time and embedded, and
installing the chain still imports each one from its `.hlsl` source through
the store, the way a project's shader is imported. The geometry fragment
stage is `pbr_fragment.hlsl`, under `shader_sources/pbr_pipeline/shaders/`,
and includes the crate's shared header. The vertex stage is the shared
`common_shaders/default_vertex.wgsl`, named from the `shader_sources` root by
each shader's `.hlsl.meta`, because every lit pass in the crate starts from
the same instance layout. The four post-processing stages are under
`shader_sources/post_processing/shaders/`.

## Module contents

### Functions
- [`default_sky_pass`](fn.default_sky_pass.md#rustdoc-item-1474) — Builds the sky pass: a fullscreen triangle at the far plane, into the lit
- [`install`](fn.install.md#rustdoc-item-1459) — Installs the PBR chain, and returns the pipeline asset.
- [`install_pbr_shader`](fn.install_pbr_shader.md#rustdoc-item-1476) — Imports the chain's shader from its source, or returns the one the store
- [`neutral_parameters`](fn.neutral_parameters.md#rustdoc-item-1473) — The PBR shader's parameters at their neutral values, by slot name.
- [`set_skybox`](fn.set_skybox.md#rustdoc-item-1466) — Sets `material` as the sky drawn behind the PBR chain's lit surface, or turns

### Constants
- [`DEFAULT_MATERIAL_PATH`](constant.DEFAULT_MATERIAL_PATH.md#rustdoc-item-1465) — The material file the chain's default material is imported from, relative
- [`OPAQUE_PASS`](constant.OPAQUE_PASS.md#rustdoc-item-1472) — Asset name of the lit pass.
- [`PBR_FRAGMENT`](constant.PBR_FRAGMENT.md#rustdoc-item-1468) — The geometry pass's fragment stage, cooked from `pbr_fragment.hlsl` and
- [`PIPELINE_NAME`](constant.PIPELINE_NAME.md#rustdoc-item-1462) — Asset name the installed chain is stored under.
- [`SHADER_GUID`](constant.SHADER_GUID.md#rustdoc-item-205) — The guid the PBR shader is stored under, so a material file can name it.
- [`SHADER_GUID_NAME`](constant.SHADER_GUID_NAME.md#rustdoc-item-1471) — The name the PBR shader's guid is derived from.
- [`SHADER_PATH`](constant.SHADER_PATH.md#rustdoc-item-1463) — The shader the geometry pass draws through: the path its `.hlsl` source is
- [`SHADER_SOURCES`](constant.SHADER_SOURCES.md#rustdoc-item-1460) — The shader assets [`install`] creates, and the files each is built from.
- [`SKYBOX_PASS`](constant.SKYBOX_PASS.md#rustdoc-item-1467) — Asset name of the skybox pass, which [`set_skybox`] gives a material.
