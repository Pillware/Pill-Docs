<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1603"></a>

# Function `pill_editor_core::commands::builtin_commands`

```rust
pub(in commands) fn builtin_commands() -> Vec<CommandSpec>;
```

Visibility: `{'restricted': {'parent': 1399, 'path': '::commands'}}` · Source: `editor\pill_editor_core\src\commands.rs:672`

The built-in commands every editor has (owner `editor`).

This table is what the menu bar draws. A row exists because a command
registers a menu path. Its label is the command's title, except for the
gizmo's space row, which shows the space the gizmo is in. A line between
two groups is drawn for the spec marked [`CommandSpec::separator`](struct.CommandSpec.md#rustdoc-item-1466).
Removing a spec here removes its row.
