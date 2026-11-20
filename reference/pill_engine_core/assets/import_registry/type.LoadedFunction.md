<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-518"></a>

# Type alias `pill_engine_core::assets::import_registry::LoadedFunction`

```rust
pub(in assets::import_registry) type LoadedFunction = fn (_: &crate::asset::AssetManager) -> Vec<(Option<crate::asset::AssetGuid>, String)>;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:214`

Every live asset of the type, as its guid and its name.
