<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4973"></a>

# Function `pill_editor_core::inspector::selection_field_edit`

```rust
pub fn selection_field_edit(targets: &[pill_engine::Entity], primary: pill_engine::Entity, component: &str, field: &str, value: pill_engine::FieldValue) -> (Vec<crate::editor_state::EditorCommand>, String, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:1214`

One recorded batch that writes `value` into `field` on every target, with
its label and coalesce key.

The label names the primary's component and field, so a step reads the same
whether one entity or ten were written. The coalesce key is the primary's,
so one drag across a multi-selection is one undo step.
