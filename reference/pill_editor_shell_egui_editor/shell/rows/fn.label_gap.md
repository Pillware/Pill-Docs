<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-468"></a>

# Function `pill_editor_shell_egui_editor::shell::rows::label_gap`

```rust
pub fn label_gap(ui: &mut egui::Ui);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\rows.rs:104`

Adds the rest of the gap after a label cell, so the label and its control
stand at least [`ROW_LABEL_GAP`](constant.ROW_LABEL_GAP.md#rustdoc-item-465) points apart. egui already adds its item
spacing between the two widgets, so this adds only the part still missing.
