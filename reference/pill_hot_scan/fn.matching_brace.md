<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Function `pill_hot_scan::matching_brace`

```rust
pub(crate) fn matching_brace(bytes: &[u8], mask: &[bool], open: usize) -> Option<usize>;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:167`

The matching `}` for the `{` at `open`, searching only real code.
