<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1504"></a>

# Function `pill_master_renderer::overlay::clip_segment_to_near`

```rust
pub(in overlay) fn clip_segment_to_near(start: [f32; 4], end: [f32; 4]) -> Option<([f32; 4], [f32; 4])>;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:1305`

A segment clipped to the camera's near side: `None` when both ends are
behind it, otherwise the part that crosses into view.
