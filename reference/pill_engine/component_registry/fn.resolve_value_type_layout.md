<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-351"></a>

# Function `pill_engine::component_registry::resolve_value_type_layout`

```rust
pub fn resolve_value_type_layout(path: &str) -> Option<&'static [ComponentFieldDescriptor]>;
```

Source: `engine\pill_engine\src\component_registry.rs:595`

The layout of the value type a `struct:<path>` field tag names, among the
ones this artifact declares with `#[derive(PillMirror)]` or
`pill_value_type!`.

The tag is the path as written at the field site, usually an imported
short name (`Color`), so an exact type name is tried first and a unique
`::<path>` suffix second. An ambiguous suffix resolves to `None`: an opaque
field is readable, a wrong one is not.
