<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4570"></a>

# Function `pill_editor_core::icons::paint_duotone`

```rust
pub fn paint_duotone(painter: &egui::Painter, rect: egui::Rect, icon: Icon, color: egui::Color32);
```

Source: `editor\pill_editor_core\src\icons.rs:500`

Paints `icon`'s duotone form centred in `rect`, tinted `color`. The fill
shape is drawn at [`DUOTONE_FILL_ALPHA`](constant.DUOTONE_FILL_ALPHA.md#rustdoc-item-4422) with the line art over it.
