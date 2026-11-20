<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-75"></a>

# Function `pill_engine_core::abi::mirror::assets::asset_manager_from_slot`

```rust
pub(in abi::mirror::assets) unsafe fn asset_manager_from_slot<'a>(packed_arguments: *const u8) -> MirrorResult<&'a mut crate::asset::AssetManager>;
```

Visibility: `{'restricted': {'parent': 78, 'path': '::abi::mirror::assets'}}` · Source: `engine\pill_engine_core\src\abi\mirror.rs:664`

The `AssetManager` a slot addresses.

## Safety

The slot must hold null or the address of the world's live store, used
by nothing else for the call.
