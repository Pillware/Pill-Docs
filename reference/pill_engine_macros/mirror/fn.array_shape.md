<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-98"></a>

# Function `pill_engine_macros::mirror::array_shape`

```rust
pub(in mirror) fn array_shape(array: &syn::TypeArray) -> syn::Result<(String, usize)>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:303`

The element type and length of a `[T; N]` of primitives.

## Errors

Returns an error when the element is not a primitive, when the length is not
an integer literal, and when the array is empty or does not fit in 16 bytes.
