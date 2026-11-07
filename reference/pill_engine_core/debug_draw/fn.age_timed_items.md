<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3992"></a>

# Function `pill_engine_core::debug_draw::age_timed_items`

```rust
pub(in debug_draw) fn age_timed_items<T>(timed_items: &mut Vec<Timed<T>>, delta_seconds: f32);
```

Visibility: `{'restricted': {'parent': 3592, 'path': '::debug_draw'}}` · Source: `engine\pill_engine_core\src\debug_draw.rs:508`

Drops the items whose time ran out and counts the rest down.
