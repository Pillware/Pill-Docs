<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2226"></a>

# Module `pill_master_renderer::resources::engine_parameters`

Visibility: `{'restricted': {'parent': 2227, 'path': '::resources'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\engine_parameters.rs:1`

The engine-wide uniform block a pass may read.

## Responsibilities

- Define the layout the GPU reads ([`EngineParametersData`](struct.EngineParametersData.md#rustdoc-item-2146)) and hold the
  CPU-side copy the renderer updates every frame, so both carry the same
  values.
- Own the uniform buffer that carries those values, together with its bind
  group layout and bind group ([`EngineParameters`](struct.EngineParameters.md#rustdoc-item-2195)).

## Design

One instance lives on the renderer and is refilled once for each surface
frame: [`EngineParameters::update`](struct.EngineParameters.md#rustdoc-item-2194) rewrites the whole buffer, so the CPU
copy and the GPU buffer always match and no code has to track which fields
changed. The fog values come first because the HLSL `EngineParams` in
`pill_master_renderer_data/shader_sources/common_shaders/include/common.hlsl`
declares them at the same offsets. The frame size and time follow; the
engine adds them, and no shipped shader declares them.

## Module contents

### Structs
- [`EngineParameters`](struct.EngineParameters.md#rustdoc-item-2195) — The engine parameters as the renderer owns them: the values, the buffer
- [`EngineParametersData`](struct.EngineParametersData.md#rustdoc-item-2146) — The engine-wide uniform block a pass may read, in its GPU layout.
