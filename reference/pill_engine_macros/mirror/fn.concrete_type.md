<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-65"></a>

# Function `pill_engine_macros::mirror::concrete_type`

```rust
pub(in mirror) fn concrete_type(ty: &syn::Type, owner: Option<&Owner>) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `{'restricted': {'parent': 1, 'path': '::mirror'}}` · Source: `engine\pill_engine_macros\src\mirror.rs:113`

`ty` with `Self` replaced by the owner, so it can be named outside the
`impl` block the trampoline is emitted beside.

## Errors

Returns an error when `Self` appears outside an `impl` block, where it has
no meaning.
