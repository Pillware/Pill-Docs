<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-305"></a>

# Function `pill_engine::component_registry::field_accessor_descriptors`

```rust
pub fn field_accessor_descriptors() -> Vec<&'static PillFieldAccessorDescriptor>;
```

Source: `engine\pill_engine\src\component_registry.rs:314`

Every heap-field accessor this artifact declares with
`#[derive(PillComponent)]`, sorted by component type name then field name
so the host consumes them deterministically.

The returned descriptors live in this artifact's static data, so their
symbol strings stay valid for as long as the artifact is mapped.
