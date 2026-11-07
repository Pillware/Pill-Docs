<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-454"></a>

# Constant `pill_editor_core::brand::MARK_ALPHA`

```rust
pub const MARK_ALPHA: [u8; 2304] = _;
```

Source: `editor\pill_editor_core\src\brand.rs:35`

The mark's coverage per texel, stored row by row. The array holds
`MARK_SIDE * MARK_SIDE` bytes: a texel the path covers fully reads 255,
one it misses reads 0, and a texel on an edge reads the covered share of
its area, scaled to the same range.
