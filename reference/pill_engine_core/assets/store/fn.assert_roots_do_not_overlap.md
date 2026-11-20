<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1954"></a>

# Function `pill_engine_core::assets::store::assert_roots_do_not_overlap`

```rust
pub(in assets::store) fn assert_roots_do_not_overlap(roots: &[ModuleAssetRoot]);
```

Visibility: `{'restricted': {'parent': 1779, 'path': '::assets::store'}}` · Source: `engine\pill_engine_core\src\assets\store.rs:404`

Panic when two roots of one module hold a file at the same relative path.
