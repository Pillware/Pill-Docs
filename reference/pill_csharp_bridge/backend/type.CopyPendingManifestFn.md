<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-422"></a>

# Type alias `pill_csharp_bridge::backend::CopyPendingManifestFn`

```rust
pub(in backend) type CopyPendingManifestFn = extern "System" fn (_: *mut u8, _: u32) -> u8;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:176`

Signature copying the pending version's manifest into a caller buffer.
