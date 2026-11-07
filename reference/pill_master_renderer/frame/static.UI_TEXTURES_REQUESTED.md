<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-239"></a>

# Static `pill_master_renderer::frame::UI_TEXTURES_REQUESTED`

```rust
pub(in frame) static UI_TEXTURES_REQUESTED: std::sync::atomic::AtomicBool = _;
```

Visibility: `{'restricted': {'parent': 238, 'path': '::frame'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\frame.rs:62`

Whether this renderer image has already asked the UI producer to send its
textures again.

A reload gives the module a fresh image with fresh statics, so the flag
answers "has this image asked yet?". It starts false, so the first frame
that finds a UI slot asks for every texture again.
