<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-622"></a>

# Type alias `pill_player::static_project::StaticRendererAttachFn`

```rust
pub type StaticRendererAttachFn = unsafe fn (_: pill_renderer_api::RawWindowData, _: u32, _: u32) -> pill_renderer_api::AttachFuture;
```

Source: `hosting\pill_player\src\static_project.rs:133`

`attach(window, width, height)`: a renderer backend being built on `window`.
