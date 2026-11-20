<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-795"></a>

# Function `pill_editor_shell::shell::inspector_widgets::read_only_row`

```rust
pub fn read_only_row(ui: &mut egui::Ui, label: &str, value: &str);
```

Source: `editor\pill_editor_shell\src\shell\inspector_widgets.rs:438`

Draws one read-only (name, value) row: the shared label column, then the
value.

The label is also its own tooltip, because the fixed label column truncates
a long name. A value too long for the row is truncated with its own
tooltip, so it never pushes the row wider.
