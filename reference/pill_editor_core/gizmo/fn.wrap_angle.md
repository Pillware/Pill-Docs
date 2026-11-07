<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4174"></a>

# Function `pill_editor_core::gizmo::wrap_angle`

```rust
pub fn wrap_angle(angle: f32) -> f32;
```

Source: `editor\pill_editor_core\src\gizmo.rs:925`

Wraps an angle difference into `(-PI, PI]`.

Without the wrap, a drag past the seam - where the angle jumps from `PI` to
`-PI` - would turn the entity the long way round.
