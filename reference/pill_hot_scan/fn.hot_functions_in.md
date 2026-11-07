<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-165"></a>

# Function `pill_hot_scan::hot_functions_in`

```rust
pub(crate) fn hot_functions_in(source: &str, mask: &[bool], blocks: &[ImplBlock]) -> Vec<HotFunction>;
```

Visibility: `crate` · Source: `hosting\pill_hot_scan\src\lib.rs:479`

[`hot_functions`](fn.hot_functions.md#rustdoc-item-164) against a code mask and impl blocks a caller already has.

Building both scans the whole file, so the all-functions scan - which needs
the annotated set too - passes its own rather than paying for them twice.
