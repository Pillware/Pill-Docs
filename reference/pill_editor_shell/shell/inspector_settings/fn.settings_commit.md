<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-897"></a>

# Function `pill_editor_shell::shell::inspector_settings::settings_commit`

```rust
pub fn settings_commit(pending: &mut PendingEditorCommands, asset_path: &str, root: &JsonValue, key: &str, value: JsonValue);
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:1181`

Queue the recorded edit that puts `value` at `key` in the settings, and
carry the whole patched document in the command.

A key that does not parse queues nothing and stays silent. A document the
patched path cannot reach queues nothing and logs a warning naming the
segment it could not reach.
