<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-203"></a>

# Function `pill_core_macros::build_transparent_arm`

```rust
pub(crate) fn build_transparent_arm(runtime_path: &syn::Path, variant: &syn::Variant) -> syn::Result<proc_macro2::TokenStream>;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:514`

Generate one `EngineMessage` match arm for a transparent variant.
