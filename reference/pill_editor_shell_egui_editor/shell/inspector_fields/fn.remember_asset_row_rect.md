<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-663"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::remember_asset_row_rect`

```rust
pub fn remember_asset_row_rect(session: &mut InspectorSession, key: &str, rect: egui::Rect, visible: bool);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:977`

Logs an asset row's rectangle once per placement, keyed by
`entity.component.field`, so a suite can drop an asset onto it.

Only a row whose centre is inside its visible area reaches the log: a row
scrolled out of the panel cannot be clicked or dropped on. The line itself
belongs to a scripted run.
