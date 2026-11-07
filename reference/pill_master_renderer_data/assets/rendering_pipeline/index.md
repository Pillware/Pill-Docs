<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-726"></a>

# Module `pill_master_renderer_data::assets::rendering_pipeline`

Visibility: `{'restricted': {'parent': 248, 'path': '::assets'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\rendering_pipeline.rs:1`

An ordered list of passes, as one asset.

## Responsibilities

- Hold the passes a frame runs, in the order the game wrote them, each with
  this chain's own switch for it ([`PipelinePass`](struct.PipelinePass.md#rustdoc-item-547)).
- Stay a list of handles rather than a copy of the passes, so one pass can
  appear in several pipelines and editing a pass does not duplicate it.

## Design

This asset is only the declaration. The renderer builds the chain from it -
ordering the passes, resolving the targets they name, creating the GPU
pipelines - because it owns the device. The game picks the pipeline by
setting it on `RenderingManager`, and the renderer builds the chain again
whenever that pipeline or the assets change.

The asset is also a file of its own (`.pipeline`), so the editor can create
one and a project can load one by path. Its body names the passes it runs,
in the order they run, and each entry has an optional `enabled` key. That
lets one chain leave a pass out while another chain naming the same pass
still runs it. The pass's own `enabled` key cannot do that, because it
applies to every chain.

Nothing else belongs here. A pass already carries the shader it draws with
and the values it reads, so a pipeline that also listed shaders and textures
would repeat them - and would be out of date as soon as a pass was edited.
What the built-in pipelines' `install` functions put in the store is their
own business; `AssetManager::handle_by_name` finds an asset by name.

## Module contents

### Structs
- [`PipelinePass`](struct.PipelinePass.md#rustdoc-item-547) — One pass in a pipeline, with this chain's own on/off switch for it.
- [`PipelinePassDocument`](struct.PipelinePassDocument.md#rustdoc-item-651) — One entry in a `.pipeline` file: the pass it names, and whether this chain
- [`RenderingPipeline`](struct.RenderingPipeline.md#rustdoc-item-435) — The passes a frame runs, in the order they were added.
- [`RenderingPipelineDocument`](struct.RenderingPipelineDocument.md#rustdoc-item-643) — The pipeline as its file holds it. The passes are listed in the order they

### Functions
- [`enabled_by_default`](fn.enabled_by_default.md#rustdoc-item-725) — The default for `enabled`, which is on. The serde attribute and [`Default`]
