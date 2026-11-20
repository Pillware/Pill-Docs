<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-703"></a>

# Function `pill_editor_shell::shell::inspector_fields::slot_width_within`

```rust
pub fn slot_width_within(width: f32, components: usize, spacing: f32) -> f32;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1274`

The width each of `components` slots gets in `width` points, after the gap
that follows every slot (the row's own [`VECTOR_SLOT_GAP`](../tab_inspector/constant.VECTOR_SLOT_GAP.md#rustdoc-item-591) plus egui's item
`spacing`).
