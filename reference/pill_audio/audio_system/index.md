<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-465"></a>

# Module `pill_audio::audio_system`

Source: `extensions\pill_audio\pill_audio\src\audio_system.rs:1`

The per-frame system that drives playback.
The per-frame system driving every [`AudioSourceComponent`](../audio_source_component/struct.AudioSourceComponent.md#rustdoc-item-123).

## Responsibilities

- Turns queued [`AudioLoadQueue`](../audio_load_queue/struct.AudioLoadQueue.md#rustdoc-item-192) bytes into [`Sound`](../sound/struct.Sound.md#rustdoc-item-228) assets.
- Places the active listener's ears.
- Carries out each source's pending [`AudioCommand`](../audio_command/enum.AudioCommand.md#rustdoc-item-4).
- Moves each playing spatial source's emitter to its entity, and returns
  sinks whose sound has ended to the pool.

## Design

Takes its state as ordinary system parameters instead of `&mut Engine`.
The scheduler reads the access pattern from the signature, so it never
runs this system at the same time as another one that touches the same
resources.

## Module contents

### Functions
- [`audio_system`](fn.audio_system.md#rustdoc-item-461) — Drives every [`AudioSourceComponent`] once per frame.
