<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-63"></a>

# Function `pill_engine_macros::mirror::type_name`

```rust
pub(in mirror) fn type_name(ty: &syn::Type, owner: Option<&Owner>) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:97`

The name the codegen uses for a named type: its last path segment, with
`Self` replaced by the owner's identifier.
