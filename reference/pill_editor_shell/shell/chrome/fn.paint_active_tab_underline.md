<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-440"></a>

# Function `pill_editor_shell::shell::chrome::paint_active_tab_underline`

```rust
pub fn paint_active_tab_underline(response: &egui::Response);
```

Source: `editor\pill_editor_shell\src\shell\chrome.rs:84`

Paints the accent underline under the active tab's name.

The dock draws its separator line under every inactive tab and skips the
active one, so the accent that marks the selected tab is left to the shell.
This line sits where the dock's own line would: the last pixel of the tab
button.

Public because [`tab_button`](../fn.tab_button.md#rustdoc-item-439)'s generated hot patch reaches it through the
package path.
