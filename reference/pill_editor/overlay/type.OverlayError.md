<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-385"></a>

# Type alias `pill_editor::overlay::OverlayError`

```rust
pub type OverlayError = String;
```

Source: `editor\pill_editor\src\overlay.rs:58`

Why an overlay could not be created. The executable logs it, falls back to
the window surface and retries the composition overlay every so often.
