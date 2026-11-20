<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-314"></a>

# Function `pill_engine_macros::arguments_of_two`

```rust
pub(crate) fn arguments_of_two<'a>(arguments: &'a syn::punctuated::Punctuated<syn::Lit, $crate::token::Comma>, key: &str, usage: &str) -> syn::Result<[&'a syn::Lit; 2]>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:1099`

The two arguments of a two-argument decorator, or a usage error.
