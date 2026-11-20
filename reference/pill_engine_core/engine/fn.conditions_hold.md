<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6081"></a>

# Function `pill_engine_core::engine::conditions_hold`

```rust
pub(in engine) fn conditions_hold(registered_system: &mut RegisteredSystem, world: &mut crate::world::World, command_queue: &mut crate::commands::CommandQueue) -> bool;
```

Visibility: `{'restricted': {'parent': 5715, 'path': '::engine'}}` · Source: `engine\pill_engine_core\src\engine.rs:2419`

Whether every `run_if` condition of a system holds.

A system without conditions always holds. The conditions run in the order
the registration added them, and the first false answer stops the check, so
a later condition cannot observe a world an earlier one only pretended to
accept.
