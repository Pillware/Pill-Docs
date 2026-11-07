<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-268"></a>

# Function `pill_master_renderer::frame::consumed_component_names`

```rust
pub(crate) fn consumed_component_names() -> Vec<String>;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\frame.rs:267`

Returns the shared names of the components [`rendering_system`](fn.rendering_system.md#rustdoc-item-244) reads.

[`RenderCapabilities::consumed_components`](crate::api::RenderCapabilities::consumed_components)
carries them. The host compares that list with the render components a
project uses and warns about any the renderer ignores. The names come from
the component types themselves rather than from string literals, so they
cannot drift from the types. Keep the list in step with the system's query
parameters.
