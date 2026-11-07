<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8577"></a>

# Constant `pill_engine_core::time::MAXIMUM_DELTA_SECONDS`

```rust
pub(in time) const MAXIMUM_DELTA_SECONDS: f32 = 0.1;
```

Visibility: `{'restricted': {'parent': 8578, 'path': '::time'}}` · Source: `engine\pill_engine_core\src\time.rs:44`

Largest delta the clock will report, in seconds.

A breakpoint, a hot reload or a slow first frame can make one frame last far
longer than normal. Without a limit, the next physics step would move
objects far enough to pass through a wall, so the delta stops at this value.
Measured time is not limited: [`Time::elapsed`](struct.Time.md#rustdoc-item-8576) keeps counting real time.
