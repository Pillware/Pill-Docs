<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-458"></a>

# Function `pill_editor_shell::shell::chrome::claim_pointer`

```rust
pub fn claim_pointer(rect: egui::Rect, regions: &mut Vec<ShellRect>);
```

Source: `editor\pill_editor_shell\src\shell\chrome.rs:238`

Claims one floating surface's rectangle for the UI.

The create and rename dialog, the About window, a picker popup under a
field and an open menu push their rectangle through here, so a press inside
them is the UI's and never a scene pick. One helper keeps the conversion
from an egui rectangle to a [`ShellRect`] in one place.
