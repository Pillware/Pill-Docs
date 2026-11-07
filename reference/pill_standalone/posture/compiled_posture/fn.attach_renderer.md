<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-177"></a>

# Function `pill_standalone::posture::compiled_posture::attach_renderer`

```rust
pub fn attach_renderer<W: RendererWindow>(headless_driver: pill_development_host::DevHost, window: W, window_width_pixels: u32, window_height_pixels: u32) -> Result<pill_development_host::RenderingHost, pill_player::RenderingError>;
```

Source: `frontends\pill_standalone\src\posture.rs:69`

Loads the renderer module and attaches it to `window`.

Call it after [`setup_driver`](fn.setup_driver.md#rustdoc-item-176), once a window exists, so a slow first build
never shows a blank surface. `window_width_pixels` and
`window_height_pixels` hold the window's size in physical pixels.

## Errors

Returns a [`RenderingError`]: a [`HostError`] when the renderer module
cannot be built, loaded or initialized, or a `RendererError` when
attaching it to the window fails.
