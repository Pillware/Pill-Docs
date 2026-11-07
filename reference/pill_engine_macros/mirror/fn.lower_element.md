<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-93"></a>

# Function `pill_engine_macros::mirror::lower_element`

```rust
pub(in mirror) fn lower_element(element: &syn::Type, slot: &proc_macro2::TokenStream, owner: Option<&Owner>) -> syn::Result<(String, proc_macro2::TokenStream)>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:225`

Lower one slice element type.

Returns the element's tag and the expression that reads the whole slot as a
`Vec` of that element.

## Errors

Returns an error for a slice of references, and for an element type outside
the vocabulary.
