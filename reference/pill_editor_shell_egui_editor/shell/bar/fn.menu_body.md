<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-221"></a>

# Function `pill_editor_shell_egui_editor::shell::bar::menu_body`

```rust
pub fn menu_body(ui: &mut egui::Ui, menu: menubar::Menu, session: &mut MenubarSession, viewer: &mut EditorTabViewer<'_>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\bar.rs:121`

Draws one open menu: the rows its model returns, each row's rectangle in
the placement log, and the action a click runs.
