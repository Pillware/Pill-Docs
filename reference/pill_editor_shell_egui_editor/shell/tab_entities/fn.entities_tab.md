<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-564"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_entities::entities_tab`

```rust
pub fn entities_tab(argument_0: &mut egui::Ui, argument_1: &EditorSnapshot, argument_2: &mut EditorSelection, argument_3: &mut PendingEditorCommands, argument_4: &mut Vec<ShellRect>, argument_5: &mut InspectorSession);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_entities.rs:139`

Draws the Entities tab: one row per live entity, then an empty strip that
offers the same create action.

Only the rows inside the visible part of the list are laid out, so the
tab's cost follows the panel's height rather than the world's size. The
empty strip follows the last row, so it shows once the list is scrolled to
its end.

A left click selects the row, `Shift` extends the selection over a range
and `Ctrl` adds to it. A right click selects the row and opens its menu.
Dragging a row carries its entity to an Inspector reference field.
