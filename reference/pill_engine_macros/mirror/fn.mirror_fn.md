<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-182"></a>

# Function `pill_engine_macros::mirror::mirror_fn`

```rust
pub(crate) fn mirror_fn(item: syn::ItemFn) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:1069`

Expand `#[pill_mirror_fn]` on a free function.

## Errors

Returns an error for a generic or `async` function, and for an argument or
result the vocabulary refuses.
