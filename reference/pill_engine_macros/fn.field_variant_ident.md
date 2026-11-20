<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-300"></a>

# Function `pill_engine_macros::field_variant_ident`

```rust
pub(crate) fn field_variant_ident(field_ident: &syn::Ident) -> syn::Result<syn::Ident>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:737`

The variant name for one field: the field's name in PascalCase.

A raw identifier (`r#type`) keeps the name after its prefix. Two fields can
map to one variant (`foo_bar` and `foo__bar`), which the caller refuses
rather than generating an enum that cannot compile.
