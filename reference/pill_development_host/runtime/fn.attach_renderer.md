<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4127"></a>

# Function `pill_development_host::runtime::attach_renderer`

```rust
pub fn attach_renderer<W>(host: DevHost, window: W, width: u32, height: u32) -> Result<RenderingHost, pill_player::RenderingError> where W: RendererWindow + 'static;
```

Source: `hosting\pill_development_host\src\runtime.rs:2111`

Complete rendering setup from an already-built [`DevHost`](struct.DevHost.md#rustdoc-item-3922), attaching the
engine renderer to a supplied native window.

Frontends that must finish project setup (building and loading the project
module) before any window exists call this after [`setup`](fn.setup.md#rustdoc-item-4116), so a slow first
build never shows a blank surface. The standalone runner is one.

## Errors

Returns the composed [`RenderingError`](pill_player::RenderingError):
a [`HostError`] when the renderer module cannot be built, loaded or
initialized, or a [`RendererError`] when attaching it to the window fails.
