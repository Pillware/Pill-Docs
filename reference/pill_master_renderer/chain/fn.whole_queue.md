<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-583"></a>

# Function `pill_master_renderer::chain::whole_queue`

```rust
pub(in chain) fn whole_queue(render_queue: &[crate::render_queue::RenderQueueItem]) -> Vec<std::ops::Range<u32>>;
```

Visibility: `{'restricted': {'parent': 534, 'path': '::chain'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:760`

The whole queue as one range, or none when the queue is empty.
