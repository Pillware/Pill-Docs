<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1188"></a>

# Function `pill_core::platform::clock::unix_time`

```rust
pub fn unix_time() -> std::time::Duration;
```

Source: `engine\pill_core\src\platform\clock.rs:125`

The wall-clock time since the Unix epoch, zero if the clock is set before it.

Use it for a time a person reads, such as a calendar date; use [`Instant`](struct.Instant.md#rustdoc-item-1124)
to measure elapsed time.
