<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1110"></a>

# Function `pill_csharp_bridge::context::with_active_context`

```rust
pub(crate) fn with_active_context<R, impl FnOnce(&mut World, &ComponentBindings) -> R: FnOnce(&mut pill_engine::World, &std::collections::HashMap<StableComponentId, ComponentBinding>) -> R>(body: impl FnOnce(&mut pill_engine::World, &std::collections::HashMap<StableComponentId, ComponentBinding>) -> R) -> Option<R>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:381`

Runs a callback with the active world and its stable component binding
table, which the same guard always installs and clears together.
