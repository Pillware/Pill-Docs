<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-467"></a>

# Module `pill_audio::listener_geometry`

Source: `extensions\pill_audio\pill_audio\src\listener_geometry.rs:1`

[`ear_positions`](fn.ear_positions.md#rustdoc-item-466): turns a listener's position and facing into its two ear
points.
Where a listener's ears sit in the world.

## Responsibilities

- Turns a listener's position and facing into the two ear points rodio pans
  a positional sound between.

## Design

The geometry is a free function instead of a step inside the audio system,
so the tests need no audio device. A change in how a listener's placement is
stored also touches this one function. The facing is an angle in the XY
plane, so the ears sit either side of that direction in the same plane and
keep the listener's Z coordinate.

## Module contents

### Functions
- [`ear_positions`](fn.ear_positions.md#rustdoc-item-466) — Returns the two points where a listener's ears sit.
