<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1470"></a>

# Function `pill_master_renderer::overlay::expand_polygon`

```rust
pub(in overlay) fn expand_polygon(polygon: &[([f32; 4], [f32; 3])], viewport_size: (f32, f32), offset: f32) -> Vec<([f32; 4], [f32; 3])>;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1386`

Moves every vertex of a projected polygon `offset` pixels away from its two
edges. A straight corner moves along the edge normal; a sharp corner moves
farther, so both edges clear the original shape by `offset` and the
feathered band has no gaps at the joins.
