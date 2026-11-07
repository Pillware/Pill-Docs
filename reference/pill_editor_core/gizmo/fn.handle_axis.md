<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4024"></a>

# Function `pill_editor_core::gizmo::handle_axis`

```rust
pub fn handle_axis(handle: u32) -> Option<(GizmoMode, usize)>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:478`

Which mode and axis a handle belongs to; `None` for an id this module never
issues, or for a plane handle.
