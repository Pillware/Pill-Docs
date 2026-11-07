<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4625"></a>

# Function `pill_editor_core::inspector::component_label`

```rust
pub fn component_label(type_name: &str) -> &str;
```

Source: `editor\pill_editor_core\src\inspector.rs:82`

The title a component section's header shows.

A component is named the way Unity names it: without its type suffix, so
the engine's `TransformComponent` reads `Transform`. A type without that
suffix keeps its own short name.
