<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-274"></a>

# Constant `pill_master_renderer::instance::INSTANCES_PER_CHUNK`

```rust
pub(in instance) const INSTANCES_PER_CHUNK: usize = 2048;
```

Visibility: `{'restricted': {'parent': 275, 'path': '::instance'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\instance.rs:46`

How many instances one chunk of the parallel build holds.

The frame's instances are split into chunks of this size. The size is small
enough that a large frame still spreads across the pool, and large enough
that the cost of scheduling a chunk stays far below the work in it.
