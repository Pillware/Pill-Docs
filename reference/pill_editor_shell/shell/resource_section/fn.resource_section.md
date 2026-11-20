<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-384"></a>

# Function `pill_editor_shell::shell::resource_section::resource_section`

```rust
pub fn resource_section(ui: &mut egui::Ui, view: &ResourceView, pending: &mut PendingEditorCommands);
```

Source: `editor\pill_editor_shell\src\shell\resource_section.rs:28`

Draws one editable resource: the resource's label as a heading, a note that
every edit here is one undo step, then one row per editable field.
