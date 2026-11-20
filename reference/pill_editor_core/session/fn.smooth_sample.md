<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10108"></a>

# Function `pill_editor_core::session::smooth_sample`

```rust
pub(in session) fn smooth_sample(current_mean: f64, sample_value: f64, weight: f64) -> f64;
```

Visibility: `{'restricted': {'parent': 9524, 'path': '::session'}}` · Source: `editor\pill_editor_core\src\session.rs:1085`

One step of an exponential moving average, seeded by the first sample.
