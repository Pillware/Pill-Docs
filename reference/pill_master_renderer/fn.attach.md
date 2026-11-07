<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3141"></a>

# Function `pill_master_renderer::attach`

```rust
pub unsafe fn attach(window: pill_renderer_api::RawWindowData, width: u32, height: u32) -> pill_renderer_api::AttachFuture;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\lib.rs:166`

Starts building a renderer backend on a window, for a host that links this
crate statically - the shipping posture, where there is no module to load.

Returns a future because creating the device is asynchronous: a native
frontend blocks on it once, and a web frontend awaits it. A host that loads
this crate as a module reaches the same renderer through the blocking
`pill_renderer_attach` export instead.

## Errors

The future fails with a [`RendererError`] when building the renderer fails:
acquiring the surface or the adapter, creating the device, or creating an
object built after them - the surface configuration, the depth buffer, the
resource storage, the default material or the camera.

## Safety

`window` must name a live window that outlives the returned renderer.
