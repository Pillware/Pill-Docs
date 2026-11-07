<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-174"></a>

# Type alias `pill_renderer_api::api::AttachFuture`

```rust
pub type AttachFuture = std::pin::Pin<Box<dyn Future<Output = _>>>;
```

Source: `rendering\pill_renderer_api\src\api.rs:129`

A renderer that is still being built for a window: what a statically
linked renderer's attach returns.

It is a future because creating a GPU device takes time, and a browser only
finishes the work once control returns to its event loop. A native frontend
blocks on it once; a web frontend awaits it. Not `Send`: a web GPU handle
has to stay on the thread that created it.
