<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5940"></a>

# Type alias `pill_engine_core::engine::BoxedSystemCondition`

```rust
pub(in engine) type BoxedSystemCondition = Box<dyn FnMut(&mut crate::world::World, &mut crate::commands::CommandQueue) -> bool + Send>;
```

Visibility: `{'restricted': {'parent': 5715, 'path': '::engine'}}` · Source: `engine\pill_engine_core\src\engine.rs:371`

A `run_if` condition once boxed: it evaluates against the world and the
command queue and answers whether the gated system may run.
