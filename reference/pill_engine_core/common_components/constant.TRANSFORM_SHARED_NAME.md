<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2690"></a>

# Constant `pill_engine_core::common_components::TRANSFORM_SHARED_NAME`

```rust
pub const TRANSFORM_SHARED_NAME: &str = "pill_master_renderer::component::TransformComponent";
```

Source: `engine\pill_engine_core\src\common_components.rs:48`

The shared name [`TransformComponent`](struct.TransformComponent.md#rustdoc-item-2689) registers under.

The name is pinned here and not derived from the module path. A derived
name would register a different component, and a live world's stored column
for this one would no longer be found.
