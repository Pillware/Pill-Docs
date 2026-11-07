<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1529"></a>

# Constant `pill_master_renderer_data::config::simple_pipeline::SHADER_GUID`

```rust
pub const SHADER_GUID: pill_engine::AssetGuid = _;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\simple_pipeline\mod.rs:81`

The guid the shader is stored under.

It is derived from a fixed name instead of drawn at random, so every
checkout and every run gives the same value. The `.hlsl.meta` beside the
source carries that value.
