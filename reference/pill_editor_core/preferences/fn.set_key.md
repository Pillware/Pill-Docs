<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6379"></a>

# Function `pill_editor_core::preferences::set_key`

```rust
pub fn set_key(document: &mut serde_json::Map<String, serde_json::Value>, key: &str, value: serde_json::Value) -> Result<(), String>;
```

Source: `editor\pill_editor_core\src\preferences.rs:353`

Sets one dotted key, creating intermediate objects on the way.

## Errors

Returns a message when the key is empty, or when a segment on the way is
present and holds something other than an object.
