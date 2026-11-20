<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4788"></a>

# Function `pill_engine_core::ecs::world::lifecycle::sort_pending_events`

```rust
pub(in ecs::world::lifecycle) fn sort_pending_events(ordered: &mut [(i32, &PendingScriptEvent)]);
```

Visibility: `{'restricted': {'parent': 4789, 'path': '::ecs::world::lifecycle'}}` · Source: `engine\pill_engine_core\src\ecs\world\lifecycle.rs:310`

Sorts pending events by lifecycle method order, then type name, then entity.

Type name before entity keeps one type's entities together, which is the
order the play-start scan reads them in, and the entity key makes the result
independent of the order the events were queued in.
