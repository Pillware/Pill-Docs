<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1874"></a>

# Function `pill_editor::runner::element_drag_elements`

```rust
pub(in runner) fn element_drag_elements(world: &pill_engine_core::World, entity: pill_engine_core::Entity) -> Option<(String, Vec<(u64, tools::ElementTransform)>)>;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4391`

The elements a gizmo drag addresses, with the transforms they have now.

`None` when nothing is selected in the element slot, the selection belongs
to another entity, the active tool writes no elements back, or it reports
none of the selected ones.
