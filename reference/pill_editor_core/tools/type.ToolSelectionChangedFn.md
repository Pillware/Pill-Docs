<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11022"></a>

# Type alias `pill_editor_core::tools::ToolSelectionChangedFn`

```rust
pub type ToolSelectionChangedFn = fn (entity: pill_engine::Entity, previous: &[u64], current: &[u64], world: &pill_engine::World);
```

Source: `editor\pill_editor_core\src\tools.rs:538`

Hears every element-selection change, whatever changed it: a click, a
marquee, an undo, or a command that cleared the slot.
