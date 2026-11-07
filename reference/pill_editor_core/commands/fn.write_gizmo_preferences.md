<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1833"></a>

# Function `pill_editor_core::commands::write_gizmo_preferences`

```rust
pub fn write_gizmo_preferences(directory: &std::path::Path, project: &str, settings: &crate::gizmo::GizmoSettings) -> Result<(), String>;
```

Source: `editor\pill_editor_core\src\commands.rs:1034`

Writes one project's gizmo choices into the preferences file.

This reads the document, changes only the gizmo keys and writes it back,
so every other key survives. The top-level fields hold the values written
last, which a project without an entry of its own starts from; the
project's own entry is what its next session starts with. The write goes
through a temporary file and a rename, so the live reload reader never sees
a half-written document.

## Errors

Returns a message when the file cannot be read, is not a JSON object, or
cannot be written back.
