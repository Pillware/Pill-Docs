<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-329"></a>

# Function `pill_editor_shell_egui_editor::shell::panel_windows::panel_windows`

```rust
pub fn panel_windows(context: &egui::Context, window_session: &mut PanelWindowSession, registry: &PanelRegistry, panel_budget: &mut PanelBudget, panel_feed: &PanelFeed, panel_commands: &mut Vec<PanelCommand>, overlay_regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\panel_windows.rs:55`

Draw every open panel window.

A non-modal window's rectangle goes into `overlay_regions`, so a click on
the window belongs to the UI. A modal publishes no rectangle: it takes the
editor's input itself.

`panel_commands` collects what the windows ask for; the caller forwards the
queue to the executable at the frame boundary. A request queued from inside
a window has no slot to attribute it to, so an open or close request from a
window is ignored and only a tab body's own request takes effect.
