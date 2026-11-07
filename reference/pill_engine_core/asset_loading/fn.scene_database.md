<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1848"></a>

# Function `pill_engine_core::asset_loading::scene_database`

```rust
pub fn scene_database(engine: &crate::engine::Engine) -> crate::asset_database::AssetDatabase;
```

Source: `engine\pill_engine_core\src\asset_loading.rs:150`

Returns the asset index a scene load resolves its references through.

The world's [`AssetDatabase`](../asset_database/struct.AssetDatabase.md#rustdoc-item-1244) comes first, when the host built one: a
shipped pack's index, or an index of the project's files. Without it, the
index is built from the mounted asset directory, and it is empty when
nothing is mounted. That preference is what lets a guid-only reference
resolve in a pack build, where no directory is mounted.
