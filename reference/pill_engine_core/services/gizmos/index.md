<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8697"></a>

# Module `pill_engine_core::services::gizmos`

Source: `engine\pill_engine_core\src\services\gizmos.rs:1`

The pass that draws every component's own gizmo, together with the registry
it walks and the selection it draws for.
Component gizmos: a component type's own read-only draw function, run by one
engine pass for every entity that carries the component.

## Responsibilities

- Hold what a component declares about its gizmo: the draw function, and
  whether it draws for every entity or only for the selected ones
  ([`GizmoDeclaration`]).
- Keep the gizmos registered in this world, which types an editor has hidden,
  and how many entities each one drew last frame ([`GizmoRegistry`]).
- Hold what an editor has selected and what sits under its pointer
  ([`GizmoSelection`]), so a gizmo knows whose it is without the engine
  naming any editor type.
- Give each draw call its entity's context ([`GizmoContext`]) and a buffer to
  draw lines, shapes and labels into ([`GizmoDraw`]).
- Install the single post-project pass that walks every registered gizmo
  ([`install`]).

## Design

A gizmo is read-only: its wrapper borrows the world, reads the component and
draws into a buffer, so no gizmo can change the world it describes. The
buffer is handed to [`DebugDraw`] after every gizmo ran, which is why the
pass is one system rather than one per component.

The pass is installed by a host, never by a game: a shipping build registers
the same declarations and pays nothing for them. Its lines are
[chrome](../debug_draw/struct.DebugStyle.md#rustdoc-item-8147) in an editor, so a game's own surface never
draws them, and plain debug lines in a development host, whose single
surface is a game's.

The registry holds owned strings and function pointers. The strings are
copies because a module's `&'static str` would outlive nothing once its image
is unmapped, and the pointers are replaced by the publishing image on every
reload before the old image goes away.

## Module contents

### Structs
- [`GizmoContext`](struct.GizmoContext.md#rustdoc-item-8747) — What one component's draw call knows about its entity.
- [`GizmoDeclaration`](struct.GizmoDeclaration.md#rustdoc-item-8877) — What one component type declares about its gizmo.
- [`GizmoDraw`](struct.GizmoDraw.md#rustdoc-item-8821) — The shapes one gizmo draws for one frame: lines, circles, boxes, points and
- [`GizmoEntry`](struct.GizmoEntry.md#rustdoc-item-8913) — One registered gizmo, owned by the world rather than by an image.
- [`GizmoFrame`](struct.GizmoFrame.md#rustdoc-item-8742) — What the pass gives every gizmo once per frame: whose gizmos draw and what
- [`GizmoRegistry`](struct.GizmoRegistry.md#rustdoc-item-4316) — Every gizmo registered in this world, the types an editor has hidden, and
- [`GizmoSelection`](struct.GizmoSelection.md#rustdoc-item-4319) — The entities an editor has selected and the one under its pointer.

### Enums
- [`GizmoChrome`](enum.GizmoChrome.md#rustdoc-item-9028) — What the pass's drawing is, which decides the surfaces that show it.
- [`GizmoWhen`](enum.GizmoWhen.md#rustdoc-item-8700) — Which entities a component's gizmo draws for.

### Functions
- [`cross_product`](fn.cross_product.md#rustdoc-item-8871)
- [`install`](fn.install.md#rustdoc-item-9064) — Installs the one pass that draws every registered gizmo.
- [`plane_axes`](fn.plane_axes.md#rustdoc-item-8868) — Two unit vectors spanning the plane whose normal is `normal`.
- [`rotate_vector`](fn.rotate_vector.md#rustdoc-item-8818) — Turns `vector` by a `(x, y, z, w)` quaternion.
- [`rotation_matrix`](fn.rotation_matrix.md#rustdoc-item-8817) — The row-major rotation matrix of a `(x, y, z, w)` quaternion.
- [`run_pass`](fn.run_pass.md#rustdoc-item-9065) — One pass: every visible gizmo draws into one buffer, which then reaches the
- [`scale_vector`](fn.scale_vector.md#rustdoc-item-8870)
- [`transform_point`](fn.transform_point.md#rustdoc-item-8816) — Turns a point in an entity's own space into world space through
- [`vector_length`](fn.vector_length.md#rustdoc-item-8869)

### Type aliases
- [`GizmoDrawEntry`](type.GizmoDrawEntry.md#rustdoc-item-8872) — The signature a component's generated gizmo wrapper has.

### Constants
- [`BOX_EDGES`](constant.BOX_EDGES.md#rustdoc-item-8867) — The twelve edges of a box, as index pairs into its eight corners.
- [`CIRCLE_SEGMENTS`](constant.CIRCLE_SEGMENTS.md#rustdoc-item-8866) — Segments a circle is drawn with.
- [`PASS_ORDER`](constant.PASS_ORDER.md#rustdoc-item-8696) — The pass's order within the post-project phase.
- [`SYSTEM_NAME`](constant.SYSTEM_NAME.md#rustdoc-item-8695) — The registration name of the one gizmo pass.
