<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2077"></a>

# Function `pill_development_host::hot_patch::imports::public_item_names`

```rust
pub(in hot_patch::imports) fn public_item_names(source: &str) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 2048, 'path': '::hot_patch::imports'}}` · Source: `hosting\pill_development_host\src\hot_patch\imports.rs:228`

Every name a file makes public at its top level: declared items and
`pub use` re-exports.

Only the file's own top level counts, so a method inside an `impl` block
and a name reached through a nested module are both left out.
