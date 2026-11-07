<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3857"></a>

# Function `pill_development_host::renderer_module::attach_module_renderer`

```rust
pub(crate) unsafe fn attach_module_renderer(module: &RendererModule, window: pill_renderer_api::RawWindowData, width: u32, height: u32) -> Result<Box<dyn PillRenderer>, pill_renderer_api::RendererError>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\renderer_module.rs:429`

Build a backend on `window` through the module's attach export.

## Errors

Returns [`RendererError::Other`] when no generation has loaded, when the
module lacks the attach or detach export, and when it reports that it could
not attach (it logs why).

## Safety

`window` names a live window that outlives the returned renderer, and the
returned renderer is dropped before `module` is.
