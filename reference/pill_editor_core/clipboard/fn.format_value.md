<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-917"></a>

# Function `pill_editor_core::clipboard::format_value`

```rust
pub fn format_value(value: &pill_engine::FieldValue) -> Option<String>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:179`

Returns the token that stands for a field value, or `None` for a value the
payload cannot carry.

Arrays, lists, text, opaque payloads, and asset and entity references have
no token. The last two hold a slot of the world that issued them, so a
token would mean nothing in another process.
