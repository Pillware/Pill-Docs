<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-695"></a>

# Function `pill_editor_shell::shell::inspector_fields::queue_element_edit`

```rust
pub fn queue_element_edit(pending: &mut PendingEditorCommands, targets: &[Entity], entity: Entity, type_name: &str, field: &str, index: usize, value: FieldValue, phase: pill_editor_core::hooks::FieldEditPhase);
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1131`

Queues one array-element edit for every target, as one recorded step.
