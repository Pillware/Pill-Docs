<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8459"></a>

# Function `pill_editor_core::style::dock_style`

```rust
pub fn dock_style(egui_style: &egui::Style, palette: &Palette) -> egui_dock::Style;
```

Source: `editor\pill_editor_core\src\style.rs:815`

The `egui_dock` styling for the shell's `DockArea`.

It starts from `egui_style` and changes it to the editor's look: flat tabs
that join their active bodies, a dark tab strip and thin separators between
panels. The colours come from `palette`; only an inactive tab's fill is
transparent.
