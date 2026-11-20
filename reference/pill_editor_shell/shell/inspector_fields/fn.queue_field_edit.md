<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-693"></a>

# Function `pill_editor_shell::shell::inspector_fields::queue_field_edit`

```rust
pub fn queue_field_edit(pending: &mut PendingEditorCommands, targets: &[Entity], entity: Entity, type_name: &str, field: &str, value: FieldValue, phase: pill_editor_core::hooks::FieldEditPhase);
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1113`

Queues one field edit for **every** selected entity that carries the
component, as one recorded step.

`targets` is [`super::tab_inspector::inspector_targets`](../tab_inspector/fn.inspector_targets.md#rustdoc-item-599)'s answer: the
primary entity first, then the other selected entities that carry the
component. One batch is one undo step however many entities the row wrote,
and the coalesce key comes from the primary, so a drag across a
multi-selection still collapses into a single step.
