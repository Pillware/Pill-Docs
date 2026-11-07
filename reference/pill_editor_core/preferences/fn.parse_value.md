<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6378"></a>

# Function `pill_editor_core::preferences::parse_value`

```rust
pub fn parse_value(text: &str) -> serde_json::Value;
```

Source: `editor\pill_editor_core\src\preferences.rs:340`

Parses one row's text into JSON.

The trimmed text is tried as bare JSON first, so a number, a boolean or an
array round-trips. When that fails, the text is quoted and parsed as a JSON
string. Text that still does not parse (it holds an unescaped quote, for
example) is returned as plain text.
