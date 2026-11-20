<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-954"></a>

# Function `pill_editor_shell::shell::assets_tiles::remember_tile_rect`

```rust
pub fn remember_tile_rect(browser: &mut ProjectBrowser, path: &str, rect: egui::Rect);
```

Source: `editor\pill_editor_shell\src\shell\assets_tiles.rs:91`

Logs a tile's rectangle each time it moves, so a test suite can drag a file
onto a drop target (an Inspector asset row, a folder) without reading
pixels.
