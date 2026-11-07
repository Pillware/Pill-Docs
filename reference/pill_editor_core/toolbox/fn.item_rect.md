<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8479"></a>

# Function `pill_editor_core::toolbox::item_rect`

```rust
pub fn item_rect(item: ToolboxItem, origin: egui::Pos2) -> egui::Rect;
```

Source: `editor\pill_editor_core\src\toolbox.rs:99`

Returns one row's rectangle inside the panel.

A row that [`TOOLBOX_ITEMS`](constant.TOOLBOX_ITEMS.md#rustdoc-item-7547) does not list takes the first row's place.
Every [`ToolboxItem`](enum.ToolboxItem.md#rustdoc-item-5566) variant is listed, so that only keeps the function
total.
