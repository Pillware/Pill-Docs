<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-204"></a>

# Function `pill_editor_shell::shell::tab_systems::systems_tab`

```rust
pub fn systems_tab(argument_0: &mut egui::Ui, argument_1: &EditorSnapshot, argument_2: &mut PendingEditorCommands);
```

Source: `editor\pill_editor_shell\src\shell\tab_systems.rs:28`

Draws the Systems tab: the Pause/Resume and Step buttons and the count of
enabled systems, then one row per registered system. A row shows the
system's name and the module that owns it, with an `on`/`off` button that
queues the recorded, undoable toggle.
