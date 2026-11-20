<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4702"></a>

# Function `pill_editor_core::gizmo::next_space`

```rust
pub fn next_space(space: GizmoSpace, tool_frame: Option<u8>, frame_count: usize) -> (GizmoSpace, Option<u8>);
```

Source: `editor\pill_editor_core\src\gizmo.rs:1281`

The space the gizmo's space row switches to next.

The cycle is World, Local, then each frame in the tool's own order, then
World again. `tool_frame` is the frame in force - `None` while one of the
settings' two spaces is - and `frame_count` is how many the active tool
offers, so a tool with none leaves World and Local cycling into each other.
