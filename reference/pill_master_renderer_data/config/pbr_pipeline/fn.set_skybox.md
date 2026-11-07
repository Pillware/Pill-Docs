<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1466"></a>

# Function `pill_master_renderer_data::config::pbr_pipeline::set_skybox`

```rust
pub fn set_skybox(assets: &mut pill_engine::AssetManager, material: Option<pill_engine::Handle<crate::assets::Material>>) -> Result<pill_engine::Handle<crate::assets::RenderPass>, Box<dyn std::error::Error>>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\pbr_pipeline\mod.rs:269`

Sets `material` as the sky drawn behind the PBR chain's lit surface, or turns
the sky off with `None`, and returns the skybox pass.

The material is a sky material: one of the [`skybox`](../skybox/index.md#rustdoc-item-1479) shaders with its `sky`
slot bound. This installs the chain when the store does not hold it, and adds
the skybox pass right after the lit pass when the chain does not hold it.
Only what differs is written, so calling this on every reload does not make
the renderer rebuild an unchanged chain.

## Errors

Returns an error when the chain does not install, or when the pass's name is
taken by an asset of another type.

## Panics

Panics when one of the chain's shaders does not carry the guid its module
declares; see [`install`](fn.install.md#rustdoc-item-1459).
