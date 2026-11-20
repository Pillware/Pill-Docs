<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-166"></a>

# Function `pill_spline_editor::rotation_following`

```rust
pub(crate) fn rotation_following(direction: pill_core::math::Vector3f) -> [f32; 4];
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:582`

The rotation that turns the world's `+Y` axis onto `direction`.

A direction along `-Y` is the one case the axis-angle form cannot express,
and a zero direction means "no frame", which the identity answers.
