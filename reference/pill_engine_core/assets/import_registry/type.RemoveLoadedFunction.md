<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-508"></a>

# Type alias `pill_engine_core::assets::import_registry::RemoveLoadedFunction`

```rust
pub(in assets::import_registry) type RemoveLoadedFunction = fn (_: &mut crate::asset::AssetManager, _: &std::path::Path) -> bool;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:195`

Drop the asset loaded under a path's name; `true` when one went.
