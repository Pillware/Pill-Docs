<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4"></a>

# Constant `pill_spline_editor::TANGENT_ID_BASE`

```rust
pub const TANGENT_ID_BASE: u64 = 100;
```

Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:75`

The first element id a tangent handle uses.

Control points take the low ids (their index), so the two ranges can never
collide however long a spline is.
