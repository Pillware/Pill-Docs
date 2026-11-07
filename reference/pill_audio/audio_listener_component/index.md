<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-185"></a>

# Module `pill_audio::audio_listener_component`

Source: `extensions\pill_audio\pill_audio\src\audio_listener_component.rs:1`

The [`AudioListenerComponent`](struct.AudioListenerComponent.md#rustdoc-item-129) component: where the world is heard from.
The [`AudioListenerComponent`](struct.AudioListenerComponent.md#rustdoc-item-129) component: where the world is heard from.

## Responsibilities

- Declares the component that marks the entity whose position the listener
  hears from.

## Design

The listener stores its own facing angle rather than reading the
transform's rotation. A transform keeps its rotation as a quaternion, and
panning needs only a single yaw angle, so
[`facing_degrees`](struct.AudioListenerComponent.md#rustdoc-item-127) holds it.

## Module contents

### Structs
- [`AudioListenerComponent`](struct.AudioListenerComponent.md#rustdoc-item-129) — Marks the entity whose position the listener hears from.

### Functions
- [`__pill_register_AudioListenerComponent`](fn.__pill_register_AudioListenerComponent.md#rustdoc-item-183) — Registers this component into the world; used by the artifact-wide
- [`register`](fn.register.md#rustdoc-item-187) — Registers [`AudioListenerComponent`] with the world, including its field
