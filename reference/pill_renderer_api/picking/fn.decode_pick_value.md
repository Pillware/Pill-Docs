<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1439"></a>

# Function `pill_renderer_api::picking::decode_pick_value`

```rust
pub fn decode_pick_value(value: u32, instance_entities: &[pill_engine::Entity]) -> PickHit;
```

Source: `rendering\pill_renderer_api\src\picking.rs:177`

Decodes one pick-buffer value against the instance entities of the frame
that drew it.

`instance_entities[index]` is the entity of the instance the buffer numbers
`index + 1`. A number past the end of the list answers [`PickHit::Nothing`](enum.PickHit.md#rustdoc-item-1288).
