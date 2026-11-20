<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1227"></a>

# Function `pill_editor::runner::element_tools::queue_element_selection`

```rust
pub(in runner) fn queue_element_selection(world: &mut pill_engine_core::World, kind: String, elements: Vec<pill_editor_core::editor_state::ElementRef>);
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\element_tools.rs:43`

Queues one recorded element-selection step.

No coalesce key: every click, extend, tool answer and clear is its own undo
step, which is the gesture rule the transform gizmo follows.
