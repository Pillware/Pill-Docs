<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-437"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::select_entity`

```rust
pub fn select_entity(selection: &mut EditorSelection, entity: Entity) -> bool;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:131`

Moves the shared selection onto `entity` alone.

It logs the same `[editor] selection changed` token a scene pick logs, so a
suite can watch either path. Returns whether the selection moved.
