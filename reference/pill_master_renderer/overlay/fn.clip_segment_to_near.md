<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1461"></a>

# Function `pill_master_renderer::overlay::clip_segment_to_near`

```rust
pub(in overlay) fn clip_segment_to_near(start: [f32; 4], end: [f32; 4]) -> Option<([f32; 4], [f32; 4])>;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1261`

A segment clipped to the camera's near side: `None` when both ends are
behind it, otherwise the part that crosses into view.
