<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-714"></a>

# Constant `pill_editor_core::camera::MIN_DISTANCE`

```rust
pub const MIN_DISTANCE: f32 = 0.25;
```

Source: `editor\pill_editor_core\src\camera.rs:34`

The closest the eye may come to its pivot, in world units. The scene
camera's near clip plane is 0.1 away, so this limit keeps the point being
orbited in front of it.
