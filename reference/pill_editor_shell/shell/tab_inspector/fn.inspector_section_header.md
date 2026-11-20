<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-600"></a>

# Function `pill_editor_shell::shell::tab_inspector::inspector_section_header`

```rust
pub fn inspector_section_header(ui: &mut egui::Ui, component: &ComponentView, collapsed: bool, session: &mut InspectorSession) -> egui::Response;
```

Source: `editor\pill_editor_shell\src\shell\tab_inspector.rs:421`

Draws one component section's header: a separator line across the panel,
then the foldout caret, the component's duotone icon and its label, with no
fill behind them.

Returns the header's response. The whole header is clickable, and the
caller toggles the section when the response reports a click. The header
logs its rectangle once per placement.
