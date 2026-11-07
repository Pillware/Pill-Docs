<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-414"></a>

# Function `pill_engine_macros::parse_string_list`

```rust
pub(crate) fn parse_string_list(input: syn::parse::ParseStream<'_>) -> syn::Result<Vec<String>>;
```

Visibility: `crate` · Source: `engine\pill_engine_macros\src\lib.rs:2456`

Parse a `["a", "b"]` list from one attribute argument.
