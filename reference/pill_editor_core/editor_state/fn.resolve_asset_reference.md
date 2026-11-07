<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3661"></a>

# Function `pill_editor_core::editor_state::resolve_asset_reference`

```rust
pub(in editor_state) fn resolve_asset_reference(engine: &mut pill_engine::Engine, asset_reference: &str) -> Result<pill_engine::FieldValue, String>;
```

Visibility: `{'restricted': {'parent': 2404, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\mod.rs:1084`

Resolves the asset value `asset_reference` names, and loads the asset when
it is not loaded yet.

The reference is a path relative to `res`, a guid the project's files
carry, or a name the store already holds. The returned value carries the
type the asset loaded as, so the field write that follows refuses an asset
of a different type than the field references.
