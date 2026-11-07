<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-241"></a>

# Function `pill_engine_macros::handle_field_records`

```rust
pub(crate) fn handle_field_records(input: &syn::DeriveInput, type_ident: &syn::Ident) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:266`

The registration statements that record each top-level `Handle<T>` field's
asset type: `T`'s shared name, or its Rust type name without one.

Fields of a struct that is not a named-field struct have no handle records;
the layout code reports those shapes itself.
