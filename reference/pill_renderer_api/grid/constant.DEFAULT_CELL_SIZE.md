<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-851"></a>

# Constant `pill_renderer_api::grid::DEFAULT_CELL_SIZE`

```rust
pub(in grid) const DEFAULT_CELL_SIZE: f32 = 1.0;
```

Visibility: `{'restricted': {'parent': 852, 'path': '::grid'}}` · Source: `rendering\pill_renderer_api\src\grid.rs:43`

The cell size the grid uses when the frontend's value is unusable. The
shader divides world positions by the cell size, so it must be positive and
finite.
