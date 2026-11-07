<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-817"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::settings_commit`

```rust
pub fn settings_commit(pending: &mut PendingEditorCommands, asset_path: &str, root: &JsonValue, key: &str, value: JsonValue);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:1183`

Queue the recorded edit that puts `value` at `key` in the settings, and
carry the whole patched document in the command.

A key that does not parse queues nothing and stays silent. A document the
patched path cannot reach queues nothing and logs a warning naming the
segment it could not reach.
