<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6926"></a>

# Type alias `pill_engine_core::hot_reload::persistence::registry::InsertComponentFn`

```rust
pub(crate) type InsertComponentFn = fn (storage: &mut crate::archetype::ComponentColumns, component: Box<dyn Component>);
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\hot_reload\persistence\registry.rs:480`

Downcasts a `Box<dyn Component>` to its concrete type and pushes the value
into that type's [`ComponentColumn`](../../../ecs/archetype/struct.ComponentColumn.md#rustdoc-item-2112) in
the storage map.
