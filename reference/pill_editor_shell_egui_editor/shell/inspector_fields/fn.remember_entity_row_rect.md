<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-659"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::remember_entity_row_rect`

```rust
pub fn remember_entity_row_rect(session: &mut InspectorSession, key: &str, rect: egui::Rect, visible: bool);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:914`

Logs an entity row's rectangle once per placement, keyed by
`entity.component.field`, so a suite can drop an entity onto it.

The placement is recorded whether or not the line is logged, and the line
goes out only when the session logs rectangles. It exists to aim a scripted
drop and adds nothing to a person's console.
