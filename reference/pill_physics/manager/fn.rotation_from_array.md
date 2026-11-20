<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-917"></a>

# Function `pill_physics::manager::rotation_from_array`

```rust
pub fn rotation_from_array(rotation: [f32; 4]) -> rapier3d::math::Rotation;
```

Source: `extensions\pill_physics\modules\runtime\src\manager.rs:960`

Reads an `[x, y, z, w]` quaternion as a rotation, treating a value that is
zero or not finite as the identity rather than using it.
