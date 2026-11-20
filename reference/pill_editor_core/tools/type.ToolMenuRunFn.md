<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11012"></a>

# Type alias `pill_editor_core::tools::ToolMenuRunFn`

```rust
pub type ToolMenuRunFn = fn (entity: pill_engine::Entity, kind: &str, selected: &[u64], item: &str, world: &pill_engine::World) -> Result<Vec<crate::editor_state::EditorCommand>, String>;
```

Source: `editor\pill_editor_core\src\tools.rs:464`

Runs one of the tool's menu rows, answering the commands it asks for.

The commands are the row's whole effect and run as one recorded batch, so a
menu row undoes in one step. A row that changes nothing answers an empty
list, and an id the tool does not know answers an error naming it.
