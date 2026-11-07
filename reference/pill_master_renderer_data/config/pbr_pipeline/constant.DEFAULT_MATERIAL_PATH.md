<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1465"></a>

# Constant `pill_master_renderer_data::config::pbr_pipeline::DEFAULT_MATERIAL_PATH`

```rust
pub const DEFAULT_MATERIAL_PATH: &str = "defaults/pill.pbr.material";
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\pbr_pipeline\mod.rs:83`

The material file the chain's default material is imported from, relative
to this module's `res`.

The chain's default material is content, not code: this file is its one
definition. The editor lists it read-only under the `extensions` root, and it
is imported like any other standalone `.material` - named by this path and
keyed by the guid in its own header, so a reference to it survives the file
being renamed.
