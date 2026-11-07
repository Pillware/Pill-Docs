<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-59"></a>

# Function `pill_engine_macros::mirror::last_segment`

```rust
pub(in mirror) fn last_segment(ty: &syn::Type) -> Option<&syn::PathSegment>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:71`

The last segment of a path type, looking through `Group` and `Paren`; `None`
for a qualified path or any other type.
