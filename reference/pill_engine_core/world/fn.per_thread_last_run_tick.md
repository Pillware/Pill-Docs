<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9168"></a>

# Function `pill_engine_core::world::per_thread_last_run_tick`

```rust
pub(in world) fn per_thread_last_run_tick() -> Option<crate::component::Tick>;
```

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\mod.rs:1688`

The tick this thread's system last started at, or `None` when no parallel
batch is running on this thread.
