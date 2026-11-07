<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6374"></a>

# Function `pill_editor_core::preferences::gizmo_hit_radius`

```rust
pub fn gizmo_hit_radius(document: &serde_json::Map<String, serde_json::Value>) -> f32;
```

Source: `editor\pill_editor_core\src\preferences.rs:278`

Returns the gizmo handle's hit radius the file asks for, as a multiplier on
the handle length.

The hover test and the press both read this one number, so a handle that
highlights under the pointer is a handle a press grabs. A missing, blank or
unparsable value keeps the default, and a value outside
[`GIZMO_HIT_RADIUS_RANGE`](constant.GIZMO_HIT_RADIUS_RANGE.md#rustdoc-item-6291) is clamped: a zero radius would make the gizmo
ungrabbable.
