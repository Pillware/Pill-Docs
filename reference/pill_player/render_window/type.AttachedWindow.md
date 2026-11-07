<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-129"></a>

# Type alias `pill_player::render_window::AttachedWindow`

```rust
pub(crate) type AttachedWindow = Box<dyn Any>;
```

Visibility: `crate` · Source: `hosting\pill_player\src\render_window.rs:49`

A frontend window held for the lifetime of the renderer drawn on it.

The window type is erased, so the value is only meant to be stored. Keep
it in a field declared after the renderer's field, so the renderer is
dropped first.
