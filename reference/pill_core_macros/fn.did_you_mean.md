<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-167"></a>

# Function `pill_core_macros::did_you_mean`

```rust
pub(crate) fn did_you_mean(given_function_name: &str) -> Option<&'static str>;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:229`

Closest message function name to `given_function_name`, when it is close
enough to be a typo.
