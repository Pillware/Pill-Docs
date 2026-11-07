<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-353"></a>

# Function `pill_csharp_bridge::abi::ffi_csharp_log`

```rust
pub(in abi) extern "C" fn ffi_csharp_log(level: u8, target: *const u8, target_len: u32, message: *const u8, message_len: u32);
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:426`

Forwards one managed log line to the engine's tracing subscriber.

The line lands on [`telemetry_target::CSHARP`] at the managed level, with
the managed logger's own category as the `managed_target` field. The
message is forwarded text written by managed code, so it is passed through
as the message rather than worded here. A level outside the five known
ones logs at `warn`, so an unexpected value is visible without reading as
a failure.
