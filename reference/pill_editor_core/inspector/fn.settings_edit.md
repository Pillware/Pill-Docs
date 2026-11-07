<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5121"></a>

# Function `pill_editor_core::inspector::settings_edit`

```rust
pub fn settings_edit(asset_path: &str, settings_document: serde_json::Value, key_text: &str) -> (crate::editor_state::EditorCommand, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:1845`

The recorded settings edit: `SetAssetSettings` under the label the
history and the suite read.
