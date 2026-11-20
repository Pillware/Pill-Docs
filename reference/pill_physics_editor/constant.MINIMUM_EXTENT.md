<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8"></a>

# Constant `pill_physics_editor::MINIMUM_EXTENT`

```rust
pub(crate) const MINIMUM_EXTENT: f32 = 0.01;
```

Visibility: `crate` · Source: `extensions\pill_physics\modules\editor\src\pill_physics_editor.rs:82`

The smallest measurement a drag may leave a shape with.

A shape with a zero or negative extent is not a shape the simulation can
build, so a handle dragged past its collider's centre stops here instead of
inverting the collider.
