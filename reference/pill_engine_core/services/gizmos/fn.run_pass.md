<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9065"></a>

# Function `pill_engine_core::services::gizmos::run_pass`

```rust
pub(in services::gizmos) fn run_pass(world: &mut crate::ecs::world::World, chrome: GizmoChrome) -> Result<(), crate::error::SystemError>;
```

Visibility: `{'restricted': {'parent': 8697, 'path': '::services::gizmos'}}` · Source: `engine\pill_engine_core\src\services\gizmos.rs:773`

One pass: every visible gizmo draws into one buffer, which then reaches the
world's [`DebugDraw`](../debug_draw/struct.DebugDraw.md#rustdoc-item-4313).
