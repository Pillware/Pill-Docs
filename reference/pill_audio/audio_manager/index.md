<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-236"></a>

# Module `pill_audio::audio_manager`

Source: `extensions\pill_audio\pill_audio\src\audio_manager.rs:1`

The [`AudioManager`](struct.AudioManager.md#rustdoc-item-124) resource: the output device and its sink pools.
The [`AudioManager`](struct.AudioManager.md#rustdoc-item-124) resource: the audio output device and its sink pools.

## Responsibilities

- Owns the rodio output stream. The stream must stay open while any sound
  plays through it, because dropping it stops every sound.
- Hands out a sink from one of two fixed pools, one pool per [`SoundType`](../sound_type/enum.SoundType.md#rustdoc-item-252),
  and takes it back when the sound using it ends.

## Design

There is exactly one audio device. A value a system builds per frame would
be dropped at the end of that frame, which silences the sound it just
started, so the device lives in a resource instead.

The sinks are pooled instead of created on demand. Creating one makes rodio
allocate a mixer channel, and doing that while a frame is being built would
put an allocation on the audio path, which must not stall. The size of a
pool is therefore also the limit on how many voices play at once.

## Module contents

### Structs
- [`AudioManager`](struct.AudioManager.md#rustdoc-item-124) — Owns the output stream and the pooled sinks that play through it.
- [`AudioSettings`](struct.AudioSettings.md#rustdoc-item-249) — The audio device's tunable settings, as the project's settings asset
- [`AudioSettingsAsset`](struct.AudioSettingsAsset.md#rustdoc-item-247) — The standalone asset a project tunes the audio device through.

### Constants
- [`DEFAULT_AMBIENT_SINK_COUNT`](constant.DEFAULT_AMBIENT_SINK_COUNT.md#rustdoc-item-231) — Sinks the manager creates for non-positional playback.
- [`DEFAULT_SPATIAL_SINK_COUNT`](constant.DEFAULT_SPATIAL_SINK_COUNT.md#rustdoc-item-232) — Sinks the manager creates for positional playback, and so the limit on how
- [`EAR_SEPARATION`](constant.EAR_SEPARATION.md#rustdoc-item-233) — Half the distance between the listener's ears, in world units.
