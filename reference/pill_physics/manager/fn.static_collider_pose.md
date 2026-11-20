<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-909"></a>

# Function `pill_physics::manager::static_collider_pose`

```rust
pub fn static_collider_pose(transform: &pill_engine::TransformComponent, collider: &crate::components::ColliderComponent) -> rapier3d::math::Pose;
```

Source: `extensions\pill_physics\modules\runtime\src\manager.rs:911`

The world pose of a collider with no body: the entity's rotation, at
[`collider_center`](fn.collider_center.md#rustdoc-item-908).
