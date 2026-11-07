<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-236"></a>

# Static `pill_master_renderer::frame::UI_PRODUCER`

```rust
pub(in frame) static UI_PRODUCER: std::sync::atomic::AtomicU8 = _;
```

Visibility: `{'restricted': {'parent': 238, 'path': '::frame'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\frame.rs:54`

Which producer filled `RenderFrame.ui` on the last frame, so the log states
a change once instead of on every frame.

This is module state rather than a frame field: the frame is plain data
shared through the renderer contract, while the producer is a fact about
this renderer's world. A reload gives the module fresh statics, so the next
frame logs which producer is feeding it again.
