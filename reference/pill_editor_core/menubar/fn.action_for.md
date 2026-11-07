<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5561"></a>

# Function `pill_editor_core::menubar::action_for`

```rust
pub fn action_for(command: &crate::commands::CommandView, snapshot: &crate::editor_state::EditorSnapshot, selection: &crate::editor_state::EditorSelection) -> Option<MenuAction>;
```

Source: `editor\pill_editor_core\src\menubar.rs:235`

Returns what running one registered command asks the editor to do.

The palette calls this instead of building its own menu row, so a command
run from the palette and the same command run from its menu entry reach one
action. `None` means this build registers the command but has no action for
it. The palette then drops the row rather than offering a no-op.
