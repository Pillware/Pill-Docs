<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-481"></a>

# Function `pill_editor_shell::shell::rows::label_column_width`

```rust
pub fn label_column_width(ui: &egui::Ui) -> f32;
```

Source: `editor\pill_editor_shell\src\shell\rows.rs:95`

The label column of a panel `ui` lays out: [`LABEL_COLUMN_FRACTION`](constant.LABEL_COLUMN_FRACTION.md#rustdoc-item-476) of
the width it has left, between [`LABEL_COLUMN_MIN_WIDTH`](constant.LABEL_COLUMN_MIN_WIDTH.md#rustdoc-item-474) and
[`LABEL_COLUMN_MAX_WIDTH`](constant.LABEL_COLUMN_MAX_WIDTH.md#rustdoc-item-477). Rows read it before they place anything, so
every row of one panel gets the same column. Below the minimum the column
stays put and the fields take the squeeze.
