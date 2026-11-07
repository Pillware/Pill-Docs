<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3083"></a>

# Function `pill_master_renderer::ui::renderer::physical_scissor`

```rust
pub(in ui::renderer) fn physical_scissor(clip: &pill_ui_frame::Rect, scale_factor: f32, target_size: (u32, u32)) -> Option<[u32; 4]>;
```

Visibility: `{'restricted': {'parent': 2958, 'path': '::ui::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\ui\renderer.rs:598`

Converts a `clip` in logical pixels into the scissor rectangle a render pass
takes: physical pixels, rounded outward and clamped to `target_size`.
Returns `None` when nothing would be drawn, because the clip is empty or
lies entirely outside the target.
