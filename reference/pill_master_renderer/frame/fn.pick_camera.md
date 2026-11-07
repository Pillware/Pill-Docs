<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-263"></a>

# Function `pill_master_renderer::frame::pick_camera`

```rust
pub(in frame) fn pick_camera<impl IntoIterator<Item = (u64, CameraComponent, TransformComponent)>: IntoIterator<Item = _>>(cameras: impl IntoIterator<Item = _>) -> Option<(crate::components::CameraComponent, crate::components::TransformComponent)>;
```

Visibility: `{'restricted': {'parent': 238, 'path': '::frame'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\frame.rs:237`

Picks the camera the primary surface draws through, out of every enabled
camera in the world.

The highest `priority` wins. Equal priorities go to the lowest entity id, so
the choice stays the same from frame to frame while the same cameras exist,
whatever order the query walks them in. `None` means no camera is enabled;
the primary surface is then drawn only if a camera is bound to it.
