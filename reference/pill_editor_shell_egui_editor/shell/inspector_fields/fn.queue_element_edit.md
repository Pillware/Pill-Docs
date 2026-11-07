<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-669"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::queue_element_edit`

```rust
pub fn queue_element_edit(pending: &mut PendingEditorCommands, targets: &[Entity], entity: Entity, type_name: &str, field: &str, index: usize, value: FieldValue);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:1076`

Queues one array-element edit for every target, as one recorded step.
