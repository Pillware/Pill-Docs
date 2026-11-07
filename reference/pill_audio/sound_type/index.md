<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-705"></a>

# Module `pill_audio::sound_type`

Source: `extensions\pill_audio\pill_audio\src\sound_type.rs:1`

The [`SoundType`](enum.SoundType.md#rustdoc-item-252) enum: whether a sound plays at a position in the world.
Defines [`SoundType`](enum.SoundType.md#rustdoc-item-252), which says whether a sound is positioned in the
world.

## Responsibilities

- Declares the two playback modes. Each mode selects which of the two sink
  pools a source draws from.

## Design

The source component, the manager and the system all name this type, so it
has a file of its own. The manager switches on it to pick one of the two
sink pools, so every playback operation reads it.

## Module contents

### Enums
- [`SoundType`](enum.SoundType.md#rustdoc-item-252) — How a sound is positioned relative to the listener.
