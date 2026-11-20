<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7530"></a>

# Function `pill_editor_core::menubar::play_toggle_command`

```rust
pub fn play_toggle_command(run_mode: pill_engine::RunMode) -> crate::editor_state::EditorCommand;
```

Source: `editor\pill_editor_core\src\menubar.rs:441`

The command the play control queues: start a session or stop the one that
runs. Neither is recorded, so a session never becomes an undo step.
