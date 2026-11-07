<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1018"></a>

# Function `pill_master_renderer::overlay::picking::decode_slot`

```rust
pub(in overlay::picking) fn decode_slot(mapped_bytes: &[u8], slot_index: usize, queue_entities: &[pill_engine::Entity]) -> pill_renderer_api::PickHit;
```

Visibility: `{'restricted': {'parent': 946, 'path': '::overlay::picking'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\picking.rs:231`

Decodes slot `slot_index` of a mapped readback into the pick answer it
holds.
