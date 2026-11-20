<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1026"></a>

# Constant `pill_master_renderer::overlay::MINIMUM_MITER_SINE`

```rust
pub(in overlay) const MINIMUM_MITER_SINE: f32 = 0.02;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:100`

The smallest sine of a corner's half-angle the expansion accepts. At a
sharper corner the vertex would be pushed out without limit.
