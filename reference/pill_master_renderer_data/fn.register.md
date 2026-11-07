<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1475"></a>

# Function `pill_master_renderer_data::register`

```rust
pub fn register(engine: &mut pill_engine::Engine) -> u32;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\pill_master_renderer_data.rs:109`

Registers the renderer's components, asset types and resources with an
engine and installs its default pipeline, then returns zero.

This is the half a reload repeats: every declaration below points at code
in the arriving image, so a generation that skipped it would leave the
kept tables calling into an image that is no longer mapped.

It registers no system. Filling the frame and drawing it belong to the GPU
module (`pill_master_renderer`), and a headless engine has neither.

The components go in through [`register_components`](components/fn.register_components.md#rustdoc-item-1364). The six asset types
declare themselves, so the tables that hold their values point at code in
the artifact that is still mapped without a call here. The [`RenderFrame`]
and [`RenderingManager`](rendering_manager/struct.RenderingManager.md#rustdoc-item-1633) values are only inserted when they are missing.
Declaring a type or a resource again changes nothing, so calling this a
second time changes nothing either.

It also installs the PBR pipeline ([`config::pbr_pipeline`](config/pbr_pipeline/index.md#rustdoc-item-1470)) and points the
manager at it, so a project that never declares a frame still draws one.
That is only a default: a project that wants a different chain calls
[`RenderingManager::set_pipeline`](rendering_manager/struct.RenderingManager.md#rustdoc-item-1637) after registering, and one that wants the
renderer's own chain clears the manager.

## Panics

Panics when one of this crate's asset roots exists but a file it names
below that root is missing. `declare_crate_roots` makes that check while
this function runs.
