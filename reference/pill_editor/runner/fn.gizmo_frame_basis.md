<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1871"></a>

# Function `pill_editor::runner::gizmo_frame_basis`

```rust
pub(in runner) fn gizmo_frame_basis(world: &pill_engine_core::World, entity: pill_engine_core::Entity, gizmo_state: pill_editor_core::gizmo::GizmoState, transform: &pill_player::TransformComponent) -> [[f32; 3]; 3];
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4343`

The frame the gizmo's axes are measured in, a tool's own frame included.

A frame the active tool offers for the selection wins over the settings, so
the handles are drawn in the frame's axes and a drag along one of them
produces the world displacement that frame implies.
