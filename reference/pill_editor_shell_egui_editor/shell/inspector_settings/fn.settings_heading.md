<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-792"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::settings_heading`

```rust
pub fn settings_heading(ui: &mut egui::Ui, key: &str);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:129`

Draw a settings container's heading: its leaf name, muted, with the whole
key as its tooltip.

The caller draws the container's children one level in, under the heading.
