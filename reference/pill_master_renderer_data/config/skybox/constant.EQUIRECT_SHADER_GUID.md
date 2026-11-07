<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1539"></a>

# Constant `pill_master_renderer_data::config::skybox::EQUIRECT_SHADER_GUID`

```rust
pub const EQUIRECT_SHADER_GUID: pill_engine::AssetGuid = _;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\skybox\mod.rs:81`

The guid the equirect skybox shader is stored under, so a sky material file
can name it.

It is derived from a seed string rather than drawn at random, so every
checkout and every run gives the shader the same guid. The `.hlsl.meta`
beside the source has to carry this value, and [`install_shaders`](fn.install_shaders.md#rustdoc-item-1538) checks
that it does.
