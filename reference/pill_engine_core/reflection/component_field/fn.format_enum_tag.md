<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7296"></a>

# Function `pill_engine_core::reflection::component_field::format_enum_tag`

```rust
pub(crate) fn format_enum_tag(type_name: &str, layout: &crate::component_registry::EnumLayout) -> String;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\reflection\component_field\mod.rs:374`

Builds the `enum:` tag for a field of the enum `type_name` laid out as
`layout`, in the form [`parse_enum_tag`](fn.parse_enum_tag.md#rustdoc-item-7209) reads.
