<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2741"></a>

# Constant `pill_engine_core::common_components::ROTATION_IDENTITY_EPSILON`

```rust
pub const ROTATION_IDENTITY_EPSILON: f32 = 1.0e-8;
```

Source: `engine\pill_engine_core\src\common_components.rs:105`

Squared length at or below which a rotation quaternion is read as the
identity orientation.

Normalizing a quaternion this close to zero would amplify rounding noise
rather than an angle, so such a value is not a usable orientation.
