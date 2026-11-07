<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1500"></a>

# Function `pill_master_renderer_data::config::post_processing::install`

```rust
pub fn install(assets: &mut pill_engine::AssetManager) -> Result<Vec<pill_engine::Handle<crate::assets::RenderPass>>, Box<dyn std::error::Error>>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\post_processing\mod.rs:198`

Install the four post-processing passes.

The passes come back in the order the frame runs them. The grain tile the
last pass samples is not returned: the lens pass already holds that texture,
and a second handle would let the two disagree.

A store that already holds all four passes gets the same handles back
instead of a second copy, so this is safe to call once per generation.

## Errors

Returns an error when the store already holds an asset of the same kind
under one of these names, or when one of the shaders fails to build.
