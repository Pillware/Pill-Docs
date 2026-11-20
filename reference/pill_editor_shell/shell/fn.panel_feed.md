<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1198"></a>

# Function `pill_editor_shell::shell::panel_feed`

```rust
pub fn panel_feed(snapshot: &EditorSnapshot, panels: &PanelRegistry) -> PanelFeed;
```

Source: `editor\pill_editor_shell\src\shell.rs:959`

What module panels read this pass.

The rows are copied only when a panel is registered: they duplicate what
the tabs already read, and an editor with no module panels should not pay
for them.
