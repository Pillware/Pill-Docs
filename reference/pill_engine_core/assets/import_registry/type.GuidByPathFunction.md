<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-515"></a>

# Type alias `pill_engine_core::assets::import_registry::GuidByPathFunction`

```rust
pub(in assets::import_registry) type GuidByPathFunction = fn (_: &crate::asset::AssetManager, _: &std::path::Path) -> Option<crate::asset::AssetGuid>;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:208`

The guid the store holds a path's asset under, when it is loaded.
