<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-400"></a>

# Function `pill_editor_shell::shell::views::scene_marquee`

```rust
pub fn scene_marquee(ui: &egui::Ui, marquee: Option<&ShellMarquee>, view: usize);
```

Source: `editor\pill_editor_shell\src\shell\views.rs:106`

Draws the marquee a drag in `view` is holding open, when one is.

The rectangle is in the main window's logical points, the space the shell
lays its overlay out in. It draws in the colour the scene already uses for
a selected entity's badge, so a rectangle and the marks inside it read as
one selection. It senses nothing: it is an indicator over a drag the
executable owns, and that drag's release reaches the viewport's own press
path.
