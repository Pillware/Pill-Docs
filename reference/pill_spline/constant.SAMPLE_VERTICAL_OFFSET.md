<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Constant `pill_spline::SAMPLE_VERTICAL_OFFSET`

```rust
pub(crate) const SAMPLE_VERTICAL_OFFSET: f32 = 0.0;
```

Visibility: `crate` · Source: `extensions\pill_spline\pill_spline\src\pill_spline.rs:61`

Extra vertical offset added to every position sampled from a curve segment.

Compiled only when `test-hooks` is on. The hot-reload integration suites
change this one value in the source and watch the change reach a dependent
project's probe after a cascade reload. Nothing else in the module is
observable that way, because a module's component data survives a reload
and only its code is replaced. A default build has no such constant and
samples the plain curve.
