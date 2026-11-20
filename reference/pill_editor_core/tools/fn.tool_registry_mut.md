<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11596"></a>

# Function `pill_editor_core::tools::tool_registry_mut`

```rust
pub fn tool_registry_mut(world: &mut pill_engine::World) -> &mut ToolRegistry;
```

Source: `editor\pill_editor_core\src\tools.rs:1692`

Returns the world's tool registry, inserting the built-ins when the world
has none.

Every reader goes through this function so the three built-ins are present
even in a world built by a test or by a headless run that never opened a
toolbox.
