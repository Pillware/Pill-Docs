<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-229"></a>

# Module `pill_audio::audio_load_queue`

Source: `extensions\pill_audio\pill_audio\src\audio_load_queue.rs:1`

The [`AudioLoadQueue`](struct.AudioLoadQueue.md#rustdoc-item-192) resource: sound bytes a project asks the module to
load.
A queue through which a project asks the audio extension to load sound bytes.

## Responsibilities

- Carry encoded sound bytes from a project to the running playback DLL,
  which turns them into [`Sound`](../sound/struct.Sound.md#rustdoc-item-228) assets on its next frame.
- Keep one pending load per playback name, with the newest bytes winning.

## Design

[`Sound`](../sound/struct.Sound.md#rustdoc-item-228) is a shared asset type, so a project that links the
crate can also register a sound itself and take the handle directly. The
queue is for bytes a project hands over at runtime without naming the type:
the module drains it, so the project never has to know when loading happens.

## Module contents

### Structs
- [`AudioLoadQueue`](struct.AudioLoadQueue.md#rustdoc-item-192) — Queued sound loads, keyed by playback name, waiting for the audio system.
