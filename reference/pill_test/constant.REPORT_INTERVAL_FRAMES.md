<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Constant `pill_test::REPORT_INTERVAL_FRAMES`

```rust
pub(crate) const REPORT_INTERVAL_FRAMES: u64 = 300;
```

Visibility: `crate` · Source: `extensions\pill_test\pill_test\src\pill_test.rs:46`

Frame interval a progress report would use, counted in frames.

Nothing emits a report, so nothing reads the constant and the `allow`
above keeps the dead-code lint quiet.
