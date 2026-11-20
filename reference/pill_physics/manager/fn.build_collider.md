<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-913"></a>

# Function `pill_physics::manager::build_collider`

```rust
pub fn build_collider(collider: &crate::components::ColliderComponent) -> rapier3d::prelude::Collider;
```

Source: `extensions\pill_physics\modules\runtime\src\manager.rs:932`

Builds the rapier collider a component describes.

The collider sits at the component's offset from its parent body. A static
collider, which has no parent, is placed afterwards
([`static_collider_pose`](fn.static_collider_pose.md#rustdoc-item-909)).
