<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-310"></a>

# Function `pill_engine_macros::add_field_decorator`

```rust
pub(crate) fn add_field_decorator(meta: &syn::meta::ParseNestedMeta<'_>, decorators: &mut Vec<proc_macro2::TokenStream>) -> syn::Result<()>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:908`

Append one parsed field decorator to `decorators`, or refuse the key with
the set a field actually takes.
