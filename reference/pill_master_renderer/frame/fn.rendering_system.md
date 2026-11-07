<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-244"></a>

# Function `pill_master_renderer::frame::rendering_system`

```rust
pub fn rendering_system(frame: pill_engine::ResMut<'_, RenderFrame>, assets: pill_engine::Res<'_, pill_engine::AssetManager>, manager: pill_engine::Res<'_, crate::resources::RenderingManager>, (time, surface_cameras, debug_draw, outlines, pick_requests, ui_slot, preview_requests): (pill_engine::Res<'_, pill_engine::Time>, pill_engine::Res<'_, pill_renderer_api::SurfaceCameras>, pill_engine::ResMut<'_, pill_engine::DebugDraw>, pill_engine::Res<'_, pill_renderer_api::SelectionOutlines>, pill_engine::ResMut<'_, pill_renderer_api::PickRequests>, pill_engine::ResMut<'_, pill_ui_frame::UiFrameSlot>, pill_engine::ResMut<'_, pill_renderer_api::PreviewRequests>), cameras: pill_engine::Query<'_, (pill_engine::Entity, &crate::components::TransformComponent, &crate::components::CameraComponent)>, drawables: pill_engine::Query<'_, (pill_engine::Entity, &crate::components::TransformComponent, &crate::components::MeshRendererComponent)>) -> Result<(), pill_engine::SystemError>;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\frame.rs:301`

Fills the frame from the current world, once per update.

It runs as the post-update `rendering` system, so gameplay has already
written the components it reads. The pass chain is resolved again only when
the asset revision or the pipeline's key moves, so most frames reuse the
previous result.

A world missing the frame resource or the asset store is not an error: the
system returns and draws nothing. A world with no enabled camera still gets
a frame, but the primary surface has no view unless a camera is bound to it,
and the renderer skips a frame that has no views at all.
