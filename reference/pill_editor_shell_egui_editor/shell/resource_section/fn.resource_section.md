<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-376"></a>

# Function `pill_editor_shell_egui_editor::shell::resource_section::resource_section`

```rust
pub fn resource_section(ui: &mut egui::Ui, view: &ResourceView, pending: &mut PendingEditorCommands);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\resource_section.rs:28`

Draws one editable resource: the resource's label as a heading, a note that
every edit here is one undo step, then one row per editable field.
