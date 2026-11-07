<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2045"></a>

# Function `pill_master_renderer::renderer::draw_preview`

```rust
pub(in renderer) fn draw_preview(renderer: &mut Renderer, request: &pill_renderer_api::PreviewRequest, assets_manager: &pill_engine::AssetManager) -> std::result::Result<(), &'static str>;
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:1419`

Draw one preview, naming what stopped it when it cannot be drawn.

## Errors

Returns the reason as text when the asset's file cannot be decoded.
