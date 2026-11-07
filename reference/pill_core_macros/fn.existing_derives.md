<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-204"></a>

# Function `pill_core_macros::existing_derives`

```rust
pub(crate) fn existing_derives(error_enum: &syn::ItemEnum) -> std::collections::HashSet<String>;
```

Visibility: `crate` · Source: `engine\pill_core_macros\src\lib.rs:541`

Collect the traits the enum already derives.
