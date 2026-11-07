<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-489"></a>

# Function `pill_engine::declarations::register_all_systems`

```rust
pub fn register_all_systems(engine: &mut crate::Engine);
```

Source: `engine\pill_engine\src\declarations.rs:181`

Registers every system this artifact declares.

Called by the artifact entry points before the artifact's own `register`
runs, so the same declarations reach a first load, every reload and a
statically linked build.

Systems are registered in `(order, name)` order. The engine appends each
one to its list and the scheduler batches by that order, so this is what
keeps the execution order of conflicting systems stable across builds
instead of following the linker.
