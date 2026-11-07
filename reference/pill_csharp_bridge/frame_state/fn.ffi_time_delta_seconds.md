<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1199"></a>

# Function `pill_csharp_bridge::frame_state::ffi_time_delta_seconds`

```rust
pub(crate) extern "C" fn ffi_time_delta_seconds() -> f32;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\frame_state.rs:105`

Returns the frame's time step in seconds, capped at the engine's maximum,
or `0.0` with no active invocation.

Gameplay advances by this value instead of by wall-clock time, and the cap
keeps a stalled frame from moving a managed simulation too far.
