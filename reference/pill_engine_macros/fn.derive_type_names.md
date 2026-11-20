<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-514"></a>

# Function `pill_engine_macros::derive_type_names`

```rust
pub(crate) fn derive_type_names(attribute: &syn::Attribute) -> Vec<syn::Ident>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:3392`

The last path segment of every type one `#[derive(...)]` attribute lists.

A derive written as `serde::Serialize` is the same type as `Serialize`, so
the declaration attributes compare the last segment.
