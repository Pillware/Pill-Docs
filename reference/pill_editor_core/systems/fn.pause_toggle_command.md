<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8468"></a>

# Function `pill_editor_core::systems::pause_toggle_command`

```rust
pub fn pause_toggle_command(paused: bool) -> crate::editor_state::EditorCommand;
```

Source: `editor\pill_editor_core\src\systems.rs:71`

The pause toggle the Pause/Resume control queues: a `SetPaused` edit that
flips the engine's pause flag. It applies without being recorded, so
pausing never becomes an undo entry.
