<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11598"></a>

# Function `pill_editor_core::tools::element_selection_subject`

```rust
pub fn element_selection_subject(world: &pill_engine::World) -> Option<(pill_engine::Entity, String, Vec<u64>)>;
```

Source: `editor\pill_editor_core\src\tools.rs:1735`

What a tool acts on: the entity the element selection belongs to (or the
primary entity when nothing is selected yet), the kind the selection is on,
and the selected ids in selection order.

One resolution serves the menu, the press hook, the key hook and the
snapshot, so every hook is told about the same subject.
