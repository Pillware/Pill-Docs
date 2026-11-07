<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6356"></a>

# Type alias `pill_engine_core::persistence::registry::InsertComponentFn`

```rust
pub(crate) type InsertComponentFn = fn (storage: &mut crate::archetype::ComponentColumns, component: Box<dyn Component>);
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\persistence\registry.rs:461`

Downcasts a `Box<dyn Component>` to its concrete type and pushes the value
into that type's [`ComponentColumn`](../../archetype/struct.ComponentColumn.md#rustdoc-item-78) in
the storage map.
