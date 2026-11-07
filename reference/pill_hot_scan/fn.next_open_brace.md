<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5"></a>

# Function `pill_hot_scan::next_open_brace`

```rust
pub(crate) fn next_open_brace(bytes: &[u8], mask: &[bool], from: usize) -> Option<usize>;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:189`

The first real-code `{` at or after `from`.
