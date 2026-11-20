<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11235"></a>

# Function `pill_editor_core::tools::element_handles`

```rust
pub fn element_handles(reported: &[ToolElement], kinds: &[ElementKind], entity: pill_engine::Entity, selected: &crate::editor_state::ElementSelection, states: crate::gizmo::HandleStates) -> (Vec<ElementHandle>, crate::gizmo::ElementHandleMap);
```

Source: `editor\pill_editor_core\src\tools.rs:613`

What one frame's elements look like and which handle picks each.

`reported` is the active tool's report for `entity`, in its own order, so a
range click and a marquee both read the order the tool draws in. An element
whose kind the tool does not describe is drawn with [`ElementKind::new`](struct.ElementKind.md#rustdoc-item-10807)'s
defaults: a tool bug must not make an element invisible.
