<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1831"></a>

# Function `pill_editor_core::commands::read_gizmo_settings`

```rust
pub fn read_gizmo_settings(directory: &std::path::Path, project: &str) -> crate::gizmo::GizmoSettings;
```

Source: `editor\pill_editor_core\src\commands.rs:978`

Reads the gizmo settings a project starts a session with.

The file's last-used values are applied first, then the project's own
remembered entry, then the defaults for anything neither sets. The snapping
steps come from the file alone, one set for every project. A missing or
unreadable file gives the defaults and never an error. The tool has to work
before anyone edits preferences.
