<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1471"></a>

# Constant `pill_master_renderer_data::config::pbr_pipeline::SHADER_GUID_NAME`

```rust
pub(in config::pbr_pipeline) const SHADER_GUID_NAME: &str = "pill.pbr.shader";
```

Visibility: `{'restricted': {'parent': 1470, 'path': '::config::pbr_pipeline'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\pbr_pipeline\mod.rs:100`

The name the PBR shader's guid is derived from.

The guid comes from this string instead of being drawn at random, so every
checkout and every run gives the shader the same one. The shader's
`.hlsl.meta` carries that guid, and the shipped default material and the
examples' materials name it.
