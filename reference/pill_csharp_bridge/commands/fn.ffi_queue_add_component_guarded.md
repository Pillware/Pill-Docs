<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-729"></a>

# Function `pill_csharp_bridge::commands::ffi_queue_add_component_guarded`

```rust
pub(in commands) fn ffi_queue_add_component_guarded(entity: *const pill_engine::Entity, key_low: u64, key_high: u64, blob_bytes: *const u8, blob_size: u32) -> u8;
```

Visibility: `{'restricted': {'parent': 697, 'path': '::commands'}}` · Source: `csharp\pill_csharp_bridge\src\commands.rs:278`

Queue adding one component, selected by its stable managed identity.
