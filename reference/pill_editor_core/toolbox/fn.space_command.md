<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10605"></a>

# Function `pill_editor_core::toolbox::space_command`

```rust
pub fn space_command(space: crate::gizmo::GizmoSpace) -> crate::editor_state::EditorCommand;
```

Source: `editor\pill_editor_core\src\toolbox.rs:457`

Builds the edit that switches the gizmo to one space: `SetGizmoTool` with
the space set and the mode and snapping left unchanged.
