<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-298"></a>

# Function `pill_renderer_api::components::register_contract_components`

```rust
pub fn register_contract_components(world: &mut pill_engine::World);
```

Source: `rendering\pill_renderer_api\src\components\mod.rs:37`

Registers the contract's components - the engine's transform and the
camera - with the world, and records each component's field layout.

A renderer's data crate calls this before registering its own components.
