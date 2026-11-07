<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1398"></a>

# Type alias `pill_engine_core::asset_import_registry::RemoveLoadedFunction`

```rust
pub(in asset_import_registry) type RemoveLoadedFunction = fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> bool;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:195`

Drop the asset loaded under a path's name; `true` when one went.
