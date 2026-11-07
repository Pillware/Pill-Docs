<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-302"></a>

# Function `pill_engine::component_registry::value_type_descriptors`

```rust
pub fn value_type_descriptors() -> Vec<&'static PillValueTypeDescriptor>;
```

Source: `engine\pill_engine\src\component_registry.rs:290`

Every value type this artifact declares with `#[derive(PillMirror)]` or
`pill_value_type!`, sorted by type name so the host consumes them
deterministically.
