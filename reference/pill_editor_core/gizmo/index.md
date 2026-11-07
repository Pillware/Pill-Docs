<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2489"></a>

# Module `pill_editor_core::gizmo`

Source: `editor\pill_editor_core\src\gizmo.rs:1`

Transform gizmos: handle geometry, the drag calculations and snapping.
Transform gizmos: handle geometry, drag math, picking and snapping.

## Responsibilities

- Name the tool's modes ([`GizmoMode`]: translate, rotate, scale) and
  spaces ([`GizmoSpace`]: world, local), and the settings a toolbar edits
  ([`GizmoSettings`]).
- Build the handle geometry a renderer draws, one handle id per axis of the
  active mode ([`build_geometry`]).
- Answer which handle a cursor ray is over ([`hit_test`]) and build the
  guides a drag draws ([`axis_guide`], [`dotted_segments`]).
- Do the drag math: project a cursor ray onto the dragged axis or rotation
  plane, and snap the result to the configured step.
- Carry the editable-field table ([`RESOURCE_FIELDS`]) that the Inspector's
  rows and `SetResourceField` both use.

## Design

Everything here is a pure function over plain arrays, so a drag can be
tested without a renderer or a window. The editor executable owns the
camera and the world; this module only does the arithmetic.

Handle ids are stable numbers: `1..=3` for translate axes, `4..=6` for
translation planes, `11..=13` for rotate rings and `21..=23` for scale
axes. A pick's `Handle(id)` decodes through [`handle_kind`] into the mode
and the axis it belongs to (or the axis pair a plane spans), so the
renderer never needs to know what a handle means.

## Module contents

### Structs
- [`GizmoGeometry`](struct.GizmoGeometry.md#rustdoc-item-4127) — The handle geometry one gizmo draws.
- [`GizmoSettings`](struct.GizmoSettings.md#rustdoc-item-1832) — The tool's settings: what it edits, in which space, and how it snaps.
- [`GizmoState`](struct.GizmoState.md#rustdoc-item-3737) — The gizmo tool's state: the settings the editor draws and drags with.
- [`HandleStates`](struct.HandleStates.md#rustdoc-item-4036) — The handle the pointer is over and the handle a drag holds.
- [`ResourceField`](struct.ResourceField.md#rustdoc-item-3780) — One editable field of the gizmo settings.

### Enums
- [`GizmoMode`](enum.GizmoMode.md#rustdoc-item-1738) — Which transform a gizmo edits.
- [`GizmoSpace`](enum.GizmoSpace.md#rustdoc-item-1740) — What "the axes" mean: the world's, or the entity's own.
- [`HandleKind`](enum.HandleKind.md#rustdoc-item-3981) — What a handle id addresses.
- [`HandleState`](enum.HandleState.md#rustdoc-item-4038) — The visual state of one handle.

### Functions
- [`add`](fn.add.md#rustdoc-item-4187) — `left + right`, per component.
- [`axis_angle_quaternion`](fn.axis_angle_quaternion.md#rustdoc-item-4176) — Returns the `[x, y, z, w]` quaternion that turns by `radians` around
- [`axis_guide`](fn.axis_guide.md#rustdoc-item-4180) — Returns the two ends of the guide line a single-axis drag draws: `span`
- [`axis_handle`](fn.axis_handle.md#rustdoc-item-3972) — The handle one axis of a mode is pickable by.
- [`build_geometry`](fn.build_geometry.md#rustdoc-item-4166) — Builds the handles of `mode` around `origin`, one per basis vector, each
- [`build_geometry_styled`](fn.build_geometry_styled.md#rustdoc-item-4165) — Builds the handles of `mode` around `origin`, one per basis vector, each as
- [`check_resource`](fn.check_resource.md#rustdoc-item-3818) — Refuse any resource but the gizmo state, naming it in the message.
- [`closest_axis_point`](fn.closest_axis_point.md#rustdoc-item-4171) — Returns how far along `axis` the point closest to the cursor ray lies,
- [`cross`](fn.cross.md#rustdoc-item-4191) — The cross product.
- [`cube_triangles`](fn.cube_triangles.md#rustdoc-item-4170) — Twelve triangles forming a small cube around `center`.
- [`default_mode`](fn.default_mode.md#rustdoc-item-3967)
- [`default_rotate_step`](fn.default_rotate_step.md#rustdoc-item-3970)
- [`default_scale_step`](fn.default_scale_step.md#rustdoc-item-3971)
- [`default_space`](fn.default_space.md#rustdoc-item-3968)
- [`default_translate_step`](fn.default_translate_step.md#rustdoc-item-3969)
- [`distance`](fn.distance.md#rustdoc-item-4193) — The distance between two points.
- [`dot`](fn.dot.md#rustdoc-item-4190) — The dot product.
- [`dotted_segments`](fn.dotted_segments.md#rustdoc-item-4182) — Builds the dashes of a dotted line from `start` to `end`.
- [`field_u32`](fn.field_u32.md#rustdoc-item-3819) — A `U32` field value, accepting the wider unsigned forms too.
- [`handle_axis`](fn.handle_axis.md#rustdoc-item-4024) — Which mode and axis a handle belongs to; `None` for an id this module never
- [`handle_kind`](fn.handle_kind.md#rustdoc-item-4023) — What a handle id addresses; `None` for an id this module never issues.
- [`head_triangles`](fn.head_triangles.md#rustdoc-item-4169) — Builds an arrow head at `tip`: a square base 80% of the way along `axis`,
- [`hit_test`](fn.hit_test.md#rustdoc-item-4183) — Returns the handle under a cursor ray: the nearest one whose line passes
- [`mode_discriminant`](fn.mode_discriminant.md#rustdoc-item-3821) — The `U32` discriminant of a mode, in declaration order.
- [`mode_from_discriminant`](fn.mode_from_discriminant.md#rustdoc-item-3822) — The mode a discriminant names.
- [`normalize`](fn.normalize.md#rustdoc-item-4192) — `vector` scaled to unit length; `None` for a zero-length vector.
- [`plane_angle`](fn.plane_angle.md#rustdoc-item-4173) — Returns the angle of `point` around `axis`, in radians, measured in the
- [`plane_axes`](fn.plane_axes.md#rustdoc-item-4186) — Two unit vectors spanning the plane whose normal is `normal`.
- [`plane_color`](fn.plane_color.md#rustdoc-item-4122) — The colour a plane square draws in: its two axes' colours averaged, at
- [`plane_coordinates`](fn.plane_coordinates.md#rustdoc-item-4178) — Returns `point`'s coordinates along a plane's two axes, measured from
- [`plane_handle`](fn.plane_handle.md#rustdoc-item-3974) — The handle one translation plane is pickable by: the square between its
- [`plane_square`](fn.plane_square.md#rustdoc-item-4167) — Builds one translation plane's square as two triangles.
- [`ray_plane_point`](fn.ray_plane_point.md#rustdoc-item-4172) — Where the cursor ray meets the plane through `origin` whose normal is
- [`ray_segment_distance`](fn.ray_segment_distance.md#rustdoc-item-4184) — Returns how far along the ray, and how far away from it, the ray comes
- [`ray_triangle_intersection`](fn.ray_triangle_intersection.md#rustdoc-item-4185) — Returns how far along the ray it hits the triangle `corners`, using the
- [`release_edits`](fn.release_edits.md#rustdoc-item-4194) — Returns the edits a released drag records, as `(index, value)` pairs in
- [`resource_field`](fn.resource_field.md#rustdoc-item-3817) — The table's row for `field_name`, when it has one.
- [`resource_field_value`](fn.resource_field_value.md#rustdoc-item-3815) — Reads one editable field of the gizmo settings: the reading half of the
- [`ring_point`](fn.ring_point.md#rustdoc-item-4168) — One point of a rotation ring.
- [`rotate_vector`](fn.rotate_vector.md#rustdoc-item-4177) — Rotate `vector` by the `[x, y, z, w]` quaternion.
- [`scale`](fn.scale.md#rustdoc-item-4189) — `vector * factor`.
- [`scale_handle_lengths`](fn.scale_handle_lengths.md#rustdoc-item-4179) — Returns the handle length for each axis during a scale drag.
- [`set_resource_field`](fn.set_resource_field.md#rustdoc-item-3814) — Sets one field of the gizmo settings from a field value and returns the
- [`snap_value`](fn.snap_value.md#rustdoc-item-4175) — Round `value` to the nearest multiple of `step`; a non-positive step
- [`space_discriminant`](fn.space_discriminant.md#rustdoc-item-3823) — The `U32` discriminant of a space, in declaration order.
- [`space_from_discriminant`](fn.space_from_discriminant.md#rustdoc-item-3824) — The space a discriminant names.
- [`styled_color`](fn.styled_color.md#rustdoc-item-4121) — `base_color` adjusted for the state `handle` is in.
- [`sub`](fn.sub.md#rustdoc-item-4188) — `left - right`, per component.
- [`swap_f32`](fn.swap_f32.md#rustdoc-item-3820) — Swap one `f32` field and hand back its previous value.
- [`wrap_angle`](fn.wrap_angle.md#rustdoc-item-4174) — Wraps an angle difference into `(-PI, PI]`.

### Type aliases
- [`GizmoLine`](type.GizmoLine.md#rustdoc-item-4123) — One gizmo line: its two endpoints, its colour, and its handle id.
- [`GizmoTriangle`](type.GizmoTriangle.md#rustdoc-item-4124) — One gizmo triangle: its three points, its colour, and its handle id.

### Constants
- [`ACTIVE_DIM`](constant.ACTIVE_DIM.md#rustdoc-item-4028) — The factor the active handle's colour is multiplied by.
- [`AXES`](constant.AXES.md#rustdoc-item-4025) — The world axes, in handle order.
- [`AXIS_COLORS`](constant.AXIS_COLORS.md#rustdoc-item-4026) — The colour one axis draws in: X red, Y green, Z blue.
- [`DOTTED_SEGMENTS_MAX`](constant.DOTTED_SEGMENTS_MAX.md#rustdoc-item-4181) — The most dashes [`dotted_segments`] builds for one line.
- [`HOVER_BRIGHTEN`](constant.HOVER_BRIGHTEN.md#rustdoc-item-4027) — The factor a hovered handle's colour is multiplied by.
- [`PLANE_ALPHA`](constant.PLANE_ALPHA.md#rustdoc-item-4029) — The plane squares' alpha: translucent, so the axis arrows behind them stay
- [`PLANE_HALF`](constant.PLANE_HALF.md#rustdoc-item-4031) — Half of a plane square's side, as a fraction of the gizmo's length.
- [`PLANE_OFFSET`](constant.PLANE_OFFSET.md#rustdoc-item-4030) — Where a plane square's centre sits along both of its axes, as a fraction
- [`PLANE_PAIRS`](constant.PLANE_PAIRS.md#rustdoc-item-3973) — The three translation planes, as the axis pairs they span.
- [`RESOURCE_FIELDS`](constant.RESOURCE_FIELDS.md#rustdoc-item-3816) — Every editable field, in the order the Inspector lists them.
- [`RESOURCE_NAME`](constant.RESOURCE_NAME.md#rustdoc-item-3775) — The name [`GizmoState`] registers under, which a `SetResourceField`
- [`SCALE_HANDLE_MAX_RATIO`](constant.SCALE_HANDLE_MAX_RATIO.md#rustdoc-item-4032) — The largest factor a scale handle may grow to during a drag. Past it the
- [`SCALE_HANDLE_MIN_RATIO`](constant.SCALE_HANDLE_MIN_RATIO.md#rustdoc-item-4033) — The smallest factor a scale handle may shrink to during a drag. Below it
