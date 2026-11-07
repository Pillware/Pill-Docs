<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-666"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::color_channels`

```rust
pub fn color_channels(values: &[FieldValue]) -> Option<[f32; 4]>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:1023`

Returns the channels a colour row's values hold, as the unmultiplied linear
floats the picker takes, or `None` when a value is not a float.

Three channels stay opaque and four carry their alpha. Any other length is
not a colour the picker can draw.
