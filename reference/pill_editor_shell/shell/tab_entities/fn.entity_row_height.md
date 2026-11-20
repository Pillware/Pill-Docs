<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-579"></a>

# Function `pill_editor_shell::shell::tab_entities::entity_row_height`

```rust
pub fn entity_row_height(ui: &egui::Ui) -> f32;
```

Source: `editor\pill_editor_shell\src\shell\tab_entities.rs:82`

The height of one Entities row, without the spacing between rows.

A row is a selectable button, which egui sizes to its text plus the button
padding, and never below the interact height. Every row has the same
height, which is what lets the tab lay out only the rows on screen.
