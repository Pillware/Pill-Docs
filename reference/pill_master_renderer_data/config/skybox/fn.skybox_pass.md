<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1545"></a>

# Function `pill_master_renderer_data::config::skybox::skybox_pass`

```rust
pub fn skybox_pass<impl Into<String>: Into<String>>(name: impl Into<String>, material: pill_engine::Handle<crate::assets::Material>, target: crate::assets::PassTarget, order: u8) -> crate::assets::RenderPass;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\skybox\mod.rs:159`

Build a skybox pass named `name` that draws `material` into `target`.

`order` places the pass among the geometry passes it sits behind. The pass
reads the depth those passes wrote, so `target` has to be the target they
wrote.

A pass with no material ([`Handle::INVALID`]) cannot be drawn, so the pass
starts disabled.
