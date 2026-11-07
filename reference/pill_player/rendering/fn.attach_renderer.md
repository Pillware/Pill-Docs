<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-276"></a>

# Function `pill_player::rendering::attach_renderer`

```rust
pub async fn attach_renderer<W: RendererWindow>(runtime: crate::Runtime, window: W, width: u32, height: u32) -> Result<RenderingRuntime, crate::RenderingError>;
```

Source: `hosting\pill_player\src\rendering.rs:710`

Register the linked renderer and attach it to `window`.

A frontend calls this after project setup succeeds, so a slow start never
shows a blank surface. Asynchronous because building the renderer is: a
native frontend blocks on it once, a web frontend awaits it.

## Errors

Returns [`RenderingError::Renderer`](../error/enum.RenderingError.md#rustdoc-item-5) when the renderer's registration fails
or the backend cannot attach to the window. A build that links no renderer
also returns it, carrying the message that names the two ways a windowed
build ends up without one.
