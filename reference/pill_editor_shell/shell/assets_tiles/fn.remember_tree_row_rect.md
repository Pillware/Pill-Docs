<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-955"></a>

# Function `pill_editor_shell::shell::assets_tiles::remember_tree_row_rect`

```rust
pub fn remember_tree_row_rect(browser: &mut ProjectBrowser, path: &str, rect: egui::Rect);
```

Source: `editor\pill_editor_shell\src\shell\assets_tiles.rs:118`

Logs a folder tree row's rectangle each time it moves, keyed by the folder,
so a test suite can right-click the row without reading pixels.
