<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4175"></a>

# Function `pill_editor_core::gizmo::snap_value`

```rust
pub fn snap_value(value: f32, step: f32) -> f32;
```

Source: `editor\pill_editor_core\src\gizmo.rs:937`

Round `value` to the nearest multiple of `step`; a non-positive step
leaves it alone.
