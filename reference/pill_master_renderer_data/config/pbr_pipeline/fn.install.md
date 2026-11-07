<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1459"></a>

# Function `pill_master_renderer_data::config::pbr_pipeline::install`

```rust
pub fn install(assets: &mut pill_engine::AssetManager) -> Result<pill_engine::Handle<crate::assets::RenderingPipeline>, Box<dyn std::error::Error>>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\pbr_pipeline\mod.rs:187`

Installs the PBR chain, and returns the pipeline asset.

The shader the geometry pass draws through is stored under [`SHADER_PATH`](constant.SHADER_PATH.md#rustdoc-item-1463),
which is how a caller that wants it finds it: the pass carries the same
handle, and the store is the index for the name.

Idempotent: a store that already holds the chain gets the same handle back
rather than a second copy of it, so this is safe to call once per generation,
which is what [`register`](crate::register) does.

## Errors

Returns an error when a name this chain owns is already taken by an asset of
another type, when a shader's source or `.hlsl.meta` will not load, or when
the default material's file will not parse.

## Panics

Panics when one of the chain's shaders does not carry the guid its module
declares; see `install_pbr_shader`.
