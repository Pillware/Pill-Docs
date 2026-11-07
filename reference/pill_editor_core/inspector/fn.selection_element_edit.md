<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4989"></a>

# Function `pill_editor_core::inspector::selection_element_edit`

```rust
pub fn selection_element_edit(targets: &[pill_engine::Entity], primary: pill_engine::Entity, component: &str, field: &str, index: usize, value: pill_engine::FieldValue) -> (Vec<crate::editor_state::EditorCommand>, String, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:1231`

One recorded batch that writes element `index` of `field` on every target.

The step is labelled and keyed on the element (`field[index]`), which is what
[`element_write`](fn.element_write.md#rustdoc-item-4988) does for a single entity. A drag on one element of an
array is one undo step, and drags on two elements are two.
