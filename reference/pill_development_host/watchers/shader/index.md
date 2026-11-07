<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4305"></a>

# Module `pill_development_host::watchers::shader`

Visibility: `{'restricted': {'parent': 4303, 'path': '::watchers'}}` · Source: `hosting\pill_development_host\src\watchers\shader.rs:1`

A shader source tree: an edit is cooked again and queued as one output per
changed file.
Development shader reload, host half: watch a shader source tree, re-cook
edits, and queue the results.

## Responsibilities

- Watch one tree for HLSL edits, wait for a burst of events to stop
  (debounce), and then cook the whole tree with
  [`pill_assets::cook_shader_tree`]. That is the same routine the data
  crate's build script runs, so both produce the same outputs.
- Queue every output whose text changed as a [`CookedShader`] for the main
  thread, with both the output's and its source's path.

## Design

Two trees are watched with this worker: the renderer data crate's
`shader_sources/`, whose outputs the data crate's own export applies to the
shaders built from that tree, and the project's `res`, whose outputs are
read by the shader asset's import and therefore only need the asset to be
reimported.

The worker thread runs only host code and `slangc`, never inside a module
image, so a data crate reload can swap the image at any time. The main
thread hands the queue over at the frame boundary, after the reloads, using
the export of the data generation that is current at that moment.

Cooking writes only stale outputs, so editing a header makes every source
stale again. A cook that fails is logged and queues nothing, so the shaders
already loaded keep drawing. What gets queued is every output whose text
differs from the last text the worker saw for it, not only the outputs this
cook rebuilt. The data crate's build script runs the same cook, so it can
reach an edited source first; the worker then finds nothing stale, yet the
edit still has to reach the running world. Only `.hlsl` events count. The
cooked `.wgsl` files sit beside the sources and would otherwise feed back
in as edits.

## Module contents

### Structs
- [`CookedShader`](struct.CookedShader.md#rustdoc-item-4309) — One re-cooked WGSL file, waiting for the main thread.
- [`ShaderWatcher`](struct.ShaderWatcher.md#rustdoc-item-4059) — A running shader watcher. Dropping it stops the worker the next time it

### Functions
- [`cook_edited_shaders`](fn.cook_edited_shaders.md#rustdoc-item-4373) — Cooks the tree after the edits in `edited_paths` settled, and returns every
- [`is_shader_source`](fn.is_shader_source.md#rustdoc-item-4371) — Whether an edited file is one a cook reads.
- [`read_output_texts`](fn.read_output_texts.md#rustdoc-item-4372) — Returns the text of every cooked `.wgsl` file under `shaders_directory`,
- [`relative_path_from_root`](fn.relative_path_from_root.md#rustdoc-item-4374) — Returns `path` relative to `root`, using `/` as the separator, in the form

### Constants
- [`SOURCE_EXTENSION`](constant.SOURCE_EXTENSION.md#rustdoc-item-4304) — Extension of the source files whose edits start a cook.
