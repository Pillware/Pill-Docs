<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8696"></a>

# Constant `pill_engine_core::services::gizmos::PASS_ORDER`

```rust
pub(in services::gizmos) const PASS_ORDER: i32 = -1;
```

Visibility: `{'restricted': {'parent': 8697, 'path': '::services::gizmos'}}` · Source: `engine\pill_engine_core\src\services\gizmos.rs:62`

The pass's order within the post-project phase.

It must run before the renderer turns [`DebugDraw`](../debug_draw/struct.DebugDraw.md#rustdoc-item-4313) into a frame, and that
system sits at the default order of zero, so the pass takes a negative one.
