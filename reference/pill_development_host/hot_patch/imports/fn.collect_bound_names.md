<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2081"></a>

# Function `pill_development_host::hot_patch::imports::collect_bound_names`

```rust
pub(in hot_patch::imports) fn collect_bound_names(path: &str, names: &mut Vec<String>);
```

Visibility: `{'restricted': {'parent': 2048, 'path': '::hot_patch::imports'}}` · Source: `hosting\pill_development_host\src\hot_patch\imports.rs:294`

Adds the names one path binds, descending into its brace groups.
