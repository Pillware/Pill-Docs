<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-394"></a>

# Function `pill_editor_shell_egui_editor::shell::views::badge_shadow_centres`

```rust
pub fn badge_shadow_centres(mark: egui::Rect) -> [egui::Pos2; 9];
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\views.rs:153`

Returns the centres a badge's shadow is drawn at: the mark's centre moved
to the shadow's place, then moved to each blur sample around that point.
