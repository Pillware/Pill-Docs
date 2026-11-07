<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5119"></a>

# Function `pill_editor_core::inspector::patch_settings_inserting`

```rust
pub fn patch_settings_inserting(document: &mut serde_json::Value, path: &[SettingsKey], value: serde_json::Value) -> Result<(), String>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1754`

Replace the settings leaf a key path names, creating what is missing on the
way.

This follows the asset-settings rule. A slot or a reference row is drawn
from what the *type* declares, so the file may not hold the key yet - an
unbound texture slot is exactly that - and the first write is the one that
creates it. A missing parent object is created, and an array index one past
the end appends. [`patch_settings`](fn.patch_settings.md#rustdoc-item-5118) is the strict twin: it fails unless every
segment the path names is already in the document.

## Errors

A message naming the segment it could not reach: a parent that is not an
object or an array, an index past the end of an array, or an empty path.
