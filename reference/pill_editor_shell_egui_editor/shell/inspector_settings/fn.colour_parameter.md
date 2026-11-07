<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-806"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::colour_parameter`

```rust
pub fn colour_parameter(key: &str, value: &JsonValue) -> Option<Vec<f32>>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:827`

Returns the channel values of a colour parameter, when `key` names one.

A colour parameter is a `Color` leaf holding three or four numbers, such as
the material document's `parameters.<slot>.Color`. Every other key and
every other value shape answers `None`.
