<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-907"></a>

# Function `pill_physics::manager::apply_collider_edits`

```rust
pub fn apply_collider_edits(rapier_collider: &mut rapier3d::prelude::Collider, applied: &crate::components::ColliderComponent, collider: &crate::components::ColliderComponent);
```

Source: `extensions\pill_physics\modules\runtime\src\manager.rs:865`

Carries every field of `collider` that differs from `applied` into a live
rapier collider. rapier recomputes a parent body's mass from a changed
shape or density on its next step.
