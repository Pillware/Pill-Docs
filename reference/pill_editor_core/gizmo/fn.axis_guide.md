<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4180"></a>

# Function `pill_editor_core::gizmo::axis_guide`

```rust
pub fn axis_guide(origin: [f32; 3], axis: [f32; 3], span: f32) -> ([f32; 3], [f32; 3]);
```

Source: `editor\pill_editor_core\src\gizmo.rs:1037`

Returns the two ends of the guide line a single-axis drag draws: `span`
long on both sides of `origin`, along `axis`.
