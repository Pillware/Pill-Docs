<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5559"></a>

# Function `pill_editor_core::menubar::mark_rect`

```rust
pub fn mark_rect(bar_height: f32) -> egui::Rect;
```

Source: `editor\pill_editor_core\src\menubar.rs:196`

Returns the mark's rectangle in a bar `bar_height` points tall. The
rectangle is a square, inset by [`MENU_MARK_LEFT`](constant.MENU_MARK_LEFT.md#rustdoc-item-5389) on the left and
centred vertically.
