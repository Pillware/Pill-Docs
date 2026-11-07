<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-198"></a>

# Function `pill_core_macros::referenced_fields`

```rust
pub(crate) fn referenced_fields(variant: &syn::Variant, nodes: &[MessageNode]) -> syn::Result<Vec<syn::Ident>>;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:398`

Check that every field a message names exists, and return the names in the
order they first appear.
