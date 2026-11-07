<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-163"></a>

# Function `pill_hot_scan::hot_function_names`

```rust
pub fn hot_function_names(source: &str) -> Vec<String>;
```

Source: `hosting\pill_hot_scan\src\lib.rs:460`

Names of the functions this file marks with `#[pill_hot]` or
`#[pill_hot_fn]`.

This is the annotated set alone. What classification treats as replaceable
is every function the host can address ([`all_functions`](fn.all_functions.md#rustdoc-item-162)); everything else
in the file counts as a structural change and forces a full reload.
