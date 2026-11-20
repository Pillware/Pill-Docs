<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-312"></a>

# Function `pill_engine_macros::decorator_arguments`

```rust
pub(crate) fn decorator_arguments(meta: &syn::meta::ParseNestedMeta<'_>, key: &str, usage: &str) -> syn::Result<syn::punctuated::Punctuated<syn::Lit, $crate::token::Comma>>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:1065`

Read a decorator's parenthesised argument list, insisting the parentheses
are there so `#[pill(min)]` names its usage instead of failing on a token.
