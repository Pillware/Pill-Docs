<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8872"></a>

# Type alias `pill_engine_core::services::gizmos::GizmoDrawEntry`

```rust
pub type GizmoDrawEntry = fn (_: &crate::ecs::world::World, _: &GizmoFrame, _: &mut GizmoDraw) -> usize;
```

Source: `engine\pill_engine_core\src\services\gizmos.rs:502`

The signature a component's generated gizmo wrapper has.

The wrapper borrows the world read-only, gets the frame's context and draws
into the buffer, and answers how many entities it drew for.
