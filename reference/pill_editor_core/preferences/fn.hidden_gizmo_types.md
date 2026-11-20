<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8412"></a>

# Function `pill_editor_core::preferences::hidden_gizmo_types`

```rust
pub fn hidden_gizmo_types(document: &serde_json::Map<String, serde_json::Value>) -> Vec<String>;
```

Source: `editor\pill_editor_core\src\preferences.rs:302`

Returns the component gizmo types the file hides.

The value under [`GIZMO_HIDDEN_TYPES_KEY`](constant.GIZMO_HIDDEN_TYPES_KEY.md#rustdoc-item-8326) is an array of registered
component type names. Entries that are not strings are skipped, and a key
holding something other than an array hides nothing: a file the editor
cannot read that way leaves every gizmo drawing.
