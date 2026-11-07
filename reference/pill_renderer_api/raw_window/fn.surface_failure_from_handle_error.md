<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-986"></a>

# Function `pill_renderer_api::raw_window::surface_failure_from_handle_error`

```rust
pub(in raw_window) fn surface_failure_from_handle_error(error: raw_window_handle::HandleError) -> crate::error::RendererError;
```

Visibility: `{'restricted': {'parent': 988, 'path': '::raw_window'}}` · Source: `rendering\pill_renderer_api\src\raw_window.rs:249`

Turns a failure to read a window's handles into a surface creation error.
