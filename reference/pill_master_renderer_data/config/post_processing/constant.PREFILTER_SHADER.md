<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1488"></a>

# Constant `pill_master_renderer_data::config::post_processing::PREFILTER_SHADER`

```rust
pub(in config::post_processing) const PREFILTER_SHADER: &str = "post_processing/shaders/bloom_prefilter_fragment.hlsl";
```

Visibility: `{'restricted': {'parent': 1483, 'path': '::config::post_processing'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\post_processing\mod.rs:62`

The bloom prefilter's fragment stage, named twice: once as the `.hlsl`
source path it is imported from, and once as the cooked file beside it.
