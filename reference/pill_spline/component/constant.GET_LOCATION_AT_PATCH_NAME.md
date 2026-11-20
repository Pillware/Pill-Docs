<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Constant `pill_spline::component::GET_LOCATION_AT_PATCH_NAME`

```rust
pub const GET_LOCATION_AT_PATCH_NAME: &str = "pill_spline::component::get_location_at";
```

Source: `extensions\pill_spline\modules\runtime\src\component.rs:27`

The patch-registry name of [`Spline::get_location_at`](struct.Spline.md#rustdoc-item-0).

`pill_hot_scan` records a function under its `module_path!()`, so the name
follows the file the method lives in. Reading it from the compiler here is
what keeps a patch test from hard-coding a path that a module split moves.
