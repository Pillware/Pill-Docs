<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5"></a>

# Function `pill_spline::component::sample_vertical_offset`

```rust
pub fn sample_vertical_offset() -> f32;
```

Source: `extensions\pill_spline\modules\runtime\src\component.rs:54`

The offset a `test-hooks` build applies, for the unit test that checks it.

The constant itself stays a bare `const` line because the integration
suites rewrite exactly that line to bump the offset.
