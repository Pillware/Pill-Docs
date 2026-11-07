<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-578"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_inspector::inspector_section_header`

```rust
pub fn inspector_section_header(ui: &mut egui::Ui, component: &ComponentView, collapsed: bool, session: &mut InspectorSession) -> egui::Response;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_inspector.rs:404`

Draws one component section's header bar: the foldout caret, the
component's duotone icon and its label, on the panel's control fill.

Returns the bar's response. The whole bar is clickable, and the caller
toggles the section when the response reports a click. The bar logs its
rectangle once per placement.
