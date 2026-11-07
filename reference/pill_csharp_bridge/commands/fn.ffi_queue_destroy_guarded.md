<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-727"></a>

# Function `pill_csharp_bridge::commands::ffi_queue_destroy_guarded`

```rust
pub(in commands) fn ffi_queue_destroy_guarded(entity: *const pill_engine::Entity) -> u8;
```

Visibility: `{'restricted': {'parent': 697, 'path': '::commands'}}` · Source: `csharp\pill_csharp_bridge\src\commands.rs:247`

Queue destroying an entity, but only while its handle is still live.
