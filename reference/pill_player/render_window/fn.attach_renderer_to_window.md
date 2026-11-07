<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-131"></a>

# Function `pill_player::render_window::attach_renderer_to_window`

```rust
pub(crate) fn attach_renderer_to_window<W: RendererWindow, impl FnOnce(RawWindowData) -> Result<Box<dyn PillRenderer>, RendererError>: FnOnce(pill_renderer_api::RawWindowData) -> Result<Box<dyn PillRenderer>, pill_renderer_api::RendererError>>(window: W, attach_renderer: impl FnOnce(pill_renderer_api::RawWindowData) -> Result<Box<dyn PillRenderer>, pill_renderer_api::RendererError>) -> Result<(Box<dyn PillRenderer>, Box<dyn Any>, pill_renderer_api::RawWindowData), pill_renderer_api::RendererError>;
```

Visibility: `crate` · Source: `hosting\pill_player\src\render_window.rs:72`

Attaches a renderer to `window` through `attach_renderer`, and returns the
renderer, the window the renderer must not outlive, and the window's
handles as data. A caller keeps the handles to attach another renderer to
the same window later.

`attach_renderer` builds the renderer from the window's handles. The
caller must store the renderer and the window so that the renderer is
dropped first: in a struct, declare the renderer field before the window
field. That order is what makes it sound for `attach_renderer` to create
a surface from the handles.

## Errors

Returns a [`RendererError`] if the window does not give its handles, if
its platform is not one [`RawWindowData`] carries, if its window and
display handles come from different platforms, or if `attach_renderer`
fails.
