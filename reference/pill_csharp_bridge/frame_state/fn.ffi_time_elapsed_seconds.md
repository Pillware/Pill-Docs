<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1200"></a>

# Function `pill_csharp_bridge::frame_state::ffi_time_elapsed_seconds`

```rust
pub(crate) extern "C" fn ffi_time_elapsed_seconds() -> f32;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\frame_state.rs:116`

Returns the seconds since the project started, or `0.0` with no active
invocation.

This is wall-clock time, for animation that must not advance with the
frame delta.
