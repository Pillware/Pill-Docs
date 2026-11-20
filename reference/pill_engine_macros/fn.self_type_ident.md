<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-460"></a>

# Function `pill_engine_macros::self_type_ident`

```rust
pub(crate) fn self_type_ident(self_type: &syn::Type) -> Option<&syn::Ident>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:2829`

The identifier a block's self type registers under, or `None` for a type
with no name of its own.
