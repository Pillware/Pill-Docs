<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-286"></a>

# Function `pill_engine_macros::parse_field_decorators`

```rust
pub(crate) fn parse_field_decorators(attributes: &[syn::Attribute]) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:580`

Parse the `#[pill(...)]` decorators a field declares into the expression
the descriptor emission stores in `decorators`.

A field that declares none yields an empty borrowed slice, so the descriptor
literal stays const-constructible.
