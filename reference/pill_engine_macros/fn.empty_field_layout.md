<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-247"></a>

# Function `pill_engine_macros::empty_field_layout`

```rust
pub(crate) fn empty_field_layout(type_ident: &syn::Ident) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:505`

The layout emission for a type with no named fields (unit struct, tuple
struct, enum, union), so the const and trait impl exist on every derived
type.
