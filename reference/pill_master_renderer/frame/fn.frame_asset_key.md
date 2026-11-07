<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-256"></a>

# Function `pill_master_renderer::frame::frame_asset_key`

```rust
pub(in frame) fn frame_asset_key<T: pill_engine::Asset>(handle: pill_engine::Handle<T>) -> pill_renderer_api::AssetKey;
```

Visibility: `{'restricted': {'parent': 238, 'path': '::frame'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\frame.rs:100`

Builds the key the frame uses for `handle`.

The asset layer packs the handle into a number; the renderer contract
carries that value as an [`AssetKey`].
