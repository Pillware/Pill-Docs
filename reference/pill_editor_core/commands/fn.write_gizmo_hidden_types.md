<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1881"></a>

# Function `pill_editor_core::commands::write_gizmo_hidden_types`

```rust
pub fn write_gizmo_hidden_types(directory: &std::path::Path, hidden_types: &[String]) -> Result<(), String>;
```

Source: `editor\pill_editor_core\src\commands.rs:1100`

Writes the component gizmo types the editor hides into the preferences
file.

This reads the document, changes only the `gizmo.hidden_types` key and
writes it back, so every other key survives. The list is what a reload and
the next session start from, which is why the executable owns the write.

## Errors

Returns a message when the file cannot be read, is not a YAML mapping, or
cannot be written back.
