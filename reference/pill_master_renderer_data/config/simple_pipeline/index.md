<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1533"></a>

# Module `pill_master_renderer_data::config::simple_pipeline`

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\simple_pipeline\mod.rs:1`

The built-in lit pipeline, the fallback a project can opt into.
The simple frame: one lit geometry pass drawn onto the surface.

## Responsibilities

- Install the smallest chain that draws something: one geometry pass that
  draws through the renderer's own lit shader into the surface, and hand
  back the pipeline asset ([`install`]).

## Design

The pass names a shader, so it draws every instance whose material uses that
shader. It writes only the surface, so it also draws the instances no pass
in the chain claimed, each through its own material. The shader it installs
is the same lit one the renderer falls back to, with the same declared
slots, so a material written for the fallback works here without being
rebuilt.

The renderer's built-in chain is a geometry pass that names no shader and
draws every instance through its own material. Install this pipeline when a
project wants that frame stored as an asset it can swap out.

## Where the shaders are

The lit fragment stage is in `shader_sources/simple_pipeline/shaders/`. It
is imported from its `.hlsl` source the way a project's own shader is, and
its slots and guid live in the `.hlsl.meta` beside that source.

The vertex stage it pairs with lives in `shader_sources/common_shaders/`,
because it is shared: the renderer's fallback material, the PBR geometry
pass and this pipeline all build on it. Every lit pass in the crate starts
from the same instance layout, so the crate keeps one copy of the stage.

The build script cooks the whole `shader_sources/` tree in one call. Every
directory that directly holds `.hlsl` files is a source directory, and every
`include/` directory in the tree is on every source's include path.

Every stage declared with `config_shader_file!` embeds its file's text, but
only the fallback pair ([`DEFAULT_VERTEX`](../constant.DEFAULT_VERTEX.md#rustdoc-item-1532) and [`DEFAULT_LIT_FRAGMENT`]) is
read back out of its constant: the GPU module builds its stand-in shader
from it before any store exists, so the store cannot supply it.

## Module contents

### Functions
- [`install`](fn.install.md#rustdoc-item-1525) — Install the simple frame, and return the pipeline asset.

### Constants
- [`DEFAULT_LIT_FRAGMENT`](constant.DEFAULT_LIT_FRAGMENT.md#rustdoc-item-1524) — The pass's fragment stage, cooked from `default_lit_fragment.hlsl`. It
- [`PASS_NAME`](constant.PASS_NAME.md#rustdoc-item-1530) — Asset name of the pass the pipeline holds.
- [`PIPELINE_NAME`](constant.PIPELINE_NAME.md#rustdoc-item-1527) — Asset name the installed pipeline is stored under.
- [`SHADER_GUID`](constant.SHADER_GUID.md#rustdoc-item-1529) — The guid the shader is stored under.
- [`SHADER_PATH`](constant.SHADER_PATH.md#rustdoc-item-1528) — The path the pass's shader source is imported under. An imported asset is
- [`SHADER_SOURCES`](constant.SHADER_SOURCES.md#rustdoc-item-1526) — The shader assets [`install`] creates, and the cooked files each is built
