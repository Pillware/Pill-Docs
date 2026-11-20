<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-640"></a>

# Function `pill_engine::declarations::register_all_scripts`

```rust
pub fn register_all_scripts(world: &mut crate::World);
```

Source: `engine\pill_engine\src\declarations.rs:320`

Registers every script component this artifact declares.

Called by the artifact entry points after [`register_all_systems`](fn.register_all_systems.md#rustdoc-item-639). A
script's registration also registers its component type, and records the
lifecycle methods its `#[script]` declaration states, so a first load, every
reload and a statically linked build all point the lifecycle method table at
the image that is running.

The walk's order does not matter: the update pass reads each lifecycle
method's own order from the registration, and equal orders are broken by
type name rather than by registration order.
