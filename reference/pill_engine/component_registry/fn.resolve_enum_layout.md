<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-393"></a>

# Function `pill_engine::component_registry::resolve_enum_layout`

```rust
pub fn resolve_enum_layout(path: &str) -> Option<EnumLayout>;
```

Source: `engine\pill_engine\src\component_registry.rs:680`

The declared shape of the enum a `struct:<path>` field tag names, among the
fieldless enums this artifact declares with `#[derive(PillMirror)]`.

Uses the same name rule as [`resolve_value_type_layout`](fn.resolve_value_type_layout.md#rustdoc-item-392). An enum whose
mirror row does not read back (a discriminant that is not an integer) is
treated as undeclared, which leaves the field opaque.
