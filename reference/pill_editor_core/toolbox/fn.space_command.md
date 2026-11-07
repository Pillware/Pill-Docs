<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8619"></a>

# Function `pill_editor_core::toolbox::space_command`

```rust
pub fn space_command(space: crate::gizmo::GizmoSpace) -> crate::editor_state::EditorCommand;
```

Source: `editor\pill_editor_core\src\toolbox.rs:361`

Builds the edit that switches the gizmo to one space: `SetGizmoTool` with
the space set and the mode and snapping left unchanged.
