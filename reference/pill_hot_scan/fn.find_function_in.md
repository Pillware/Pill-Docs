<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-78"></a>

# Function `pill_hot_scan::find_function_in`

```rust
pub fn find_function_in(source: &str, mask: &[bool], name: &str) -> Option<FunctionText>;
```

Source: `hosting\pill_hot_scan\src\lib.rs:269`

[`find_function`](fn.find_function.md#rustdoc-item-76) against a code mask the caller already computed.

Building the mask scans and allocates for the whole file. Passing one in
lets a caller share a single build between several lookups, which
classification needs: it asks about both revisions on every save.

`mask` MUST be `code_mask(source)` for this exact `source`, because it is
indexed by the same byte offsets. A mask built from different text silently
reports the wrong function bounds.

## Panics

Panics in a debug build when `mask` and `source` have different lengths.
