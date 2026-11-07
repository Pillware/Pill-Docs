<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-375"></a>

# Module `pill_editor_shell_egui_editor::shell::spline_tool`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\spline_tool.rs:1`

The [`spline_tool`](#rustdoc-item-375) module: the Spline Tool panel and its re-seed modal.
The Spline Tool panel.

## Responsibilities

- [`spline_tool_panel`](fn.spline_tool_panel.md#rustdoc-item-367): list the entities that carry a spline, select one,
  show its values, and edit them through the same recorded commands the
  Inspector uses.
- [`reseed_window`](fn.reseed_window.md#rustdoc-item-373): the re-seed confirmation, a modal the shell owns and
  this panel draws.
- [`reseed_command`](fn.reseed_command.md#rustdoc-item-374): the write the confirmation applies when the person
  accepts the re-seed.

## Design

The panel is the example a module's editor crate is written against: it
names no type from another crate. A spline is found by the name of its
component (`archetype` holds the component names joined, as the Entities
tab shows them), and its values arrive as text through [`PanelContext`].
Nothing here can therefore outlive the module that registered it.

## Module contents

### Structs
- [`Reseed`](struct.Reseed.md#rustdoc-item-339) — The data behind the re-seed write: the entity it edits and the

### Functions
- [`field_element_index`](fn.field_element_index.md#rustdoc-item-371) — Returns the element index a `control_points[i]` row names:
- [`point_leaf`](fn.point_leaf.md#rustdoc-item-369) — Returns the field row of one control point's axis, where 0 is x, 1 is y and
- [`point_write`](fn.point_write.md#rustdoc-item-370) — Builds the write one control-point row queues when its drag value changes.
- [`reseed_body`](fn.reseed_body.md#rustdoc-item-372) — Draws the re-seed confirmation's body.
- [`reseed_command`](fn.reseed_command.md#rustdoc-item-374) — Builds the re-seed write for one entity.
- [`reseed_window`](fn.reseed_window.md#rustdoc-item-373) — Builds the request for the re-seed window. It is a modal, so the editor
- [`spline_point_count`](fn.spline_point_count.md#rustdoc-item-368) — Returns how many control points the selected spline's rows describe.
- [`spline_tool_panel`](fn.spline_tool_panel.md#rustdoc-item-367) — Draws the panel: the docked tab and the re-seed modal it opens.

### Constants
- [`POINTS_SHOWN`](constant.POINTS_SHOWN.md#rustdoc-item-336) — How many control-point rows the panel draws. A spline can hold more points
- [`RESEED_POINTS`](constant.RESEED_POINTS.md#rustdoc-item-334) — How many control points a re-seed leaves in use.
- [`RESEED_WINDOW`](constant.RESEED_WINDOW.md#rustdoc-item-333) — The re-seed confirmation's window id.
- [`SPLINE_COMPONENT`](constant.SPLINE_COMPONENT.md#rustdoc-item-332) — The spline component's short type name: the end of the name it registers
- [`SPLINE_PANEL_ID`](constant.SPLINE_PANEL_ID.md#rustdoc-item-331) — The panel's registry id.
- [`SPLINE_POINTS_FIELD`](constant.SPLINE_POINTS_FIELD.md#rustdoc-item-335) — The component field the control points live in.
