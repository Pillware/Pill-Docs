<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5071"></a>

# Function `pill_editor_core::inspector::parse_field_value`

```rust
pub fn parse_field_value(text: &str, current: &pill_engine::FieldValue) -> Result<pill_engine::FieldValue, String>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1539`

Parse an edited text back into the kind `current` already holds.

The scripted channel and a text field both commit through this. A float
field takes a float, a text field takes the rest of the line, and a kind
with no editor is refused.

## Errors

A message saying the text is not a float, an integer, an unsigned number or
a boolean, as the field's kind requires, or that the field's kind has no
editor here.
