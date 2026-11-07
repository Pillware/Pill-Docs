<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-293"></a>

# Function `pill_engine_macros::literal_as_f32`

```rust
pub(crate) fn literal_as_f32(literal: &syn::Lit, key: &str) -> syn::Result<f32>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:804`

Read a numeric decorator argument, accepting an integer literal for a
`f32` parameter (`space(10)` as well as `space(10.0)`).
