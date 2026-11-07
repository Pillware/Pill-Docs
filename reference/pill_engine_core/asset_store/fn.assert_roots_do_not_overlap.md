<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2402"></a>

# Function `pill_engine_core::asset_store::assert_roots_do_not_overlap`

```rust
pub(in asset_store) fn assert_roots_do_not_overlap(roots: &[ModuleAssetRoot]);
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:404`

Panic when two roots of one module hold a file at the same relative path.
