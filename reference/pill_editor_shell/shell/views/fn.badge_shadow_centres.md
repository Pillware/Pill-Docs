<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-404"></a>

# Function `pill_editor_shell::shell::views::badge_shadow_centres`

```rust
pub fn badge_shadow_centres(mark: egui::Rect) -> [egui::Pos2; 9];
```

Source: `editor\pill_editor_shell\src\shell\views.rs:186`

Returns the centres a badge's shadow is drawn at: the mark's centre moved
to the shadow's place, then moved to each blur sample around that point.
