<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-245"></a>

# Function `pill_engine_macros::layout_emission`

```rust
pub(crate) fn layout_emission(type_ident: &syn::Ident, layout_reference: &proc_macro2::TokenStream) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:360`

The inherent `FIELD_LAYOUT` const and `ComponentLayout` impl every
layout-carrying derive emits, both naming the same descriptor slice.
