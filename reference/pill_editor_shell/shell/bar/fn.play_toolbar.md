<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-226"></a>

# Function `pill_editor_shell::shell::bar::play_toolbar`

```rust
pub fn play_toolbar(ui: &mut egui::Ui, session: &mut MenubarSession, viewer: &mut EditorTabViewer<'_>);
```

Source: `editor\pill_editor_shell\src\shell\bar.rs:137`

Draws the play controls centred over the menu bar: Play or Stop, then
Pause or Resume, then Step.

The first button's label follows the run mode, so one control both starts a
session and ends it. Every press queues the same command the View menu's row
and the scripted channel queue, and none is recorded: a session is not an
undo step. The group's rectangle joins the frame's overlay regions, so a
click on it is the UI's and never a scene pick.
