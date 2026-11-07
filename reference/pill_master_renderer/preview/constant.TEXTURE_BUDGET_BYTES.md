<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-593"></a>

# Constant `pill_master_renderer::preview::TEXTURE_BUDGET_BYTES`

```rust
pub(in preview) const TEXTURE_BUDGET_BYTES: u64 = _;
```

Visibility: `{'restricted': {'parent': 592, 'path': '::preview'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\preview.rs:57`

How many GPU bytes the decoded texture files may hold.

The cache is there so that scrolling back to a tile costs no decode. It is
not a residency list, so it has a fixed limit instead of growing for the
whole session. A 4K texture is 64 MB, so this limit holds one of those or a
few dozen smaller ones.
