<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4118"></a>

# Function `pill_development_host::runtime::setup_rendering`

```rust
pub fn setup_rendering<W, impl Into<HostConfig>: Into<crate::HostConfig>>(project: impl Into<crate::HostConfig>, window: W, width: u32, height: u32) -> Result<RenderingHost, pill_player::RenderingError> where W: RendererWindow + 'static;
```

Source: `hosting\pill_development_host\src\runtime.rs:1839`

Sets up the engine, project module, hot reload, and renderer together.

A frontend owns its platform event loop and supplies its cloneable window
handle. The engine creates exactly one surface for that window, while the
returned [`RenderingHost`](struct.RenderingHost.md#rustdoc-item-3930) owns the renderer for the rest of its lifetime.

## Errors

Returns the composed [`RenderingError`](pill_player::RenderingError),
which transparently carries either a [`HostError`] from setup or a
[`RendererError`] from surface creation.
