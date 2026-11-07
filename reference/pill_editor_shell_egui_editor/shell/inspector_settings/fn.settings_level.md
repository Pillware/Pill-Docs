<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-793"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::settings_level`

```rust
pub fn settings_level(ui: &mut egui::Ui, add_contents: &mut dyn FnMut(&mut egui::Ui));
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:139`

Draw `add_contents` one settings level in.

The step is this module's own, because the panel's indent of 16 points is
more than a short settings key needs.
