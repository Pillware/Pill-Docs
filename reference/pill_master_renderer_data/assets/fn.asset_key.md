<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1308"></a>

# Function `pill_master_renderer_data::assets::asset_key`

```rust
pub fn asset_key<T: Asset>(asset_handle: pill_engine::Handle<T>) -> u64;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\mod.rs:80`

Turns a typed asset handle into the key the renderer's caches use.

The generation is packed above the index, so two versions of one asset
never share a key.
