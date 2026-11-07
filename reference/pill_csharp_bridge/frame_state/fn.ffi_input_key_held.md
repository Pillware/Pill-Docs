<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1196"></a>

# Function `pill_csharp_bridge::frame_state::ffi_input_key_held`

```rust
pub(crate) extern "C" fn ffi_input_key_held(key_discriminant: u8) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\frame_state.rs:40`

Reports whether the key with discriminant `key_discriminant` is held this
frame.

Returns `1` while the key is held and `0` otherwise, including outside an
active invocation and for a number no [`KeyCode`] has.
