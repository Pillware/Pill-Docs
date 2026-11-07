<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-246"></a>

# Type alias `pill_master_renderer::frame::RenderingExtras`

```rust
pub(in frame) type RenderingExtras<'w> = (pill_engine::Res<'w, pill_engine::Time>, pill_engine::Res<'w, pill_renderer_api::SurfaceCameras>, pill_engine::ResMut<'w, pill_engine::DebugDraw>, pill_engine::Res<'w, pill_renderer_api::SelectionOutlines>, pill_engine::ResMut<'w, pill_renderer_api::PickRequests>, pill_engine::ResMut<'w, pill_ui_frame::UiFrameSlot>, pill_engine::ResMut<'w, pill_renderer_api::PreviewRequests>);
```

Visibility: `{'restricted': {'parent': 238, 'path': '::frame'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\frame.rs:82`

The resources [`rendering_system`](fn.rendering_system.md#rustdoc-item-244) reads besides the frame, the assets and
the rendering manager.

They share one parameter because a system function takes at most seven.
They include the world's only UI producer: the slot a game's own UI
publishes into ([`UiFrameSlot`](pill_ui_frame::UiFrameSlot)). A world that
never installed a slot has no UI.
