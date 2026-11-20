<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8415"></a>

# Function `pill_editor_core::preferences::display_value`

```rust
pub(in preferences) fn display_value(json_value: &serde_json::Value) -> String;
```

Visibility: `{'restricted': {'parent': 1700, 'path': '::preferences'}}` · Source: `editor\pill_editor_core\src\preferences.rs:350`

Returns one JSON value as the tab's text: a string verbatim, and anything
else as compact JSON.
