<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-435"></a>

# Function `pill_editor_shell_egui_editor::shell::chrome::click_from_modifiers`

```rust
pub fn click_from_modifiers(modifiers: &egui::Modifiers) -> SelectionClick;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\chrome.rs:117`

Returns what a click means with these modifiers held: Shift selects a
range, Ctrl or Command adds to the selection, and a plain click resets it.
