<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-430"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::paint_active_tab_underline`

```rust
pub fn paint_active_tab_underline(response: &egui::Response);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:84`

Paints the accent underline under the active tab's name.

The dock draws its separator line under every inactive tab and skips the
active one, so the accent that marks the selected tab is left to the shell.
This line sits where the dock's own line would: the last pixel of the tab
button.

Public because [`tab_button`](../fn.tab_button.md#rustdoc-item-429)'s generated hot patch reaches it through the
package path.
