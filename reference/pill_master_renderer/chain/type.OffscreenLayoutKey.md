<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-533"></a>

# Type alias `pill_master_renderer::chain::OffscreenLayoutKey`

```rust
pub(in chain) type OffscreenLayoutKey = (Vec<(String, u32)>, u32, u32);
```

Visibility: `{'restricted': {'parent': 534, 'path': '::chain'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:217`

What the offscreen targets were built for: the scale each pass asks for on
each target it names, and the surface size.
