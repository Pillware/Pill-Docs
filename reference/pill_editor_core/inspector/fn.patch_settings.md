<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5118"></a>

# Function `pill_editor_core::inspector::patch_settings`

```rust
pub fn patch_settings(document: &mut serde_json::Value, path: &[SettingsKey], value: serde_json::Value) -> Result<(), String>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1707`

Replace the settings leaf a key path names.

The containers along the way must already exist, because the editors only
edit what they displayed.

## Errors

A message naming the segment the document does not hold, or saying that the
path is empty.
