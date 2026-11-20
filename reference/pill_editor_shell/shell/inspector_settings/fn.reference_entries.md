<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-876"></a>

# Function `pill_editor_shell::shell::inspector_settings::reference_entries`

```rust
pub fn reference_entries(root: &JsonValue, family: &str) -> Vec<JsonValue>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:265`

Returns the entries a reference family's list holds, cloned out of the
settings document.

The family's block draws them, and an entry's remove rewrites the list
without the one that was dropped.
