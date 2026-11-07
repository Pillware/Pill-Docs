<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1679"></a>

# Module `pill_master_renderer_data::shader_hot_reload`

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\shader_hot_reload.rs:1`

Development shader reload: puts the WGSL the host re-cooked into the shader
assets built from that source.
Development shader reload, data half: writes a re-cooked WGSL file into the
shader assets built from it.

## Responsibilities

- Map one re-cooked WGSL file back to the shader assets built from it, using
  the table each pipeline publishes ([`all_shader_sources`]).
- Write the new text into those assets. That raises their content version,
  so the GPU module rebuilds only those shaders on its next sync.
- Offer that as `pill_render_data_shader_changed`, a named C-ABI export the
  development host calls.

## Design

Watching and cooking belong to the host: a worker thread there cooks the
crate's HLSL sources with `pill_assets::cook_shader_tree`, the routine this
crate's build script also runs, and passes each re-cooked file to the main
thread. That thread calls this export on whichever data module generation
is current at that moment. The data crate uses neither `notify` nor the
cooker at run time, so reloading it cannot leave a watcher thread running
code from a retired image.

A shader edit is an asset edit. The renderer's pipelines keep their shaders
as `Shader` assets, and the GPU module rebuilds any asset whose content
version went up. Nothing here touches a device, a pipeline or a bind group.
An asset is rewritten only when the new text differs from what it holds, so
a save that changes nothing costs no GPU work.

This module is compiled into native debug builds and the tests. A shipping
build has no sources to watch and no host to deliver edits.

## Module contents

### Functions
- [`apply_shader_source`](fn.apply_shader_source.md#rustdoc-item-1677) — Replaces one stage's WGSL in every recorded shader asset built from
- [`pill_render_data_shader_changed`](fn.pill_render_data_shader_changed.md#rustdoc-item-1675) — Writes one re-cooked WGSL file into the shader assets built from it, in
- [`read_text`](fn.read_text.md#rustdoc-item-1678) — Borrows `length` bytes at `pointer` as UTF-8 text.

### Constants
- [`SHADER_CHANGE_REFUSED`](constant.SHADER_CHANGE_REFUSED.md#rustdoc-item-1676) — What [`pill_render_data_shader_changed`] returns when it cannot reach the
