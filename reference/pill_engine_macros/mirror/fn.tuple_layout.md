<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-96"></a>

# Function `pill_engine_macros::mirror::tuple_layout`

```rust
pub(in mirror) fn tuple_layout(elements: &[&syn::Type]) -> syn::Result<(Vec<usize>, usize)>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:282`

The field offsets of a tuple of primitives packed with natural alignment,
and its total width.

## Errors

Returns an error when an element is not a primitive type.
