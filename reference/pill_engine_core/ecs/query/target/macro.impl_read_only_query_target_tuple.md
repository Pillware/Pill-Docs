<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4221"></a>

# Macro `pill_engine_core::ecs::query::target::impl_read_only_query_target_tuple`

```rust
macro_rules! impl_read_only_query_target_tuple {
    ($($T:ident),*) => { ... };
}
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\ecs\query\target.rs:226`

Implements [`ReadOnlyQueryTarget`](trait.ReadOnlyQueryTarget.md#rustdoc-item-3416) for tuples whose members all read, so a
condition can query several things at once.
