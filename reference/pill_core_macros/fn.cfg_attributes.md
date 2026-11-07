<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-202"></a>

# Function `pill_core_macros::cfg_attributes`

```rust
pub(crate) fn cfg_attributes(variant: &syn::Variant) -> Vec<&syn::Attribute>;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:505`

Collect one variant's `#[cfg(...)]` attributes.

They are copied onto the generated match arm, so a feature that removes the
variant removes its arm too.
