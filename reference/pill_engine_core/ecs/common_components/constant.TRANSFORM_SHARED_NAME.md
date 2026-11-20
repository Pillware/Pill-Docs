<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2955"></a>

# Constant `pill_engine_core::ecs::common_components::TRANSFORM_SHARED_NAME`

```rust
pub const TRANSFORM_SHARED_NAME: &str = "pill_master_renderer::TransformComponent";
```

Source: `engine\pill_engine_core\src\ecs\common_components.rs:50`

The shared name [`TransformComponent`](struct.TransformComponent.md#rustdoc-item-2954) registers under.

The renderer family publishes its components under one prefix, so the name
is pinned to `pill_master_renderer` rather than derived from this crate.
It must never change: a different name would register a different
component, and a live world's stored column and every scene that names it
would no longer be found.
