<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-216"></a>

# Function `pill_hot_scan::write_inventory`

```rust
pub(crate) fn write_inventory(path: &std::path::Path, contents: &str);
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:1423`

Write the generated inventory, failing loudly rather than leaving a stale one.

## Panics

Panics when the file cannot be written.
