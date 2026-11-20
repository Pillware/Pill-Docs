<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-934"></a>

# Function `pill_master_renderer::overlay::font::atlas_size`

```rust
pub(in overlay) fn atlas_size() -> (u32, u32);
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\font.rs:157`

The atlas's width and height in texels.

The width is [`ATLAS_COLUMNS`](constant.ATLAS_COLUMNS.md#rustdoc-item-859) cells, and the height is as many rows of
cells as the glyph table needs.
