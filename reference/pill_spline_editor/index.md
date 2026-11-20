<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-168"></a>

# pill_spline_editor API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The spline extension's editor part: the tool that edits a `Spline`.

## Responsibilities

- Declares the `spline` tool: the `control point` and `tangent` kinds, the
  `Spline` coordinate frame, the rows its element context menu offers and
  the keys it answers.
- Reports a spline's points and tangents as elements, and writes a drag back
  into the component, so the editor's gizmo, frames, snapping and undo work
  on a spline exactly as they do on an entity's transform.
- Inserts and removes control points through the editor's recorded element
  commands, so one edit is one undo step.
- Registers the tool into the world's registry on every generation.

## Design

A spline is a component tool: it is offered while the selected entity
carries a [`Spline`], and it acts on that entity's element selection. The
tool owns the mapping between the component and the editor's plain element
vocabulary - an element id is a control point's index, or a tangent's index
offset by [`TANGENT_ID_BASE`](constant.TANGENT_ID_BASE.md#rustdoc-item-4) - so the editor never reads the component's
fields itself.

Points live in the spline's own space and the entity's transform places
them, which is why every element the tool reports and every drag it takes is
converted through that transform here. The tool is therefore also the one
place that knows a spline is edited in the entity's space, not the world's.

The stored tangents follow [`TangentMode`]: an auto spline refits them from
the points after every edit, so switching to a stored mode later starts from
the curve the reader was looking at, while an aligned or broken spline keeps
the tangents it has. Aligned mirrors a written tangent onto the point's
other side; broken leaves the two to part.

Registration takes a [`ToolRegistry`] rather than an engine, so a suite can
drive the tool's hooks without starting a host. The record it writes holds
owned strings and plain function pointers, which is what lets it outlive the
image that declared it and be replaced by a reload.

## Module contents

### Structs
- [`Placement`](struct.Placement.md#rustdoc-item-133) — An entity's transform, as the tool reads it: the spline's own space to the
- [`SplineTool`](struct.SplineTool.md#rustdoc-item-15) — The spline tool itself: a component tool over one entity's [`Spline`].

### Functions
- [`init`](fn.init.md#rustdoc-item-102) — The artifact's one-time entry point.
- [`insert_point_command`](fn.insert_point_command.md#rustdoc-item-127) — The recorded insert a menu row and the key both mean: a point one insert
- [`inverse_rotation`](fn.inverse_rotation.md#rustdoc-item-165) — The inverse of a unit quaternion: its rotation the other way round.
- [`point_index_of`](fn.point_index_of.md#rustdoc-item-128) — The control point an element id names, or `None` when it names a tangent.
- [`register`](fn.register.md#rustdoc-item-100) — Registers the tool against a host engine, which runs on every generation.
- [`register_into`](fn.register_into.md#rustdoc-item-98) — Registers the spline tool and its element hooks into `registry`.
- [`rotate`](fn.rotate.md#rustdoc-item-164) — Turns `vector` by the unit quaternion `rotation`, `x y z w` order.
- [`rotation_following`](fn.rotation_following.md#rustdoc-item-166) — The rotation that turns the world's `+Y` axis onto `direction`.
- [`spline_elements`](fn.spline_elements.md#rustdoc-item-106) — The elements `entity`'s spline has: one per control point and one per
- [`spline_frames`](fn.spline_frames.md#rustdoc-item-110) — The `Spline` frame: the gizmo's axes follow the tangent of the point the
- [`spline_insert`](fn.spline_insert.md#rustdoc-item-114) — Inserts one control point, answering the index it took.
- [`spline_key`](fn.spline_key.md#rustdoc-item-125) — The key hook: `i` appends a control point, the same edit the menu row makes.
- [`spline_kinds`](fn.spline_kinds.md#rustdoc-item-103) — The two kinds the tool exposes: the points the curve passes through and the
- [`spline_menu`](fn.spline_menu.md#rustdoc-item-120) — The rows the tool adds to the element context menu.
- [`spline_menu_run`](fn.spline_menu_run.md#rustdoc-item-122) — Runs one of the tool's menu rows.
- [`spline_press`](fn.spline_press.md#rustdoc-item-117) — Answers a press on one of the tool's elements.
- [`spline_remove`](fn.spline_remove.md#rustdoc-item-116) — Removes control points, answering how many went.
- [`spline_set_transforms`](fn.spline_set_transforms.md#rustdoc-item-112) — Writes a drag's world transforms into the spline.

### Constants
- [`FRAME_NAME`](constant.FRAME_NAME.md#rustdoc-item-5) — The name of the coordinate frame the gizmo offers while this tool is active.
- [`INSERT_DISTANCE`](constant.INSERT_DISTANCE.md#rustdoc-item-13) — How far past the last point a new one is placed, along the curve's end
- [`KEY_INSERT`](constant.KEY_INSERT.md#rustdoc-item-12) — The key that appends a control point after the selection.
- [`MENU_DELETE`](constant.MENU_DELETE.md#rustdoc-item-11) — The menu row that removes the selected control points.
- [`MENU_INSERT`](constant.MENU_INSERT.md#rustdoc-item-10) — The menu row that appends a control point after the selection.
- [`POINT_COLOR`](constant.POINT_COLOR.md#rustdoc-item-8) — The colour a control point's handle draws in.
- [`POINT_KIND`](constant.POINT_KIND.md#rustdoc-item-2) — The kind a control point is reported under.
- [`POINT_SIZE_PIXELS`](constant.POINT_SIZE_PIXELS.md#rustdoc-item-6) — How wide a control point's handle draws, in pixels.
- [`TANGENT_COLOR`](constant.TANGENT_COLOR.md#rustdoc-item-9) — The colour a tangent handle draws in.
- [`TANGENT_ID_BASE`](constant.TANGENT_ID_BASE.md#rustdoc-item-4) — The first element id a tangent handle uses.
- [`TANGENT_KIND`](constant.TANGENT_KIND.md#rustdoc-item-3) — The kind a tangent handle is reported under.
- [`TANGENT_SIZE_PIXELS`](constant.TANGENT_SIZE_PIXELS.md#rustdoc-item-7) — How wide a tangent handle draws, in pixels. Smaller than a point, so a
- [`TOOL_LABEL`](constant.TOOL_LABEL.md#rustdoc-item-1) — The label the toolbox row carries.
- [`TOOL_NAME`](constant.TOOL_NAME.md#rustdoc-item-0) — The name `tool spline` activates and the toolbox row shows.
