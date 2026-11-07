<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-830"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_assets::assets_path_bar`

```rust
pub fn assets_path_bar(ui: &mut egui::Ui, browser: &mut ProjectBrowser);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_assets.rs:309`

Draws the path strip over the grid: the asset root, then one segment per
part of the open folder. Every segment but the last is a link, so one
click moves back up to that ancestor.
