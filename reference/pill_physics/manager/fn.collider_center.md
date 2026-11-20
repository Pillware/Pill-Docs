<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-908"></a>

# Function `pill_physics::manager::collider_center`

```rust
pub fn collider_center(transform: &pill_engine::TransformComponent, collider: &crate::components::ColliderComponent) -> [f32; 3];
```

Source: `extensions\pill_physics\modules\runtime\src\manager.rs:899`

Where a collider's centre is in the world: the entity's position plus the
collider's offset turned by the entity's rotation.
