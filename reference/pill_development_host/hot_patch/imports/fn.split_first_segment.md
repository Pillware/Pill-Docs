<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2079"></a>

# Function `pill_development_host::hot_patch::imports::split_first_segment`

```rust
pub(in hot_patch::imports) fn split_first_segment(path: &str) -> (&str, &str);
```

Visibility: `{'restricted': {'parent': 2048, 'path': '::hot_patch::imports'}}` · Source: `hosting\pill_development_host\src\hot_patch\imports.rs:277`

The first path segment, and the rest of the path starting at the `::` that
follows it.
