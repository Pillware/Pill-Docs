<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7164"></a>

# Function `pill_engine_core::reflection::component_field::row::format_component_debug`

```rust
pub fn format_component_debug(fields: &[crate::component_registry::ComponentFieldDescriptor], bytes: &[u8]) -> String;
```

Source: `engine\pill_engine_core\src\reflection\component_field\row.rs:825`

Formats a copied component row for native debugger helpers.

It takes the row's bytes and the registered field layout instead of a
component type, so it works for Rust, renderer and managed descriptor
columns alike.
