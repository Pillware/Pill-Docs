<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-125"></a>

# Trait `pill_player::render_window::RendererWindow`

```rust
pub trait RendererWindow: HasWindowHandle + HasDisplayHandle + 'static { ... }
```

Source: `hosting\pill_player\src\render_window.rs:41`

A window the renderer can be attached to.

Every type that hands out `raw-window-handle` 0.6 window and display
handles implements this trait automatically. That includes winit's and
tao's windows, and an `Arc` of either, so a frontend can pass its own
window type.
