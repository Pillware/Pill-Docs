<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10331"></a>

# Function `pill_editor_core::style::selected_row`

```rust
pub fn selected_row(ui: &egui::Ui, rect: egui::Rect);
```

Source: `editor\pill_editor_core\src\style.rs:343`

Paints the selected row's tinted background and its left accent bar over
`rect`.

The background is the `selection` colour and the bar the `selection_bar`
one, three points wide. A widget that already fills its row with the
`selection` colour calls [`selected_row_bar`](fn.selected_row_bar.md#rustdoc-item-10330) instead.
