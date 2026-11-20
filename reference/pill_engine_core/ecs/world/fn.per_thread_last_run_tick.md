<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5655"></a>

# Function `pill_engine_core::ecs::world::per_thread_last_run_tick`

```rust
pub(in ecs::world) fn per_thread_last_run_tick() -> Option<crate::component::Tick>;
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\mod.rs:1789`

The tick this thread's system last started at, or `None` when no parallel
batch is running on this thread.
