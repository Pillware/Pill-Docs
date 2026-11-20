<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11018"></a>

# Type alias `pill_editor_core::tools::ToolPressFn`

```rust
pub type ToolPressFn = fn (entity: pill_engine::Entity, element: u64, click: crate::editor_state::SelectionClick, selected: &[u64], world: &pill_engine::World) -> PressResponse;
```

Source: `editor\pill_editor_core\src\tools.rs:510`

Answers one press on one element of the tool's own kind.

`click` is what the held modifiers mean, so a tool's rule can honour Shift
and Ctrl the way the editor's does.
