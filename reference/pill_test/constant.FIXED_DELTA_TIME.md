<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-160"></a>

# Constant `pill_test::FIXED_DELTA_TIME`

```rust
pub(crate) const FIXED_DELTA_TIME: f32 = _;
```

Visibility: `crate` · Source: `extensions\pill_test\modules\runtime\src\pill_test.rs:58`

Fixed time step, in seconds, added to every entity's accumulated time.

Only [`module_test_processor`](fn.module_test_processor.md#rustdoc-item-158) uses it, and [`register`](fn.register.md#rustdoc-item-159) installs that
system.
