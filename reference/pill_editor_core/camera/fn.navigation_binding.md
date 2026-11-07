<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-904"></a>

# Function `pill_editor_core::camera::navigation_binding`

```rust
pub fn navigation_binding(preset: crate::commands::KeymapPreset, button: CameraButton, modifiers: Modifiers) -> Option<CameraNavigation>;
```

Source: `editor\pill_editor_core\src\camera.rs:226`

The gesture a press means under `preset`, or `None` when no camera gesture
claims the press.

Blender and Godot orbit with a plain middle-button drag, pan with
Shift+middle and dolly with Ctrl+middle. Unity and Unreal orbit with Alt
and the left button, pan with Alt and the middle button, and dolly with Alt
and the right button.
