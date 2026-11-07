<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-439"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::report_selection_change`

```rust
pub fn report_selection_change(selection: &EditorSelection, before: &[Entity], entity: Entity) -> bool;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:155`

Logs the `[editor] selection changed` token for a move the click helpers
made, and returns whether the entity set changed.
