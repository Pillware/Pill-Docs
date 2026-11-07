<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1538"></a>

# Function `pill_master_renderer_data::config::skybox::install_shaders`

```rust
pub fn install_shaders(assets: &mut pill_engine::AssetManager) -> Result<(pill_engine::Handle<crate::assets::Shader>, pill_engine::Handle<crate::assets::Shader>), Box<dyn std::error::Error>>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\skybox\mod.rs:129`

Install the equirect and the cubemap skybox shaders, and return them in
that order.

Idempotent: a store that already holds them hands the same handles back, so
this is safe to call once per generation. It has to run before a sky
material file loads, because the file names its shader by guid.

## Errors

Returns the store's import error when a source or its meta will not load.

## Panics

Panics on the call that imports a shader whose `.hlsl.meta` is missing or
names a different guid than the constant here declares. No material file
could find such a shader.
