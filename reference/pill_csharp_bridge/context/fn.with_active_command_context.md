<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1105"></a>

# Function `pill_csharp_bridge::context::with_active_command_context`

```rust
pub(crate) fn with_active_command_context<R, impl FnOnce(&mut World, &mut CommandQueue, &ComponentBindings, &mut HashSet<Entity>) -> R: FnOnce(&mut pill_engine::World, &mut pill_engine::commands::CommandQueue, &std::collections::HashMap<StableComponentId, ComponentBinding>, &mut std::collections::HashSet<pill_engine::Entity>) -> R>(body: impl FnOnce(&mut pill_engine::World, &mut pill_engine::commands::CommandQueue, &std::collections::HashMap<StableComponentId, ComponentBinding>, &mut std::collections::HashSet<pill_engine::Entity>) -> R) -> Option<R>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:317`

Runs a callback with the active world, deferred command queue, component
bindings, and reserved-entity set, but only when the system declared a
Commands parameter.
