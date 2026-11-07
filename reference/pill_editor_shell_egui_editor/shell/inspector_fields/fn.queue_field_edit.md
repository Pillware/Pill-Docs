<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-668"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::queue_field_edit`

```rust
pub fn queue_field_edit(pending: &mut PendingEditorCommands, targets: &[Entity], entity: Entity, type_name: &str, field: &str, value: FieldValue);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:1062`

Queues one field edit for **every** selected entity that carries the
component, as one recorded step.

`targets` is [`super::tab_inspector::inspector_targets`](../tab_inspector/fn.inspector_targets.md#rustdoc-item-577)'s answer: the
primary entity first, then the other selected entities that carry the
component. One batch is one undo step however many entities the row wrote,
and the coalesce key comes from the primary, so a drag across a
multi-selection still collapses into a single step.
