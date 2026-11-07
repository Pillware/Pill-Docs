<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2577"></a>

# Constant `pill_master_renderer::resources::renderer_resource_storage::INITIAL_SHADER_CAPACITY`

```rust
pub const INITIAL_SHADER_CAPACITY: usize = 10;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_resource_storage.rs:40`

Starting capacity of the shader slot map.

The map starts with room for this many entries and grows when more
resources are added; this is not a limit.
