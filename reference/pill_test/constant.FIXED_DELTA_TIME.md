<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4"></a>

# Constant `pill_test::FIXED_DELTA_TIME`

```rust
pub(crate) const FIXED_DELTA_TIME: f32 = _;
```

Visibility: `crate` · Source: `extensions\pill_test\pill_test\src\pill_test.rs:52`

Fixed time step, in seconds, added to every entity's accumulated time.

Only [`module_test_processor`](fn.module_test_processor.md#rustdoc-item-2) uses it, and [`register`](fn.register.md#rustdoc-item-3) installs that
system.
