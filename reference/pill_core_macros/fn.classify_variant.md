<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-192"></a>

# Function `pill_core_macros::classify_variant`

```rust
pub(crate) fn classify_variant(variant: &syn::Variant) -> syn::Result<VariantInfo>;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:283`

Split one variant's attributes into the ones the macro consumes and the
ones it copies to the generated enum.
