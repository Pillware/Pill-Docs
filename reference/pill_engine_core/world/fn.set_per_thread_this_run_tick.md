<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9171"></a>

# Function `pill_engine_core::world::set_per_thread_this_run_tick`

```rust
pub(crate) fn set_per_thread_this_run_tick(value: Option<crate::component::Tick>) -> Option<crate::component::Tick>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\world\mod.rs:1710`

Stores the tick reserved for the system about to run on this thread and
returns the previous one, so the caller can put it back afterwards.
