<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-154"></a>

# Function `pill_test::mirror::tint_alpha`

```rust
pub fn tint_alpha() -> f32;
```

Source: `extensions\pill_test\modules\runtime\src\mirror.rs:68`

The alpha channel the bridge probe reads; mirrored to C# as the static
`pill_test.Mirror.TintAlpha()`.

It returns a constant, so the probe's `alpha=1` proves a managed call
reached this code and brought its result back.
