<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-495"></a>

# Module `pill_physics::debug_draw`

Source: `extensions\pill_physics\modules\runtime\src\debug_draw.rs:1`

The collider outlines drawn while the settings document asks for them.
Draws every collider as an outline, for looking at what the simulation sees.

## Responsibilities

- Draws the shape of each collider through the engine's gizmo pass, at the
  pose the entity's transform holds.
- Draws nothing at all unless the settings document turns outlines on, so
  the one switch works in every posture: an editor, a development host and a
  shipped build that turned it on.

## Design

The outline is a component gizmo: [`ColliderComponent`](../components/struct.ColliderComponent.md#rustdoc-item-366) declares it with
`#[pill(gizmo = ...)]`, and the engine draws it for every entity that
carries the component. An editor hides the type from its preferences; a
development host draws it on its game surface. Nothing here registers a
system, so a build that installs no gizmo pass pays nothing for the module.

## Module contents

### Functions
- [`draw_box`](fn.draw_box.md#rustdoc-item-498) — Draws the twelve edges of a box that is offset by the entity's pose.
- [`draw_collider_outline`](fn.draw_collider_outline.md#rustdoc-item-496) — Draws the outline of one collider while the settings document asks for it.
- [`draw_upright_shape`](fn.draw_upright_shape.md#rustdoc-item-500) — Draws a capsule or a cylinder standing on the entity's own y axis: a ring
- [`rotation_of`](fn.rotation_of.md#rustdoc-item-501) — The entity's rotation, treating a value that is not usable as the identity.

### Constants
- [`CAP_ARC_SEGMENTS`](constant.CAP_ARC_SEGMENTS.md#rustdoc-item-499) — How many straight lines approximate one half circle of a capsule's cap.
- [`OUTLINE_COLOR`](constant.OUTLINE_COLOR.md#rustdoc-item-494) — The green every collider outline is drawn in.
