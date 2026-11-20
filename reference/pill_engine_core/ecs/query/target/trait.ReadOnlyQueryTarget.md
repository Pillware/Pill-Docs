<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3416"></a>

# Trait `pill_engine_core::ecs::query::target::ReadOnlyQueryTarget`

```rust
pub trait ReadOnlyQueryTarget: QueryTarget { ... }
```

Source: `engine\pill_engine_core\src\ecs\query\target.rs:218`

A query target that only ever reads, so a
[`run_if`](../../../engine/struct.SystemOptions.md#rustdoc-item-4214) condition may query it.

The tuples whose members all implement this trait implement it themselves,
so `(Entity, &Transform)` is a valid condition parameter. `&mut T` has no
implementation on purpose: a condition that could change the world it gates
would make the skip decision depend on the order it ran in.
