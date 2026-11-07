<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-333"></a>

# Module `pill_physics::debug_draw`

Source: `extensions\pill_physics\pill_physics\src\debug_draw.rs:1`

The collider outlines drawn while the settings document asks for them.
Draws every collider as an outline, for looking at what the simulation sees.

## Responsibilities

- Draws the shape of each simulated collider through the engine's
  [`DebugDraw`] collection, at the pose the entity's transform holds.
- Draws nothing at all unless the settings document turns outlines on.

## Module contents

### Functions
- [`draw_box`](fn.draw_box.md#rustdoc-item-342) — Draws the twelve edges of a box that is offset by the entity's pose.
- [`physics_debug_draw`](fn.physics_debug_draw.md#rustdoc-item-335) — Draws the outline of every collider while the settings document asks for it.
- [`rotation_of`](fn.rotation_of.md#rustdoc-item-344) — The entity's rotation, treating a value that is not usable as the identity.

### Constants
- [`OUTLINE_COLOR`](constant.OUTLINE_COLOR.md#rustdoc-item-332) — The green every collider outline is drawn in.
