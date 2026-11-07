<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1567"></a>

# Function `pill_core::system_ticks::this_run_tick`

```rust
pub fn this_run_tick() -> Option<u32>;
```

Source: `engine\pill_core\src\system_ticks.rs:67`

Returns the tick reserved for the system on this thread.

`None` means no parallel batch installed a value, so the world increases
its shared tick counter instead.
