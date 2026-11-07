<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7609"></a>

# Function `pill_engine_core::saved_references::restore_asset_reference`

```rust
pub fn restore_asset_reference(assets: &mut crate::asset::AssetManager, database: &crate::asset_database::AssetDatabase, registry: &crate::asset_import_registry::ImportRegistry, saved: &SavedAssetReference) -> crate::component_field::FieldValue;
```

Source: `engine\pill_engine_core\src\saved_references.rs:268`

Returns the field value that an asset reference field holds for `saved`,
loading the asset on demand.

The guid is tried first, looked up in the project's asset database. A guid
nothing knows falls back to the path hint, which keeps a reference working
after its asset was copied into another project that gave it a different
guid. That fallback is logged once per guid, and so is a reference that
resolves to nothing: it comes back invalid, so one missing asset does not
fail the document that names it.

The caller writes the value into the field. Loading needs a mutable asset
manager, and the world that holds the field cannot be borrowed mutably at
the same time.
