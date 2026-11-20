<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4703"></a>

# Function `pill_editor_core::gizmo::follow_tool`

```rust
pub fn follow_tool(state: &mut GizmoState, choices: &crate::tools::ToolSpaceChoices, tool: Option<&str>, frame_count: usize) -> bool;
```

Source: `editor\pill_editor_core\src\gizmo.rs:1305`

Puts the gizmo back on the space `tool` was last on, and answers whether
that changed the state.

A tool that was never switched keeps the space that is in force: choosing a
tool is not a space change on its own. A remembered frame the arriving tool
no longer offers for this selection falls back to the remembered space, so
a tool whose frame list shrank cannot strand the gizmo in a frame it cannot
name.
