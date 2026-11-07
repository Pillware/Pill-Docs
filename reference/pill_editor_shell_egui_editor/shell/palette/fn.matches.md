<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-230"></a>

# Function `pill_editor_shell_egui_editor::shell::palette::matches`

```rust
pub fn matches<'a>(commands: &'a [CommandView], query: &str) -> Vec<&'a CommandView>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\palette.rs:38`

The commands whose titles contain `query`, in the order the list has them.

The match ignores case and the spaces around `query`, so an empty query
matches every command. This is the title filter only: the window drops the
rows that have no action, which needs the frame's snapshot and selection.
