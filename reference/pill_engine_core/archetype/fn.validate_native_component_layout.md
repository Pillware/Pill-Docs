<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-284"></a>

# Function `pill_engine_core::archetype::validate_native_component_layout`

```rust
pub(crate) fn validate_native_component_layout(size: usize, align: usize) -> Result<(), crate::error::WorldError>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\archetype.rs:2059`

Checks that a size and alignment can describe a native component layout.

This is [`validate_component_layout`](fn.validate_component_layout.md#rustdoc-item-705) without the zero-width refusal: a
zero-sized Rust type is a marker component, and its column owns no
allocation.
