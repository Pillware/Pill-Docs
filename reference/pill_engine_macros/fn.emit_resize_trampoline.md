<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-354"></a>

# Function `pill_engine_macros::emit_resize_trampoline`

```rust
pub(crate) fn emit_resize_trampoline(type_ident: &syn::Ident, field_ident: &syn::Ident, doc: proc_macro2::TokenStream) -> AccessorEmission;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:894`

Emits the resize trampoline that every container kind shares.

`Vec`, `DynamicBuffer` and `Vec<String>` all rewrite their length the same
way: they grow with `Default` and refuse a null row. They differ only in
what the documentation says the rewrite does to outstanding views, so the
doc lines arrive as the caller's token stream and the body is written once.

Resizing a `Vec` needs `E: Default + Clone`. Those bounds land on the
field's element type (a primitive, a `String` or a mirrored struct), not on
the component.
