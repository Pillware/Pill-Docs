<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6375"></a>

# Function `pill_editor_core::preferences::gizmo_icon_size`

```rust
pub fn gizmo_icon_size(document: &serde_json::Map<String, serde_json::Value>) -> f32;
```

Source: `editor\pill_editor_core\src\preferences.rs:296`

Returns the scene badges' icon size the file asks for, in points.

The mark and the rectangle that picks it both scale with this one number.
A missing, blank or unparsable value keeps the default, and a value outside
[`GIZMO_ICON_SIZE_RANGE`](constant.GIZMO_ICON_SIZE_RANGE.md#rustdoc-item-6294) is clamped: a zero or negative size would draw
nothing to click on.
