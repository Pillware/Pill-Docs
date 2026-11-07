<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1525"></a>

# Function `pill_master_renderer_data::config::simple_pipeline::install`

```rust
pub fn install(assets: &mut pill_engine::AssetManager) -> Result<pill_engine::Handle<crate::assets::RenderingPipeline>, Box<dyn std::error::Error>>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\simple_pipeline\mod.rs:108`

Install the simple frame, and return the pipeline asset.

Idempotent: a store that already holds the pipeline gets that handle back
rather than a second copy, so calling it again on a later reload generation
is safe.

## Errors

Returns the store's import error when the shader's source, its `.hlsl.meta`
or the cooked `.wgsl` stages they name will not load. Returns
[`pill_engine::AssetBindingError::NameInUse`] when a name it stores under
already belongs to a live asset of that type.

## Panics

Panics when the shader's `.hlsl.meta` is missing or names a guid other than
[`SHADER_GUID`](constant.SHADER_GUID.md#rustdoc-item-1529).
