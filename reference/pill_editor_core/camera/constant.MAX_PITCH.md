<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-716"></a>

# Constant `pill_editor_core::camera::MAX_PITCH`

```rust
pub const MAX_PITCH: f32 = _;
```

Source: `editor\pill_editor_core\src\camera.rs:43`

The pitch stops just short of the poles. At exactly +-90 degrees the
camera looks straight down or up, the look direction has no horizontal
part left, and turning the yaw would only roll the view around the look
axis instead of turning it.
