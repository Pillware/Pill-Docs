<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-559"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_entities::remember_hierarchy_row_rect`

```rust
pub fn remember_hierarchy_row_rect(session: &mut InspectorSession, entity: Entity, rect: egui::Rect);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_entities.rs:38`

Record an Entities row's rectangle in the shell's session.

The row logs its rectangle on its first draw and whenever it moves, so a
suite can drag from a row it cannot otherwise locate.
