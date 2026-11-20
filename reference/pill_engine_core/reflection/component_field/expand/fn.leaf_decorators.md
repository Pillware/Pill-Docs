<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7082"></a>

# Function `pill_engine_core::reflection::component_field::expand::leaf_decorators`

```rust
pub(in reflection::component_field::expand) fn leaf_decorators(inherited_decorators: &[crate::component_registry::FieldDecorator], own_decorators: &[crate::component_registry::FieldDecorator]) -> std::borrow::Cow<'static, [crate::component_registry::FieldDecorator]>;
```

Visibility: `{'restricted': {'parent': 5508, 'path': '::reflection::component_field::expand'}}` · Source: `engine\pill_engine_core\src\reflection\component_field\expand.rs:294`

Builds the decorator list for one flattened leaf: the inherited decorators
first, then the leaf's own, with no decorator listed twice.
