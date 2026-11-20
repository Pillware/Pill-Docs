<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-231"></a>

# Function `pill_editor_shell::shell::bar::run_menu_action`

```rust
pub fn run_menu_action(menu_name: &str, label: &str, action: menubar::MenuAction, session: &mut MenubarSession, viewer: &mut EditorTabViewer<'_>);
```

Source: `editor\pill_editor_shell\src\shell\bar.rs:269`

Runs one menu item through the same calls the tabs, the toolbox and the
scripted channel make.

`menu_name` is the name the menu logs itself under (`file`, `window`, ...,
or `palette`), so every surface that runs a command logs the same field.
