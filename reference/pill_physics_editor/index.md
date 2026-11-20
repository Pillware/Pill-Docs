<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-149"></a>

# pill_physics_editor API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The physics extension's editor part: the tool that edits a collider's shape.

## Responsibilities

- Declares the `collider` tool: one kind per handle family (a cuboid's six
  faces, a ball's radius, a capsule's or cylinder's radius and half height)
  and the elements each shape offers.
- Writes a drag back into the collider's `dimensions`, so the simulation
  moves with the shape the reader dragged.
- Registers itself into the tool registry on every generation.

## Design

In the style of Unity's "Edit Collider", the shape is edited by dragging the
handles drawn on it rather than by typing numbers: six face handles for a
cuboid, one radius handle for a ball, and a radius plus a half-height handle
for the two upright shapes. Every handle sits on the collider's own surface,
so what is dragged is what changes.

A drag arrives as the world transform the editor's gizmo produced. The tool
measures that place back into the collider's axes and writes the one number
the handle stands for: a face handle writes the half extent along its axis, a
radius handle writes a radius, and a height handle writes a half height. The
write goes into the component, and the simulation's own field-by-field sync
picks it up on the next step - no extra code, and no second copy of the
shape to keep in step.

The editor records the drag as one command, so one undo puts the collider
back the way it was.

Only the handles the current shape actually has are reported: a ball offers
its radius and nothing else, which is what stops a reader dragging a face
that does not exist.

## Module contents

### Structs
- [`ColliderTool`](struct.ColliderTool.md#rustdoc-item-15) — The collider tool itself: a component tool over one entity's collider.

### Functions
- [`collider_elements`](fn.collider_elements.md#rustdoc-item-132) — The handles the entity's collider offers, at the places the shape puts them.
- [`collider_kinds`](fn.collider_kinds.md#rustdoc-item-133) — The three handle families the tool exposes.
- [`collider_press`](fn.collider_press.md#rustdoc-item-145) — Answers a press on one of the tool's handles.
- [`collider_set_transforms`](fn.collider_set_transforms.md#rustdoc-item-143) — Writes a drag's world places into the collider's measurements.
- [`init`](fn.init.md#rustdoc-item-131) — The artifact's one-time entry point, which defers to [`register`].
- [`place`](fn.place.md#rustdoc-item-141) — A point `local` away from the collider's centre, turned with the entity.
- [`radius_handle`](fn.radius_handle.md#rustdoc-item-139) — The one radius handle a round shape offers, `radius` out along `+X`.
- [`register`](fn.register.md#rustdoc-item-129) — Registers the tool against a host engine, which runs on every generation.
- [`register_into`](fn.register_into.md#rustdoc-item-127) — Registers the tool and its element hooks into `registry`.
- [`rotate`](fn.rotate.md#rustdoc-item-148) — Turns `vector` by the unit quaternion `rotation`, `x y z w` order.

### Constants
- [`AXES`](constant.AXES.md#rustdoc-item-14) — The axes the shape maths reads, in the order the three slots of
- [`DIMENSION_COLOR`](constant.DIMENSION_COLOR.md#rustdoc-item-12) — The colour a radius or height handle draws in.
- [`DIMENSION_SIZE_PIXELS`](constant.DIMENSION_SIZE_PIXELS.md#rustdoc-item-10) — How wide a radius or height handle draws, in pixels.
- [`FACE_COLOR`](constant.FACE_COLOR.md#rustdoc-item-11) — The colour a face handle draws in.
- [`FACE_ID_BASE`](constant.FACE_ID_BASE.md#rustdoc-item-5) — The first element id a face handle uses: `0` to `5`, one per axis side.
- [`FACE_KIND`](constant.FACE_KIND.md#rustdoc-item-2) — The kind a cuboid's face handles are reported under.
- [`FACE_SIZE_PIXELS`](constant.FACE_SIZE_PIXELS.md#rustdoc-item-9) — How wide a face handle draws, in pixels.
- [`HEIGHT_ID`](constant.HEIGHT_ID.md#rustdoc-item-7) — The element id a half-height handle uses.
- [`HEIGHT_KIND`](constant.HEIGHT_KIND.md#rustdoc-item-4) — The kind a half-height handle is reported under.
- [`MINIMUM_EXTENT`](constant.MINIMUM_EXTENT.md#rustdoc-item-8) — The smallest measurement a drag may leave a shape with.
- [`RADIUS_ID`](constant.RADIUS_ID.md#rustdoc-item-6) — The element id a radius handle uses.
- [`RADIUS_KIND`](constant.RADIUS_KIND.md#rustdoc-item-3) — The kind a radius handle is reported under.
- [`TOOL_LABEL`](constant.TOOL_LABEL.md#rustdoc-item-1) — The label the toolbox row carries.
- [`TOOL_NAME`](constant.TOOL_NAME.md#rustdoc-item-0) — The name `tool collider` activates and the toolbox row shows.
