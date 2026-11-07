<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-718"></a>

# Constant `pill_editor_core::camera::DOLLY_EXPONENT_PER_PIXEL`

```rust
pub const DOLLY_EXPONENT_PER_PIXEL: f32 = 0.006;
```

Source: `editor\pill_editor_core\src\camera.rs:50`

How fast a dolly drag changes the distance. Every pixel scales the distance
by the same ratio, so a dolly feels the same at any distance.
