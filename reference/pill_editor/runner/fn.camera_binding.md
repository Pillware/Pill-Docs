<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1378"></a>

# Function `pill_editor::runner::camera_binding`

```rust
pub(in runner) fn camera_binding(camera: &pill_editor_core::camera::OrbitCamera) -> pill_player::CameraBinding;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3663`

The camera binding the scene surface draws through: the view's orbit
camera as a camera transform, never a world entity.
