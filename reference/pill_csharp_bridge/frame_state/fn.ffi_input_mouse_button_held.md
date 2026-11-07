<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1197"></a>

# Function `pill_csharp_bridge::frame_state::ffi_input_mouse_button_held`

```rust
pub(crate) extern "C" fn ffi_input_mouse_button_held(button_discriminant: u8) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\frame_state.rs:56`

Reports whether the mouse button with discriminant
`button_discriminant` is held this frame. Works the same way as
[`ffi_input_key_held`](fn.ffi_input_key_held.md#rustdoc-item-1196).
