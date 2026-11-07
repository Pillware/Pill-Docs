<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4986"></a>

# Function `pill_editor_core::inspector::selection_targets`

```rust
pub fn selection_targets(selected_details: &[crate::editor_state::EntityDetail], primary: pill_engine::Entity, component: &str) -> Vec<pill_engine::Entity>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1174`

The selected entities one component's edit reaches: the primary first, then
every other selected entity that carries the component.

When a selection has entities without the component, only the ones that
carry it are edited. Writing to an entity without it would fail the command
and put an error in the Console for a row that showed nothing.
