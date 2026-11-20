<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1585"></a>

# Constant `pill_editor::runner::ASSET_REFRESH_FRAMES`

```rust
pub(in runner) const ASSET_REFRESH_FRAMES: u64 = 120;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:234`

Frames between periodic asset-listing refreshes. A file command refreshes
the listing at once instead of waiting for this cadence.
