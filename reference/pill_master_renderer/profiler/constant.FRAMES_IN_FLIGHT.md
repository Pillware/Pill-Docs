<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1481"></a>

# Constant `pill_master_renderer::profiler::FRAMES_IN_FLIGHT`

```rust
pub(in profiler) const FRAMES_IN_FLIGHT: usize = 8;
```

Visibility: `{'restricted': {'parent': 1480, 'path': '::profiler'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\profiler.rs:73`

How many frames can be waiting for their results at once.

The ring must be deeper than the GPU can fall behind the CPU. A frame whose
slot is still waiting records no queries, so too shallow a ring loses that
frame's measurements whenever the GPU is a few frames late. A slot holds
only resolved values, so the ring stays small.
