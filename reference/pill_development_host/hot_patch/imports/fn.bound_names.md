<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2080"></a>

# Function `pill_development_host::hot_patch::imports::bound_names`

```rust
pub(in hot_patch::imports) fn bound_names(path: &str) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 2048, 'path': '::hot_patch::imports'}}` · Source: `hosting\pill_development_host\src\hot_patch\imports.rs:287`

Every name the path binds, so a caller can ask whether the body uses one.

An `as _` alias binds nothing and is not listed.
