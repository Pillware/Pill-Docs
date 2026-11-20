<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-493"></a>

# Function `pill_physics::components::register`

```rust
pub fn register(world: &mut pill_engine::World);
```

Source: `extensions\pill_physics\modules\runtime\src\components.rs:197`

Registers both components with the world, field layout included.

The derive writes `__pill_register_<Type>` as a private item of this module,
so [`crate::register`](../fn.register.md#rustdoc-item-492) reaches the two through here rather than by path - and
so does a crate that links them without running the module entry point, such
as the editor tool or a test world.
