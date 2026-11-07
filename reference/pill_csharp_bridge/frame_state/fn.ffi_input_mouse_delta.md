<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1198"></a>

# Function `pill_csharp_bridge::frame_state::ffi_input_mouse_delta`

```rust
pub(crate) extern "C" fn ffi_input_mouse_delta(out_x: *mut f32, out_y: *mut f32) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\frame_state.rs:81`

Writes the mouse movement since the previous frame to `out_x` and `out_y`
and returns `1`.

The values are raw device motion with no pixel unit: the platform reports
them in its own units and does not scale them. Outside an active invocation
the values written are zero. Returns `0` and writes nothing when either
output is null.

## Safety

`out_x` and `out_y` must each be null or point at a writable `f32` for the
whole call.
