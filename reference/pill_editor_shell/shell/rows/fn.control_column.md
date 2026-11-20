<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-487"></a>

# Function `pill_editor_shell::shell::rows::control_column`

```rust
pub fn control_column(ui: &mut egui::Ui, draw_control: &mut dyn FnMut(&mut egui::Ui));
```

Source: `editor\pill_editor_shell\src\shell\rows.rs:182`

Draws a row's control in a column exactly as wide as the room left in the
row, and claims exactly that width.

A control laid out wider than the column is cut at the column's edge, but
it never widens the row: a row that grew would widen the whole panel, every
row after it would be laid out to the wider width, and the panel's own edge
would cut them all. The column is as tall as its control, and at least
[`ROW_HEIGHT`](constant.ROW_HEIGHT.md#rustdoc-item-479).
