<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-279"></a>

# Function `pill_engine_macros::component_field_descriptors`

```rust
pub(crate) fn component_field_descriptors(input: &syn::DeriveInput, self_type: &dyn ToTokens, layout_subject: LayoutSubject) -> syn::Result<(proc_macro2::TokenStream, proc_macro2::TokenStream, proc_macro2::TokenStream)>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:437`

Emit a `static` carrying one [`ComponentFieldDescriptor`] per named field,
the expression that names it, and the heap-field accessor machinery when
the struct declares container fields.

`self_type` is the path every offset is taken through: the derived type's
own name for the derives, or the declared path when `pill_value_type!`
describes a foreign type. `layout_subject` says which derive is asking, and
that is what decides container fields, accessors and consts.

Enums, unions, unit structs and tuple structs have no named fields to mirror
and produce an empty layout.
