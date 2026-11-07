<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7208"></a>

# Macro `pill_engine_core::query::target::impl_query_target_tuple`

```rust
macro_rules! impl_query_target_tuple {
    ($($T:ident),*) => { ... };
}
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\query\target.rs:304`

Implements `QueryTarget` for tuples up to arity 5, e.g.
`(Entity, &Transform, &mut Velocity)`.
