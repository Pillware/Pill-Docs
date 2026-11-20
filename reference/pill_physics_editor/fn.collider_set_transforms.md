<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-143"></a>

# Function `pill_physics_editor::collider_set_transforms`

```rust
pub(crate) fn collider_set_transforms(entity: pill_engine::Entity, moves: &[pill_editor_core::tools::ElementMove], world: &mut pill_engine::World);
```

Visibility: `crate` · Source: `extensions\pill_physics\modules\editor\src\pill_physics_editor.rs:271`

Writes a drag's world places into the collider's measurements.

Each handle writes exactly one number: a face handle's distance from the
centre along its own axis, a radius handle's distance from the centre, a
height handle's height above the centre. A drag past the centre stops at
[`MINIMUM_EXTENT`](constant.MINIMUM_EXTENT.md#rustdoc-item-8), so the shape always stays a shape.
