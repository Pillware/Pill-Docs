<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1565"></a>

# Function `pill_core::system_ticks::last_run_tick`

```rust
pub fn last_run_tick() -> Option<u32>;
```

Source: `engine\pill_core\src\system_ticks.rs:50`

Returns the tick at which the system on this thread last ran.

`None` means no parallel batch installed a value, so the world uses its
own `system_last_run` field.
