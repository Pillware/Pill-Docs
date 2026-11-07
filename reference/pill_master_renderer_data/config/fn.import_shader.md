<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1630"></a>

# Function `pill_master_renderer_data::config::import_shader`

```rust
pub(crate) fn import_shader(assets: &mut pill_engine::AssetManager, relative_path: &str, asset_guid: pill_engine::AssetGuid) -> Result<pill_engine::Handle<crate::assets::Shader>, Box<dyn std::error::Error>>;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\mod.rs:179`

Imports one of the renderer's own shaders, or hands back the one the store
already holds.

`relative_path` is the `.hlsl` source, relative to this crate's
`shader_sources/`. The settings come from the `.hlsl.meta` beside it, so the
slots, the bindings and the guid are declared once, next to the source,
exactly as a project's shader declares them.

## Errors

Returns the store's import error when the source or its meta will not load.

## Panics

Panics when the shader the store yields does not carry `asset_guid`, which
happens when the source's `.hlsl.meta` is missing or names another guid. A
shader like that would be one no material file could name.
