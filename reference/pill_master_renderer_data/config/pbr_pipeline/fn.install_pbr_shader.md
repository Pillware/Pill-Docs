<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1476"></a>

# Function `pill_master_renderer_data::config::pbr_pipeline::install_pbr_shader`

```rust
pub(in config::pbr_pipeline) fn install_pbr_shader(assets: &mut pill_engine::AssetManager) -> Result<pill_engine::Handle<crate::assets::Shader>, Box<dyn std::error::Error>>;
```

Visibility: `{'restricted': {'parent': 1470, 'path': '::config::pbr_pipeline'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\pbr_pipeline\mod.rs:161`

Imports the chain's shader from its source, or returns the one the store
already holds.

The source lives under this module's `shader_sources` root, which
[`register`](crate::register) declares. The `.hlsl.meta` beside it carries
the guid every material file names and the slots the pass reads.

## Errors

Returns the store's import error when the source or its `.hlsl.meta` will not
load.

## Panics

Panics when the imported shader does not carry [`SHADER_GUID`](constant.SHADER_GUID.md#rustdoc-item-205), which happens
when the meta is missing or names another guid.
