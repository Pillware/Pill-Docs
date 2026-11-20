<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-488"></a>

# Function `pill_physics::components::__pill_gizmo_ColliderComponent`

```rust
pub(in components) fn __pill_gizmo_ColliderComponent(world: &::pill_engine::World, frame: &::pill_engine::gizmos::GizmoFrame, draw: &mut ::pill_engine::gizmos::GizmoDraw) -> usize;
```

Visibility: `{'restricted': {'parent': 356, 'path': '::components'}}` · Source: `extensions\pill_physics\modules\runtime\src\components.rs:141`

Draws this component's gizmo for every entity that carries
it, generated from the type's `#[pill(gizmo = ...)]`
declaration.
