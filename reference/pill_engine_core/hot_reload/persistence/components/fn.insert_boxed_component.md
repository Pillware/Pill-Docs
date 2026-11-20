<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6921"></a>

# Function `pill_engine_core::hot_reload::persistence::components::insert_boxed_component`

```rust
pub(in hot_reload::persistence) fn insert_boxed_component<T>(storage: &mut crate::archetype::ComponentColumns, component: Box<dyn Component>) where T: Component + 'static;
```

Visibility: `{'restricted': {'parent': 5453, 'path': '::hot_reload::persistence'}}` · Source: `engine\pill_engine_core\src\hot_reload\persistence\components.rs:449`

Downcast and push a boxed component into the concrete column.
