<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5226"></a>

# Type alias `pill_engine_core::reflection::component_registry::EnumLayoutResolver`

```rust
pub type EnumLayoutResolver = fn (_: &str) -> Option<EnumLayout>;
```

Source: `engine\pill_engine_core\src\reflection\component_registry.rs:321`

A function that finds the declared shape of an enum a `struct:<path>` field
tag names, with the same name rule as [`ValueTypeLayoutResolver`](type.ValueTypeLayoutResolver.md#rustdoc-item-5224).

Like the value-type resolver it lives in the registering DLL and is lent to
the world only for the length of that DLL's registration loop
([`World::replace_enum_layout_resolver`]).

[`World::replace_enum_layout_resolver`]: crate::World::replace_enum_layout_resolver
