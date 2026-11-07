<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-168"></a>

# Function `pill_hot_scan::impl_header_names`

```rust
pub(crate) fn impl_header_names(header: &str) -> Option<(Option<String>, String)>;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:741`

The trait and type an `impl` header names, if it names exactly one of each.

Returns `(None, Type)` for an inherent block and `(Some(Trait), Type)` for a
non-generic trait block. Returns `None` when the header has no single
concrete receiver type, which is the case that cannot be patched at all.
