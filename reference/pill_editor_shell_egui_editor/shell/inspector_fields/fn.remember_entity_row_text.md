<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-658"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::remember_entity_row_text`

```rust
pub fn remember_entity_row_text(session: &mut InspectorSession, key: &str, text: &str) -> bool;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:904`

Records the text an entity row draws and answers whether it changed since
the last frame that drew the row.
