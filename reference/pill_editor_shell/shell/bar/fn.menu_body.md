<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-229"></a>

# Function `pill_editor_shell::shell::bar::menu_body`

```rust
pub fn menu_body(ui: &mut egui::Ui, menu: menubar::Menu, session: &mut MenubarSession, viewer: &mut EditorTabViewer<'_>);
```

Source: `editor\pill_editor_shell\src\shell\bar.rs:206`

Draws one open menu: the rows its model returns, each row's rectangle in
the placement log, and the action a click runs.
