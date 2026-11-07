<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-199"></a>

# Function `pill_core_macros::build_message_arm`

```rust
pub(crate) fn build_message_arm(runtime_path: &syn::Path, variant: &syn::Variant, nodes: &[MessageNode], referenced_fields: &[syn::Ident]) -> proc_macro2::TokenStream;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:437`

Generate one `EngineMessage` match arm for a leaf message variant.
