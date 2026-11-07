<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2044"></a>

# Function `pill_master_renderer::renderer::record_preview`

```rust
pub(in renderer) fn record_preview(renderer: &mut Renderer, frame: &crate::frame::RenderFrame, assets_manager: &pill_engine::AssetManager);
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:1394`

Draw one asset preview, when the frame asked for one and the previous
preview has been handed over.

A texture is drawn from its file, which the preview path decodes and
uploads on first use. A material is drawn as a sphere in the first colour
parameter of its parameter map, and a mesh from its own file through the
preview's mesh pipeline.

Every request the frame took is answered: the first is drawn if the
renderer is free, and anything not drawn is refused. A caller that waits
for an answer that never comes stops asking.

The preview has its own encoder and submission, after the frame's surfaces,
so it never delays a presented frame.
