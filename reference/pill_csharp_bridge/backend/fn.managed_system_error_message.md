<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-684"></a>

# Function `pill_csharp_bridge::backend::managed_system_error_message`

```rust
pub(in backend) fn managed_system_error_message(length: extern "System" fn (_: u32) -> u32, copy: extern "System" fn (_: u32, _: *mut u8, _: u32) -> u8, system_index: u32) -> String;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:1517`

Copies the failure message one managed system reported after a failed run.

Falls back to a fixed message when the managed side reports no text, an
oversized message, or a failed copy.
