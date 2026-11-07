<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-359"></a>

# Function `pill_engine_macros::container_element_type`

```rust
pub(crate) fn container_element_type<'a>(segment: Option<&'a syn::PathSegment>, container_type_name: &str) -> Result<&'a syn::Type, String>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:1511`

Extract the element type of a `Vec<E>` or `DynamicBuffer<E>` field.
