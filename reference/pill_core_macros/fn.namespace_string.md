<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-197"></a>

# Function `pill_core_macros::namespace_string`

```rust
pub(crate) fn namespace_string(path: &syn::Path) -> String;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:388`

Join the namespace path segments with `::` for the diagnostic code prefix.
