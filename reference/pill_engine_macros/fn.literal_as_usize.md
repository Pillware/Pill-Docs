<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-294"></a>

# Function `pill_engine_macros::literal_as_usize`

```rust
pub(crate) fn literal_as_usize(literal: &syn::Lit, key: &str) -> syn::Result<usize>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:816`

Read a line-count decorator argument, insisting it is a plain integer.
