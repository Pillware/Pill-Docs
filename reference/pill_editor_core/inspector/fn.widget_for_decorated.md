<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4683"></a>

# Function `pill_editor_core::inspector::widget_for_decorated`

```rust
pub fn widget_for_decorated(value: &pill_engine::FieldValue, decorators: &[pill_engine::component_registry::FieldDecorator]) -> FieldWidget;
```

Source: `editor\pill_editor_core\src\inspector.rs:232`

The widget a field's value asks for once its decorators are applied.

A decorator that cannot apply to the value is ignored, not refused: a
`[Range]` on a string or a `[TextArea]` on a number still draws its field.
The declaration only says how a field should look, and a wrong one must not
hide the field it decorates. A range wins over a minimum, because a slider
already bounds the value below. `[TextArea]` takes its `min_lines` as the
box height, and `[Multiline]` its count.
