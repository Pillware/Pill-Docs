<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1474"></a>

# Function `pill_master_renderer_data::config::pbr_pipeline::default_sky_pass`

```rust
pub(in config::pbr_pipeline) fn default_sky_pass() -> crate::assets::RenderPass;
```

Visibility: `{'restricted': {'parent': 1470, 'path': '::config::pbr_pipeline'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\pbr_pipeline\mod.rs:136`

Builds the sky pass: a fullscreen triangle at the far plane, into the lit
target, with no material.

It draws into the same target as the lit pass so it can read the depth that
pass left behind. A pass with no material cannot be drawn, so this one starts
disabled until [`set_skybox`](fn.set_skybox.md#rustdoc-item-1466) gives it a material.
