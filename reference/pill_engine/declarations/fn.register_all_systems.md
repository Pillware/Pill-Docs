<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-639"></a>

# Function `pill_engine::declarations::register_all_systems`

```rust
pub fn register_all_systems(engine: &mut crate::Engine);
```

Source: `engine\pill_engine\src\declarations.rs:287`

Registers every system this artifact declares.

Called by the artifact entry points before the artifact's own `register`
runs, so the same declarations reach a first load, every reload and a
statically linked build.

Systems are registered in `(phase, order, name)` order. The engine keeps
its whole list sorted by `(phase, order)` and equal pairs in registration
order, so this walk only has to make equal orders deterministic within one
artifact; across artifacts the engine's insertion order decides.
