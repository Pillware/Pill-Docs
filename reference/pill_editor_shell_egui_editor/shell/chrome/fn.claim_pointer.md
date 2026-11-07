<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-447"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::claim_pointer`

```rust
pub fn claim_pointer(rect: egui::Rect, regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:241`

Claims one floating surface's rectangle for the UI.

The create and rename dialog, the About window, a picker popup under a
field and an open menu push their rectangle through here, so a press inside
them is the UI's and never a scene pick. One helper keeps the conversion
from an egui rectangle to a [`ShellRect`] in one place.
