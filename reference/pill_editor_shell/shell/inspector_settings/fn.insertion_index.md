<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-881"></a>

# Function `pill_editor_shell::shell::inspector_settings::insertion_index`

```rust
pub fn insertion_index(rows: &[egui::Rect], y: f32) -> usize;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:574`

Returns the insertion point a pointer at `y` names: the first row whose
middle the pointer has not passed, or the end of the list.
