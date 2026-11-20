<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-302"></a>

# Function `pill_spline::component::__pill_gizmo_Spline`

```rust
pub(in component) fn __pill_gizmo_Spline(world: &::pill_engine::World, frame: &::pill_engine::gizmos::GizmoFrame, draw: &mut ::pill_engine::gizmos::GizmoDraw) -> usize;
```

Visibility: `{'restricted': {'parent': 4, 'path': '::component'}}` · Source: `extensions\pill_spline\modules\runtime\src\component.rs:138`

Draws this component's gizmo for every entity that carries
it, generated from the type's `#[pill(gizmo = ...)]`
declaration.
