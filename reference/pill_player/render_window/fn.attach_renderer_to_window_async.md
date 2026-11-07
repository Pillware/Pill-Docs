<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-133"></a>

# Function `pill_player::render_window::attach_renderer_to_window_async`

```rust
pub(crate) async fn attach_renderer_to_window_async<W, F, impl FnOnce(RawWindowData) -> F: FnOnce(pill_renderer_api::RawWindowData) -> F>(window: W, attach_renderer: impl FnOnce(pill_renderer_api::RawWindowData) -> F) -> Result<(Box<dyn PillRenderer>, Box<dyn Any>, pill_renderer_api::RawWindowData), pill_renderer_api::RendererError> where W: RendererWindow, F: Future<Output = _>;
```

Visibility: `crate` · Source: `hosting\pill_player\src\render_window.rs:91`

Attaches a renderer that is built asynchronously to `window`, like
[`attach_renderer_to_window`](fn.attach_renderer_to_window.md#rustdoc-item-131), except that `attach_renderer` returns a
future. The window is kept while the future runs.

## Errors

Returns a [`RendererError`] if the window does not give its handles, if
its platform is not one [`RawWindowData`] carries, if its window and
display handles come from different platforms, or if the future that
`attach_renderer` returns fails.
