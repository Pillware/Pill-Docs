<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1473"></a>

# Function `pill_master_renderer_data::config::pbr_pipeline::neutral_parameters`

```rust
pub fn neutral_parameters() -> std::collections::BTreeMap<String, pill_renderer_api::frame::MaterialParameter>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\pbr_pipeline\mod.rs:115`

The PBR shader's parameters at their neutral values, by slot name.

Each factor multiplies the map bound to its slot, so these values leave a
bound map unchanged. A slot with no map bound falls back to the renderer's
default texture for the slot's type. The chain's default material and every
newly created `.material` start from this set, so the two start out the same.
