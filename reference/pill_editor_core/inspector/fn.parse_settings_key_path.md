<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5115"></a>

# Function `pill_editor_core::inspector::parse_settings_key_path`

```rust
pub fn parse_settings_key_path(text: &str) -> Result<Vec<SettingsKey>, String>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1606`

Parse a settings key path: dotted object keys with `[i]` array indexes,
like `waves[0].amplitude`.

## Errors

A message naming the text when a key is empty, a bracket is unbalanced, an
index is not a number, or the path names no key at all.
