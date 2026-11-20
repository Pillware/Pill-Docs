<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7081"></a>

# Function `pill_engine_core::reflection::component_field::expand::grouping_decorators`

```rust
pub(in reflection::component_field::expand) fn grouping_decorators(decorators: &[crate::component_registry::FieldDecorator]) -> Vec<crate::component_registry::FieldDecorator>;
```

Visibility: `{'restricted': {'parent': 5508, 'path': '::reflection::component_field::expand'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\expand.rs:284`

The decorators of a struct field that its flattened leaves inherit.

`Color` and `Vector` describe the group of leaves a struct expands into, so
they must stay on the leaves. Every other decorator describes the single
value its field holds (a header above it, a tooltip on it) and is dropped
with the struct field that carried it.
