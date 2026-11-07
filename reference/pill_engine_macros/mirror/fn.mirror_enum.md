<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-235"></a>

# Function `pill_engine_macros::mirror::mirror_enum`

```rust
pub(crate) fn mirror_enum(input: &syn::DeriveInput, data: &syn::DataEnum) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\mirror.rs:1552`

Expand `#[derive(PillMirror)]` on a fieldless enum with an integer `repr`.

The enum crosses as its discriminant. Reading an unknown one is an error,
never a transmute. The `__type` row carries the representation and the
variants, which the codegen turns into a C# `enum`.

## Errors

Returns an error for a generic type, for a `repr` that does not parse or is
not an integer, for a variant that has fields, and for a discriminant that
is not an integer literal.
