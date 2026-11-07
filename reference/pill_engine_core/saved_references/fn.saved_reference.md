<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7608"></a>

# Function `pill_engine_core::saved_references::saved_reference`

```rust
pub fn saved_reference(world: &crate::world::World, assets: &crate::asset::AssetManager, registry: &crate::asset_import_registry::ImportRegistry, value: &crate::component_field::FieldValue) -> Option<SavedReference>;
```

Source: `engine\pill_engine_core\src\saved_references.rs:216`

Returns the saved form of one field value, or `None` when the value
references nothing: an unset handle, the null entity, or a field that is
not a reference at all.

The world turns a stored entity handle into an [`EntityId`](../entity/struct.EntityId.md#rustdoc-item-3298). The asset
manager and the import registry turn an asset handle into the guid and the
path that identify the asset. An asset handle whose asset has no guid
cannot be saved, so it comes back as `None` here rather than as a reference
that would later resolve to the wrong asset.
