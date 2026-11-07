<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-466"></a>

# Function `pill_audio::listener_geometry::ear_positions`

```rust
pub fn ear_positions(listener_translation: [f32; 3], facing_degrees: f32) -> ([f32; 3], [f32; 3]);
```

Source: `extensions\pill_audio\pill_audio\src\listener_geometry.rs:31`

Returns the two points where a listener's ears sit.

`listener_translation` is the listener's world position, and
`facing_degrees` is the direction it faces, in degrees counter-clockwise
from +X. Each ear sits `EAR_SEPARATION` away from the listener, on the line
at right angles to that direction. The returned pair is `(left, right)`,
the two points rodio pans a sound between, and both keep the listener's Z
coordinate.
