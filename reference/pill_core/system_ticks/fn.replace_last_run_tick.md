<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1566"></a>

# Function `pill_core::system_ticks::replace_last_run_tick`

```rust
pub fn replace_last_run_tick(value: Option<u32>) -> Option<u32>;
```

Source: `engine\pill_core\src\system_ticks.rs:58`

Replaces this thread's last-run tick and returns the previous value.

The caller restores that value when the system finishes.
