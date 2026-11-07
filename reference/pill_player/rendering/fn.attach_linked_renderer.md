<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-279"></a>

# Function `pill_player::rendering::attach_linked_renderer`

```rust
pub(in rendering) fn attach_linked_renderer(renderer: crate::StaticRenderer, window_data: pill_renderer_api::RawWindowData, width: u32, height: u32) -> pill_renderer_api::AttachFuture;
```

Visibility: `{'restricted': {'parent': 137, 'path': '::rendering'}}` · Source: `hosting\pill_player\src\rendering.rs:771`

Start building a backend on `window_data` from the linked renderer.

## Errors

The returned future fails when the renderer cannot attach.
