<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-240"></a>

# Function `pill_editor_shell_egui_editor::shell::tab_statistics::statistics_tab`

```rust
pub fn statistics_tab(ui: &mut egui::Ui, snapshot: &EditorSnapshot, stats: &StatisticsSession, frames_per_second: f32);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_statistics.rs:28`

The Statistics tab: the frame's timings and the editor's counts, then one
row per drawn tab.

`frames_per_second` is the editor's smoothed frame rate, and the frame time
row is computed from it. `stats` holds what the shell recorded: the whole
pass's time, and one timing per tab drawn so far.
