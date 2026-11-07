<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-187"></a>

# Function `pill_audio::audio_listener_component::register`

```rust
pub(crate) fn register(world: &mut pill_engine::World);
```

Visibility: `crate` · Source: `extensions\pill_audio\pill_audio\src\audio_listener_component.rs:64`

Registers [`AudioListenerComponent`](struct.AudioListenerComponent.md#rustdoc-item-129) with the world, including its field
layout.

The derive generates `__pill_register_AudioListenerComponent` as a private
item of this module, so the crate's [`register`](#rustdoc-item-187) function
cannot call it by path; it calls this function instead. The layout is what
lets the Inspector show the two fields as rows and the C# code generator
give them types. Without it, both see one untyped block of bytes.
