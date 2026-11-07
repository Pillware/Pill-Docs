<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4165"></a>

# Function `pill_editor_core::gizmo::build_geometry_styled`

```rust
pub fn build_geometry_styled(mode: GizmoMode, origin: [f32; 3], basis: [[f32; 3]; 3], lengths: [f32; 3], states: HandleStates) -> GizmoGeometry;
```

Source: `editor\pill_editor_core\src\gizmo.rs:634`

Builds the handles of `mode` around `origin`, one per basis vector, each as
long as `lengths` gives for its axis.

`states` decides which handle is drawn hovered or active.

A scale drag passes the ratio it is writing as the dragged axis's length,
so that handle grows and shrinks with the object's scale. The translation
tool also builds its three plane squares here, one between each pair of
axes.
