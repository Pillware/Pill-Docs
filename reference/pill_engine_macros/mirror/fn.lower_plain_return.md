<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-120"></a>

# Function `pill_engine_macros::mirror::lower_plain_return`

```rust
pub(in mirror) fn lower_plain_return(ty: &syn::Type, owner: Option<&Owner>) -> syn::Result<(String, proc_macro2::TokenStream)>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:609`

Lower the plain (not `Result`) part of a result type.

The vocabulary is the parameter vocabulary, without borrows other than
`&str`: a result outlives the call, so it must be owned when it crosses.

## Errors

Returns an error for a returned reference other than `&str`, for a returned
`AssetLoader`, for a tuple or array the vocabulary cannot write, and for any
other type `value_tag` refuses.
