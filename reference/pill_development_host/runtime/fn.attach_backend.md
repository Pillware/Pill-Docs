<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4126"></a>

# Function `pill_development_host::runtime::attach_backend`

```rust
pub(in runtime) fn attach_backend(renderer_module: &crate::renderer_module::RendererModule, window_data: pill_renderer_api::RawWindowData, width: u32, height: u32) -> Result<Box<dyn PillRenderer>, pill_renderer_api::RendererError>;
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:2083`

Build a backend on `window_data` from the loaded renderer module.

## Errors

Returns a [`RendererError`] when the module cannot attach.
