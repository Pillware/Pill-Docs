<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-906"></a>

# Function `pill_editor_core::camera::middle_button_table`

```rust
pub(in camera) fn middle_button_table(button: CameraButton, modifiers: Modifiers) -> Option<CameraNavigation>;
```

Visibility: `{'restricted': {'parent': 721, 'path': '::camera'}}` · Source: `editor\pill_editor_core\src\camera.rs:244`

The middle-button navigation Blender and Godot share: a plain drag orbits,
Shift+drag pans and Ctrl+drag dollies.
