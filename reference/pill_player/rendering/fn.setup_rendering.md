<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-277"></a>

# Function `pill_player::rendering::setup_rendering`

```rust
pub async fn setup_rendering<W: RendererWindow>(project: crate::StaticProject, window: W, width: u32, height: u32) -> Result<RenderingRuntime, crate::RenderingError>;
```

Source: `hosting\pill_player\src\rendering.rs:756`

Start a statically linked project and attach its renderer to `window`.

## Errors

Returns a [`RenderingError`](../error/enum.RenderingError.md#rustdoc-item-6) carrying the setup failure or the renderer's.
