<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-227"></a>

# Function `pill_editor_shell::shell::bar::play_button`

```rust
pub fn play_button(ui: &mut egui::Ui, label: &str, shortcut: &str) -> bool;
```

Source: `editor\pill_editor_shell\src\shell\bar.rs:188`

Draws one toolbar button and reports whether it was pressed.

The label is the action's word (`Play`, `Stop`, `Pause`, `Resume`, `Step`)
and the tooltip carries the chord, because the bar has no room for one.
