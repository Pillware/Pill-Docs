<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4654"></a>

# Function `pill_editor_core::gizmo::basis_from_rotation`

```rust
pub fn basis_from_rotation(rotation: [f32; 4]) -> [[f32; 3]; 3];
```

Source: `editor\pill_editor_core\src\gizmo.rs:1116`

The three axes a rotation turns the world's X/Y/Z into, in axis order.

The gizmo draws and measures in these when the space is the object's own or
one of the tool's frames.
