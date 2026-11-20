<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4653"></a>

# Function `pill_editor_core::gizmo::quaternion_product`

```rust
pub fn quaternion_product(left: [f32; 4], right: [f32; 4]) -> [f32; 4];
```

Source: `editor\pill_editor_core\src\gizmo.rs:1101`

The `[x, y, z, w]` quaternion that applies `right` after `left`.

A drag's turn is composed onto the orientation the object had at the press,
so the composition order is the one that keeps a local-space drag turning
about the object's own axis.
