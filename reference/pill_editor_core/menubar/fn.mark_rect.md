<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7523"></a>

# Function `pill_editor_core::menubar::mark_rect`

```rust
pub fn mark_rect(bar_height: f32) -> egui::Rect;
```

Source: `editor\pill_editor_core\src\menubar.rs:200`

Returns the mark's rectangle in a bar `bar_height` points tall. The
rectangle is a square, inset by [`MENU_MARK_LEFT`](constant.MENU_MARK_LEFT.md#rustdoc-item-7352) on the left and
centred vertically.
