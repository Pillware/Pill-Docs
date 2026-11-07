<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-417"></a>

# Type alias `pill_csharp_bridge::backend::RunSystemFn`

```rust
pub(in backend) type RunSystemFn = extern "System" fn (_: u32) -> u8;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:160`

Signature running one scheduler system by index.

Returns one on success and zero after the managed side records the
failure for [`SystemErrorMessageLengthFn`](type.SystemErrorMessageLengthFn.md#rustdoc-item-416) retrieval.
