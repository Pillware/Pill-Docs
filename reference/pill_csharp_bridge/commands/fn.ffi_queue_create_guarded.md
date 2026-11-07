<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-725"></a>

# Function `pill_csharp_bridge::commands::ffi_queue_create_guarded`

```rust
pub(in commands) fn ffi_queue_create_guarded(entity: *const pill_engine::Entity, blobs: *const super::abi::NativeComponentBlob, blob_count: u32) -> u8;
```

Visibility: `{'restricted': {'parent': 697, 'path': '::commands'}}` · Source: `csharp\pill_csharp_bridge\src\commands.rs:167`

Queue entity creation, after checking every supplied component blob.

Nothing is queued unless every blob passes, and a count above
[`MAX_COMPONENTS_PER_CREATE`](constant.MAX_COMPONENTS_PER_CREATE.md#rustdoc-item-688) is refused as the ABI contract requires.
