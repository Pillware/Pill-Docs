<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6351"></a>

# Function `pill_engine_core::persistence::components::insert_boxed_component`

```rust
pub(in persistence) fn insert_boxed_component<T>(storage: &mut crate::archetype::ComponentColumns, component: Box<dyn Component>) where T: Component + 'static;
```

Visibility: `{'restricted': {'parent': 6349, 'path': '::persistence'}}` · Source: `engine\pill_engine_core\src\persistence\components.rs:449`

Downcast and push a boxed component into the concrete column.
