<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9169"></a>

# Function `pill_engine_core::world::per_thread_this_run_tick`

```rust
pub(in world) fn per_thread_this_run_tick() -> Option<crate::component::Tick>;
```

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\mod.rs:1696`

The tick the engine reserved for the system running on this thread.

`None` means the caller should increase the shared counter on `World`.
