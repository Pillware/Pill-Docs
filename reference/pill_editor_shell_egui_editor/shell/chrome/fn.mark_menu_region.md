<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-448"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::mark_menu_region`

```rust
pub fn mark_menu_region(opened: Option<egui::InnerResponse<()>>, regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:258`

Adds an open context menu's rectangle to the frame's overlay regions.

A menu floats over whatever it was opened on, and a menu near the screen
edge can hang over a scene viewport, so a click inside it must never reach
the scene behind it. `opened` is `None` on the frames the menu is closed.

Public like every helper the shell re-exports, so a patch crate reaches it
through the package path.
