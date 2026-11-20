<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7209"></a>

# Function `pill_engine_core::reflection::component_field::parse_enum_tag`

```rust
pub fn parse_enum_tag(type_tag: &'static str) -> Option<EnumFieldTag>;
```

Source: `engine\pill_engine_core\src\reflection\component_field\mod.rs:353`

Reads an `enum:` field tag back into its representation, type name and
variants. Returns `None` for any other tag, or one that is malformed.
