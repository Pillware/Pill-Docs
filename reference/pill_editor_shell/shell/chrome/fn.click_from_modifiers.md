<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-446"></a>

# Function `pill_editor_shell::shell::chrome::click_from_modifiers`

```rust
pub fn click_from_modifiers(modifiers: &egui::Modifiers) -> SelectionClick;
```

Source: `editor\pill_editor_shell\src\shell\chrome.rs:120`

Returns what a click means with these modifiers held: Shift selects a
range, Ctrl or Command adds to the selection, and a plain click resets it.

The rule itself is the core's ([`SelectionClick::from_modifiers`]), so a
row click and a scene press cannot disagree about what a held key means.
