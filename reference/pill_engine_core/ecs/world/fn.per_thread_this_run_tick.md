<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5656"></a>

# Function `pill_engine_core::ecs::world::per_thread_this_run_tick`

```rust
pub(in ecs::world) fn per_thread_this_run_tick() -> Option<crate::component::Tick>;
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\mod.rs:1797`

The tick the engine reserved for the system running on this thread.

`None` means the caller should increase the shared counter on `World`.
