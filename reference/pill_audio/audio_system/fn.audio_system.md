<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-461"></a>

# Function `pill_audio::audio_system::audio_system`

```rust
pub fn audio_system(audio_manager: pill_engine::ResMut<'_, crate::audio_manager::AudioManager>, asset_manager: pill_engine::ResMut<'_, pill_engine::AssetManager>, load_queue: pill_engine::ResMut<'_, crate::AudioLoadQueue>, listeners: pill_engine::Query<'_, (&crate::audio_listener_component::AudioListenerComponent, &pill_engine::TransformComponent)>, sources: pill_engine::Query<'_, (&mut crate::audio_source_component::AudioSourceComponent, &pill_engine::TransformComponent)>) -> Result<(), pill_engine::SystemError>;
```

Source: `extensions\pill_audio\pill_audio\src\audio_system.rs:57`

Drives every [`AudioSourceComponent`](../audio_source_component/struct.AudioSourceComponent.md#rustdoc-item-123) once per frame.

Queued sound loads become [`Sound`](../sound/struct.Sound.md#rustdoc-item-228) assets first. Then four steps run, in
this order:

1. the active listener's ears are placed, so panning matches this frame;
2. each source's pending [`AudioCommand`](../audio_command/enum.AudioCommand.md#rustdoc-item-4) is carried out;
3. each playing spatial source's emitter is moved to its entity;
4. sinks whose sound has finished are returned to the pool.

Step 4 is what makes a fixed pool workable. Without it, a source would keep
its sink after its sound ended, and the pool would run out of voices.

With no [`AudioManager`](../audio_manager/struct.AudioManager.md#rustdoc-item-124) installed the function only drains the load
queue, which is the headless case. See [`AudioManager::new`](../audio_manager/struct.AudioManager.md#rustdoc-item-230).

## Errors

Returns [`SystemError::Failure`] when the asset store refuses to store a
queued sound under its name. The name is checked first, so this is not
expected to happen.
