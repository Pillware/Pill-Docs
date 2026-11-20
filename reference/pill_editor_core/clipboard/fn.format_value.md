<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-961"></a>

# Function `pill_editor_core::clipboard::format_value`

```rust
pub fn format_value(value: &pill_engine::FieldValue) -> Option<String>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:186`

Returns the token that stands for a field value, or `None` for a value the
payload cannot carry.

Arrays, lists, text, enums, opaque payloads, and asset and entity
references have no token: an enum value only means something next to the
field tag that names its variants, which a token does not carry. The last two hold a slot of the world that issued them, so a
token would mean nothing in another process.
