<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1332"></a>

# Function `pill_core::profiling::enabled::profiler_connected`

```rust
pub fn profiler_connected() -> bool;
```

Source: `engine\pill_core\src\profiling.rs:458`

Whether a Tracy profiler is connected right now.

Tracy records on demand: until a profiler connects, it drops every
event. So a one-time setup event, such as a GPU timeline's context,
has to wait for a connection and be sent again after a reconnect.
Otherwise later events refer to something the profiler never saw, and
`tracy-capture` crashes on GPU zones of an unknown context.
