<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-727"></a>

# pill_audio API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The audio extension: sound assets, playback components and the system that
plays them.

## Responsibilities

- Defines the [`Sound`](sound/struct.Sound.md#rustdoc-item-228) asset: encoded audio bytes held by the
  [`AssetManager`](pill_engine::AssetManager) and decoded for each playback.
- Defines the [`AudioListenerComponent`](audio_listener_component/struct.AudioListenerComponent.md#rustdoc-item-129) and [`AudioSourceComponent`](audio_source_component/struct.AudioSourceComponent.md#rustdoc-item-123)
  components, and the [`AudioManager`](audio_manager/struct.AudioManager.md#rustdoc-item-124) resource that owns the output stream
  and its sink pools.
- Registers [`audio_system`], which drives playback on every frame.

## Design

**A sound is an asset, not a resource.** A world holds many sounds, so
[`Sound`](sound/struct.Sound.md#rustdoc-item-228) implements [`Asset`](pill_engine::Asset) and is referenced by
`Handle<Sound>`. The handle carries a generation: after a sound is unloaded,
a handle that names it finds nothing, so a component that still holds the
handle plays nothing. The asset never has to clear the components that name
it.

**The audio manager is a resource** because the machine has exactly one
output device, and its rodio stream must stay open while any sink plays. A
resource lives as long as the world, which is the lifetime the stream needs.

**A component records the request; the system performs it.** A caller that
edits a component cannot reach the manager, so the requested action is kept
as a plain [`AudioCommand`](audio_command/enum.AudioCommand.md#rustdoc-item-4) field and carried out by [`audio_system`]. The
component stays `#[repr(C)]` plain data, which is what lets it survive a hot
reload and be read from C#.

### Spatial audio

A spatial sink places a sound at a 3D point. The transform's
[`translation`](pill_engine::TransformComponent::translation) is that point:
an emitter follows its entity's translation, and a listener's ears are
placed around the listener's own translation.

[`AudioListenerComponent`](audio_listener_component/struct.AudioListenerComponent.md#rustdoc-item-129) keeps its own `facing_degrees` instead of reading
the transform's quaternion, and [`ear_positions`](listener_geometry/fn.ear_positions.md#rustdoc-item-466) is the one function that
turns a listener's placement into the two points rodio pans against.

## Module contents

### Modules
- [`audio_command`](audio_command/index.md#rustdoc-item-125) — The [`AudioCommand`] enum: the action a source has been asked to take next.
- [`audio_listener_component`](audio_listener_component/index.md#rustdoc-item-185) — The [`AudioListenerComponent`] component: where the world is heard from.
- [`audio_load_queue`](audio_load_queue/index.md#rustdoc-item-229) — The [`AudioLoadQueue`] resource: sound bytes a project asks the module to
- [`audio_manager`](audio_manager/index.md#rustdoc-item-236) — The [`AudioManager`] resource: the output device and its sink pools.
- [`audio_source_component`](audio_source_component/index.md#rustdoc-item-458) — The [`AudioSourceComponent`] component: an entity that plays a sound.
- [`audio_system`](audio_system/index.md#rustdoc-item-465) — The per-frame system that drives playback.
- [`listener_geometry`](listener_geometry/index.md#rustdoc-item-467) — [`ear_positions`]: turns a listener's position and facing into its two ear
- [`sound`](sound/index.md#rustdoc-item-473) — The [`Sound`] asset: an audio file held as its encoded bytes.
- [`sound_type`](sound_type/index.md#rustdoc-item-705) — The [`SoundType`] enum: whether a sound plays at a position in the world.

### Functions
- [`init`](fn.init.md#rustdoc-item-724) — The artifact's one-time entry point.
- [`register`](fn.register.md#rustdoc-item-186) — Registers this module's components, resources and system with the engine.

## Re-exports

- [`pub use audio_command::AudioCommand;`](audio_command/enum.AudioCommand.md#rustdoc-item-4)
- [`pub use audio_listener_component::AudioListenerComponent;`](audio_listener_component/struct.AudioListenerComponent.md#rustdoc-item-129)
- [`pub use audio_load_queue::AudioLoadQueue;`](audio_load_queue/struct.AudioLoadQueue.md#rustdoc-item-192)
- [`pub use audio_manager::AudioManager;`](audio_manager/struct.AudioManager.md#rustdoc-item-124)
- [`pub use audio_manager::AudioSettings;`](audio_manager/struct.AudioSettings.md#rustdoc-item-249)
- [`pub use audio_manager::AudioSettingsAsset;`](audio_manager/struct.AudioSettingsAsset.md#rustdoc-item-247)
- [`pub use audio_manager::DEFAULT_AMBIENT_SINK_COUNT;`](audio_manager/constant.DEFAULT_AMBIENT_SINK_COUNT.md#rustdoc-item-231)
- [`pub use audio_manager::DEFAULT_SPATIAL_SINK_COUNT;`](audio_manager/constant.DEFAULT_SPATIAL_SINK_COUNT.md#rustdoc-item-232)
- [`pub use audio_manager::EAR_SEPARATION;`](audio_manager/constant.EAR_SEPARATION.md#rustdoc-item-233)
- [`pub use audio_source_component::AudioSourceComponent;`](audio_source_component/struct.AudioSourceComponent.md#rustdoc-item-123)
- [`pub use audio_source_component::NO_SINK;`](audio_source_component/constant.NO_SINK.md#rustdoc-item-391)
- [`pub use audio_system::audio_system;`](audio_system/fn.audio_system.md#rustdoc-item-461)
- [`pub use listener_geometry::ear_positions;`](listener_geometry/fn.ear_positions.md#rustdoc-item-466)
- [`pub use sound::Sound;`](sound/struct.Sound.md#rustdoc-item-228)
- [`pub use sound::SoundImportSettings;`](sound/struct.SoundImportSettings.md#rustdoc-item-534)
- [`pub use sound::SoundLoadError;`](sound/enum.SoundLoadError.md#rustdoc-item-480)
- [`pub use sound::SUPPORTED_AUDIO_FORMATS;`](sound/constant.SUPPORTED_AUDIO_FORMATS.md#rustdoc-item-469)
- [`pub use sound_type::SoundType;`](sound_type/enum.SoundType.md#rustdoc-item-252)
