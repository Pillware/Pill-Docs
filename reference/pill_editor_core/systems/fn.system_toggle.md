<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8466"></a>

# Function `pill_editor_core::systems::system_toggle`

```rust
pub fn system_toggle(index: usize, enabled: bool) -> (crate::editor_state::EditorCommand, String);
```

Source: `editor\pill_editor_core\src\systems.rs:52`

The recorded toggle a state button queues: a `SetSystemEnabled` edit
paired with the label its undo entry takes.
