<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-458"></a>

# Module `pill_audio::audio_source_component`

Source: `extensions\pill_audio\pill_audio\src\audio_source_component.rs:1`

The [`AudioSourceComponent`](struct.AudioSourceComponent.md#rustdoc-item-123) component: an entity that plays a sound.
The [`AudioSourceComponent`](struct.AudioSourceComponent.md#rustdoc-item-123) component: an entity that plays a sound.

## Responsibilities

- Declares the component that holds the intent to play, plus the playback
  state [`audio_system`](crate::audio_system) writes back to it.

## Design

Every field is plain data, so the component survives a hot reload and can
be mirrored into C#. The sound is held as a [`Handle<Sound>`], the same way
a mesh or a material is referenced. A handle is `#[repr(C)]` two-integer
data with no allocation, so it crosses the module boundary safely. It also
names one loaded sound, so playing it needs no path lookup.

## Module contents

### Structs
- [`AudioSourceComponent`](struct.AudioSourceComponent.md#rustdoc-item-123) — Plays a [`Sound`] from an entity.

### Functions
- [`__pill_register_AudioSourceComponent`](fn.__pill_register_AudioSourceComponent.md#rustdoc-item-457) — Registers this component into the world; used by the artifact-wide
- [`register`](fn.register.md#rustdoc-item-459) — Registers [`AudioSourceComponent`] with the world, field layout included.

### Constants
- [`NO_SINK`](constant.NO_SINK.md#rustdoc-item-391) — Sentinel for [`AudioSourceComponent::sink`] when no sink is held.
