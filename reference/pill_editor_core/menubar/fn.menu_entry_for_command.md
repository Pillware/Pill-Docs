<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7528"></a>

# Function `pill_editor_core::menubar::menu_entry_for_command`

```rust
pub(in menubar) fn menu_entry_for_command(command: &crate::commands::CommandView, view: &MenuView<'_>) -> Option<MenuEntry>;
```

Visibility: `{'restricted': {'parent': 7527, 'path': '::menubar'}}` · Source: `editor\pill_editor_core\src\menubar.rs:272`

Returns one row for one registered command: its label, and what a click
asks the editor to do.

The label is the command's title, except where the row shows the current
state (the gizmo's space). Returns `None` when the command's id names no
action here and no dock tab. That is a gap in this model, not a disabled
row, and [`entries`](fn.entries.md#rustdoc-item-7524) and [`action_for`](fn.action_for.md#rustdoc-item-7525) both treat it that way.
