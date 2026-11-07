<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-233"></a>

# Constant `pill_audio::audio_manager::EAR_SEPARATION`

```rust
pub const EAR_SEPARATION: f32 = 1.0;
```

Source: `extensions\pill_audio\pill_audio\src\audio_manager.rs:50`

Half the distance between the listener's ears, in world units.

rodio pans a spatial sink by the distance between each ear and the emitter,
so this value decides how strong the stereo effect is.
