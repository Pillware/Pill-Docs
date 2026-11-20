<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-595"></a>

# Module `pill_audio::audio_system`

Source: `extensions\pill_audio\modules\runtime\src\audio_system.rs:1`

The per-frame system that drives playback.
The per-frame system driving every [`AudioSourceComponent`](../audio_source_component/struct.AudioSourceComponent.md#rustdoc-item-126).

## Responsibilities

- Turns queued [`AudioLoadQueue`](../audio_load_queue/struct.AudioLoadQueue.md#rustdoc-item-255) bytes into [`Sound`](../sound/struct.Sound.md#rustdoc-item-293) assets.
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
- [`audio_system`](fn.audio_system.md#rustdoc-item-591) — Drives every [`AudioSourceComponent`] once per frame.
