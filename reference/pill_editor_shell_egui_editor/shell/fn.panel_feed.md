<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1091"></a>

# Function `pill_editor_shell_egui_editor::shell::panel_feed`

```rust
pub fn panel_feed(snapshot: &EditorSnapshot, panels: &PanelRegistry) -> PanelFeed;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell.rs:878`

What module panels read this pass.

The rows are copied only when a panel is registered: they duplicate what
the tabs already read, and an editor with no module panels should not pay
for them.
