<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8816"></a>

# Function `pill_engine_core::services::gizmos::transform_point`

```rust
pub fn transform_point(to_world: &[[f32; 4]; 4], point: [f32; 3]) -> [f32; 3];
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:220`

Turns a point in an entity's own space into world space through
[`GizmoContext::to_world`](struct.GizmoContext.md#rustdoc-item-8788).
