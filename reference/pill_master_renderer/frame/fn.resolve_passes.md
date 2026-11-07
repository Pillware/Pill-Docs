<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-259"></a>

# Function `pill_master_renderer::frame::resolve_passes`

```rust
pub(in frame) fn resolve_passes(assets: &pill_engine::AssetManager, manager: Option<&crate::resources::RenderingManager>) -> Vec<ResolvedPass>;
```

Visibility: `{'restricted': {'parent': 238, 'path': '::frame'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\frame.rs:115`

Returns the pass chain this frame should run, read from the pipeline the
game selected.

The result keeps only the passes that are switched on and whose handle still
resolves, and sorts them by their `order` value. Passes with equal `order`
keep the pipeline's own order, so a game lists its passes in the order it
wants and only a pass inserted later needs an explicit `order`.

A pass can be switched off in two places, and both are the game's own
choice rather than a fault: on the pipeline entry, which affects only this
chain, or on the pass asset itself, which affects every chain that names it.
