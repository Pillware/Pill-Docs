<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6386"></a>

# Function `pill_editor_core::previews::render_previews`

```rust
pub fn render_previews(preferences_document: &serde_json::Map<String, serde_json::Value>) -> bool;
```

Source: `editor\pill_editor_core\src\previews.rs:45`

Whether the preferences document asks for rendered asset previews.

A stored `false` turns them off, whether it is a boolean or the text
`false` (letter case and surrounding spaces are ignored). Any other value
leaves them on, and a missing key does too, so a fresh preferences file
renders previews.
