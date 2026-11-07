<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-586"></a>

# Function `pill_master_renderer::chain::offscreen_layout`

```rust
pub(in chain) fn offscreen_layout(chain: &[crate::frame::ResolvedPass], width: u32, height: u32) -> (Vec<(String, u32)>, u32, u32);
```

Visibility: `{'restricted': {'parent': 534, 'path': '::chain'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:820`

The layout of the offscreen targets a chain needs: one entry per pass and
target it names, with that pass's scale, plus the surface size.

Kept apart from the chain itself on purpose: editing an asset changes the
chain (a pass's parameters are part of it) but changes none of this, so the
offscreen textures survive an asset edit.
