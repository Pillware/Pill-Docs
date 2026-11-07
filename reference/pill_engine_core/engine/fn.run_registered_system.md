<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4364"></a>

# Function `pill_engine_core::engine::run_registered_system`

```rust
pub(in engine) fn run_registered_system(world: &mut crate::world::World, command_queue: &mut crate::commands::CommandQueue, failures: &mut Vec<crate::error::SystemFailure>, registered_system: &mut RegisteredSystem);
```

Visibility: `{'restricted': {'parent': 4158, 'path': '::engine'}}` · Source: `engine\pill_engine_core\src\engine.rs:1736`

Runs one registered system on the calling thread.

The sequential loop, the single-system batch lane and the post-flush phase
all come here, so the change-detection baseline, the timing, the failure
record and the bookkeeping exist once. The parallel closure has its own
body, because its bookkeeping goes through thread-local ticks and a shared
failure buffer.

It takes the engine's fields instead of `&mut Engine` so the caller can keep
the scheduler's execution graph borrowed while it loops.
