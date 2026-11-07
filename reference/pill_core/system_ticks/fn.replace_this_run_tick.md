<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1568"></a>

# Function `pill_core::system_ticks::replace_this_run_tick`

```rust
pub fn replace_this_run_tick(value: Option<u32>) -> Option<u32>;
```

Source: `engine\pill_core\src\system_ticks.rs:75`

Replaces this thread's reserved tick and returns the previous value.

The caller restores that value when the system finishes.
