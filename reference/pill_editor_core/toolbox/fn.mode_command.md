<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8618"></a>

# Function `pill_editor_core::toolbox::mode_command`

```rust
pub fn mode_command(mode: crate::gizmo::GizmoMode) -> crate::editor_state::EditorCommand;
```

Source: `editor\pill_editor_core\src\toolbox.rs:351`

Builds the edit that selects one tool: `SetGizmoTool` with the mode set and
the space and snapping left unchanged. The tool rows queue the same edit.
