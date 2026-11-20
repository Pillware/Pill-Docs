<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-301"></a>

# Function `pill_engine_macros::field_enum_emission`

```rust
pub(crate) fn field_enum_emission(type_ident: &syn::Ident, variants: &[FieldEnumVariant]) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:762`

The `<Type>Field` enum and the `ComponentFields` link that names it from
the component type.

The enum's inherent methods answer from its trait impl, so a direct call, a
generic bound and the generated code all read one list.
