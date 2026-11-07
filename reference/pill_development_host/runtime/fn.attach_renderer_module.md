<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4125"></a>

# Function `pill_development_host::runtime::attach_renderer_module`

```rust
pub(in runtime) fn attach_renderer_module<W: RendererWindow>(host: &mut DevHost, window: W, width: u32, height: u32) -> Result<(crate::renderer_module::RendererModule, pill_player::AttachedRenderer), pill_player::RenderingError>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2035`

Load the renderer module and attach it to `window`.

The module registers under the engine's reserved renderer owner. Its
`rendering` system is then cleared and registered again with the module
instead of living forever under the engine's owner. No extension in the
same host can share that owner.

A renderer that did not load, or loaded but could not attach, leaves the
window blank instead of ending the host. The scene keeps running, and the
next renderer edit loads and attaches again.

## Errors

Returns a [`HostError`] when the module cannot be started, and a
[`RendererError`] when the window cannot give its handles.
