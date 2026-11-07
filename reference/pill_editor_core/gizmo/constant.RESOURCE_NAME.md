<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3775"></a>

# Constant `pill_editor_core::gizmo::RESOURCE_NAME`

```rust
pub const RESOURCE_NAME: &str = "pill_editor_core::gizmo::GizmoState";
```

Source: `editor\pill_editor_core\src\gizmo.rs:63`

The name [`GizmoState`](struct.GizmoState.md#rustdoc-item-3737) registers under, which a `SetResourceField`
command must also carry. Keeping them the same lets a command written by
hand find the resource.
