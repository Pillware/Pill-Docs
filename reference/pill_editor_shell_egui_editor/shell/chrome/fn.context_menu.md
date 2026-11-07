<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-445"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::context_menu`

```rust
pub fn context_menu(area: &str, response: &egui::Response, regions: &mut Vec<ShellRect>, contents: &mut dyn FnMut(&mut egui::Ui));
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:321`

Opens a panel's context menu on a secondary click.

The area is logged once per click, so a suite can see whose menu opened,
and `contents` builds the items. While the menu is open, its rectangle joins
the frame's overlay regions.

Every panel that has a menu goes through here - the scene viewport, the
Entities rows and strip, the Inspector's headings and strip, the Assets
rows, tiles and strip - so no panel can forget to mark its menu. The dock's
tab bar is the exception: it logs through [`log_context_menu`](fn.log_context_menu.md#rustdoc-item-446) and marks the
menu it draws itself.
