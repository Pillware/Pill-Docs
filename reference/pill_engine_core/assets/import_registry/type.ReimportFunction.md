<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-503"></a>

# Type alias `pill_engine_core::assets::import_registry::ReimportFunction`

```rust
pub(in assets::import_registry) type ReimportFunction = fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> ErasedImportResult;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:187`

Decode a loaded path again, in place.
