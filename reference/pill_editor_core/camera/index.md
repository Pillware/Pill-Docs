<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-721"></a>

# Module `pill_editor_core::camera`

Source: `editor\pill_editor_core\src\camera.rs:1`

The scene viewports' orbit cameras and their navigation gestures.
The scene viewports' orbit cameras and the mouse gestures that drive them.

## Responsibilities

- [`OrbitCamera`]: one scene view's view state. It holds the pivot the
  camera orbits, its yaw, pitch and distance, and derives the eye position,
  the forward, right and up directions and the rotation from them.
- The four gestures a camera answers - [`OrbitCamera::orbit`],
  [`OrbitCamera::pan`], [`OrbitCamera::dolly`] and [`OrbitCamera::zoom`].
  Orbit stops the pitch just short of the poles, and dolly and zoom keep
  the distance inside its range.
- [`navigation_binding`]: which gesture a mouse button and the keyboard
  modifiers mean under a keymap preset. The default preset is Blender's.

## Design

The camera is plain arrays and scalars. The executable owns the pointer and
the surface, so a camera's numbers are testable with no window. The chords
live in this module instead of inside the event handlers, and the
preferences file only names the preset it wants. A viewport's camera lives
beside its window, so the scene views navigate independently, and only the
*active* viewport's camera receives a gesture.

## Module contents

### Structs
- [`Modifiers`](struct.Modifiers.md#rustdoc-item-821) — The keyboard modifiers held during a press, as plain booleans. The event
- [`OrbitCamera`](struct.OrbitCamera.md#rustdoc-item-727) — One scene viewport's orbit camera.

### Enums
- [`CameraButton`](enum.CameraButton.md#rustdoc-item-779) — The mouse buttons a navigation gesture can bind to.
- [`CameraNavigation`](enum.CameraNavigation.md#rustdoc-item-865) — One camera navigation gesture.

### Functions
- [`middle_button_table`](fn.middle_button_table.md#rustdoc-item-906) — The middle-button navigation Blender and Godot share: a plain drag orbits,
- [`navigation_binding`](fn.navigation_binding.md#rustdoc-item-904) — The gesture a press means under `preset`, or `None` when no camera gesture
- [`quaternion_product`](fn.quaternion_product.md#rustdoc-item-907) — The Hamilton product of two `[x, y, z, w]` quaternions: applying the

### Constants
- [`DEFAULT_DISTANCE`](constant.DEFAULT_DISTANCE.md#rustdoc-item-722) — The distance a new camera keeps from its pivot, in world units.
- [`DEFAULT_PITCH`](constant.DEFAULT_PITCH.md#rustdoc-item-720) — The downward pitch a new camera starts with, in radians.
- [`DOLLY_EXPONENT_PER_PIXEL`](constant.DOLLY_EXPONENT_PER_PIXEL.md#rustdoc-item-718) — How fast a dolly drag changes the distance. Every pixel scales the distance
- [`MAX_DISTANCE`](constant.MAX_DISTANCE.md#rustdoc-item-715) — The farthest the eye may go from its pivot, in world units.
- [`MAX_PITCH`](constant.MAX_PITCH.md#rustdoc-item-716) — The pitch stops just short of the poles. At exactly +-90 degrees the
- [`MIN_DISTANCE`](constant.MIN_DISTANCE.md#rustdoc-item-714) — The closest the eye may come to its pivot, in world units. The scene
- [`ORBIT_RADIANS_PER_PIXEL`](constant.ORBIT_RADIANS_PER_PIXEL.md#rustdoc-item-717) — How far one pixel of an orbit drag turns the view, in radians.
- [`ZOOM_RATIO_PER_LINE`](constant.ZOOM_RATIO_PER_LINE.md#rustdoc-item-719) — How much one wheel line moves the eye, as a distance ratio.
