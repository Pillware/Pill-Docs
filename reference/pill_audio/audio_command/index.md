<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-125"></a>

# Module `pill_audio::audio_command`

Source: `extensions\pill_audio\pill_audio\src\audio_command.rs:1`

The [`AudioCommand`](enum.AudioCommand.md#rustdoc-item-4) enum: the action a source has been asked to take next.
The [`AudioCommand`](enum.AudioCommand.md#rustdoc-item-4) enum, which holds the action an audio source has been
asked to perform on the next frame.

## Responsibilities

- Declares the actions an
  [`AudioSourceComponent`](../audio_source_component/struct.AudioSourceComponent.md#rustdoc-item-123) stores, which the
  audio system carries out on the next frame.

## Design

A caller that changes a component cannot reach the
[`AudioManager`](../audio_manager/struct.AudioManager.md#rustdoc-item-124), so the requested action is kept in
the component as plain data. [`audio_system`](crate::audio_system) reads
the action and performs it, because the system holds both the sources and
the manager.

## Module contents

### Enums
- [`AudioCommand`](enum.AudioCommand.md#rustdoc-item-4) — An action an [`AudioSourceComponent`] has been asked to perform, carried
