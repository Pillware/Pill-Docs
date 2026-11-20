<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-513"></a>

# Function `pill_engine_macros::serde_derive_attributes`

```rust
pub(crate) fn serde_derive_attributes(arguments: &syn::punctuated::Punctuated<syn::Meta, $crate::token::Comma>, listed_derives: &[syn::Ident]) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:3362`

The serde derives, and the crate path they resolve through, that a
`persistable` component needs.

Only the names the type's own derive list below the attribute does not
already carry are added, so a type that states its serde derives keeps
them. The crate path always goes through the engine's re-export, so the
generated implementation is the one the engine's own persistence bounds
name.
