<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6373"></a>

# Function `pill_editor_core::preferences::keymap_preset`

```rust
pub fn keymap_preset(document: &serde_json::Map<String, serde_json::Value>) -> crate::commands::KeymapPreset;
```

Source: `editor\pill_editor_core\src\preferences.rs:257`

Returns the keymap preset the file selects.

A key that is absent, blank or unknown selects the default, Blender. The
viewport navigation chords are resolved from the result.
