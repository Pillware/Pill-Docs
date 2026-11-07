<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1106"></a>

# Function `pill_csharp_bridge::context::with_active_world`

```rust
pub(crate) fn with_active_world<R, impl FnOnce(&mut World) -> R: FnOnce(&mut pill_engine::World) -> R>(body: impl FnOnce(&mut pill_engine::World) -> R) -> Option<R>;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\context.rs:349`

Runs a callback with the world of the active managed invocation, returning
`None` when no managed invocation is running on this thread.
