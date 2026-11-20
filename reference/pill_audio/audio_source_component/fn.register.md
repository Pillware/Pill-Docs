<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-589"></a>

# Function `pill_audio::audio_source_component::register`

```rust
pub(crate) fn register(world: &mut pill_engine::World);
```

Visibility: `crate` · Source: `extensions\pill_audio\modules\runtime\src\audio_source_component.rs:149`

Registers [`AudioSourceComponent`](struct.AudioSourceComponent.md#rustdoc-item-126) with the world, field layout included.

The derive generates `__pill_register_AudioSourceComponent` as a private
item of this module, so [`crate::register`](../fn.register.md#rustdoc-item-249) reaches it through here rather
than by path. With the layout, the Inspector draws the `sound` handle as an
asset row and the managed mirror gets a typed field for it.
