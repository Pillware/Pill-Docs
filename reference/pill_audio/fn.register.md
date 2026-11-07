<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-186"></a>

# Function `pill_audio::register`

```rust
pub fn register(engine: &mut Engine) -> u32;
```

Source: `extensions\pill_audio\pill_audio\src\pill_audio.rs:118`

Registers this module's components, resources and system with the engine.

This is the half a reload repeats: the components, resources and system
whose code moved with the arriving image. It must be idempotent, because a
first load reaches it too, immediately before [`init`](fn.init.md#rustdoc-item-724).

The [`AudioManager`](audio_manager/struct.AudioManager.md#rustdoc-item-124) is installed only when the machine has an audio
device. Without one the world still gets the components and the system, so
queued sounds are still stored; the system then has nothing to play them
with. That is what lets this module run on a machine with no sound card.

Returns 0.
