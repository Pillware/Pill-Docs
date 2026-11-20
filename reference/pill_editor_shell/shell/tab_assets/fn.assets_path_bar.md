<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-910"></a>

# Function `pill_editor_shell::shell::tab_assets::assets_path_bar`

```rust
pub fn assets_path_bar(ui: &mut egui::Ui, browser: &mut ProjectBrowser);
```

Source: `editor\pill_editor_shell\src\shell\tab_assets.rs:309`

Draws the path strip over the grid: the asset root, then one segment per
part of the open folder. Every segment but the last is a link, so one
click moves back up to that ancestor.
