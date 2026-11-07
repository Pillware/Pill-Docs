<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2743"></a>

# Function `pill_engine_core::common_components::register_transform_component`

```rust
pub fn register_transform_component(world: &mut crate::world::World);
```

Source: `engine\pill_engine_core\src\common_components.rs:138`

Registers [`TransformComponent`](struct.TransformComponent.md#rustdoc-item-2689) together with its editor field layout.

The component is registered as persistable, so its values are migrated
across reloads. Registering it again is safe and is what a hot reload does
when it re-runs `init`. The layout comes from `#[derive(PillLayout)]`, which
is what lets the inspector edit the fields instead of showing one opaque
blob.

A renderer calls this from its registration entry point, before adding
whatever it draws with.
