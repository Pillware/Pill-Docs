<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-331"></a>

# Function `pill_physics::components::register`

```rust
pub(crate) fn register(world: &mut pill_engine::World);
```

Visibility: `crate` · Source: `extensions\pill_physics\pill_physics\src\components.rs:186`

Registers both components with the world, field layout included.

The derive writes `__pill_register_<Type>` as a private item of this module,
so [`crate::register`](../fn.register.md#rustdoc-item-330) reaches the two through here rather than by path.
