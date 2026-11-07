<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1027"></a>

# Constant `pill_master_renderer::overlay::PICK_LINE_HALF_WIDTH`

```rust
pub(in overlay) const PICK_LINE_HALF_WIDTH: f32 = 7.0;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:92`

The half width of a gizmo line's quad in the pick buffer, in pixels.

Wider than the drawn line, so a click counts anywhere inside the band the
editor's hover test treats as the handle. That radius follows the handle's
length, which keeps it a roughly constant size on screen, so a handle
responds where it is highlighted.
