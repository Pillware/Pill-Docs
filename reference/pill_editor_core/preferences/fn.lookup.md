<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6376"></a>

# Function `pill_editor_core::preferences::lookup`

```rust
pub fn lookup<'a>(document: &'a serde_json::Map<String, serde_json::Value>, key: &str) -> Option<&'a serde_json::Value>;
```

Source: `editor\pill_editor_core\src\preferences.rs:312`

Follows a dotted key through the document.

Returns `None` when a segment is absent, or when a segment before the last
one holds something other than a JSON object.
