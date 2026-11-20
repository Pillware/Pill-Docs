<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8584"></a>

# Function `pill_engine_core::services::debug_draw::age_timed_items`

```rust
pub(in services::debug_draw) fn age_timed_items<T>(timed_items: &mut Vec<Timed<T>>, delta_seconds: f32);
```

Visibility: `{'restricted': {'parent': 8104, 'path': '::services::debug_draw'}}` · Source: `engine\pill_engine_core\src\services\debug_draw.rs:584`

Drops the items whose time ran out and counts the rest down.
