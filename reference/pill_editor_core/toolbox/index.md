<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10693"></a>

# Module `pill_editor_core::toolbox`

Source: `editor\pill_editor_core\src\toolbox.rs:1`

The floating viewport toolbox: rows, geometry and the edits its rows queue.
The floating viewport toolbox: its rows, its geometry and the commands a
click on a row queues.

## Responsibilities

- Name the toolbox's rows ([`ToolboxItem`]: the three gizmo tools, one row
  per component tool the selection is offered, the space toggle, the
  snapping toggle and the two switches) and the order the panel stacks them
  in ([`rows`], and [`TOOLBOX_ITEMS`] for the rows every editor has).
- The row lists the other surfaces share with the panel: the three tools
  ([`TOOL_ROWS`]) and the two spaces with their labels and icons
  ([`SPACE_ROWS`], [`SpaceRow`]), plus the edit builders for one tool and
  one space ([`mode_command`], [`space_command`]).
- The vocabulary a row reads: the label it shows for the current state
  ([`ToolboxItem::label`]), its icon ([`ToolboxItem::icon`]), whether it
  looks active ([`ToolboxItem::active`]), its name in the log
  ([`ToolboxItem::name`]) and the command a click queues
  ([`ToolboxItem::command`]).
- The panel's geometry: where it starts inside a viewport
  ([`default_origin`]), how a drag is kept inside the viewport
  ([`clamped_origin`]), and the rectangles of the panel, its drag handle and
  each row ([`panel_rect`], [`handle_rect`], [`item_rect`]).

## Design

The file is plain constants and pure functions over egui's geometry types.
Their numbers are the ones the shell draws with, so a row's click target,
the region that must never become a scene pick and the drag's limit all
come from here. A row queues the same edit the shortcuts, the viewport menu
and the Preferences tab queue: `SetGizmoTool` for the tools and the
snapping, `CycleGizmoSpace` for the space row - which walks World, Local and
then the active tool's own frames - `SetGrid` and `SetGizmos` for the two
switches, and `SetTool` for a component tool's row.

Every row list is a function of the state, because which component tools a
selection offers changes as the selection moves: [`rows`] is the one order
the panel draws in and its length is what the geometry is sized from.

## Module contents

### Structs
- [`SpaceRow`](struct.SpaceRow.md#rustdoc-item-10652) — One gizmo space as the viewport menu and the Preferences tab draw it: the
- [`ToolboxState`](struct.ToolboxState.md#rustdoc-item-7533) — What the toolbox's rows show: the gizmo's settings, the tool frame it is

### Enums
- [`ToolboxItem`](enum.ToolboxItem.md#rustdoc-item-7532) — One row of the floating toolbox.

### Functions
- [`clamped_origin`](fn.clamped_origin.md#rustdoc-item-10544) — Returns the origin a drag may use: `requested_origin` moved back inside
- [`default_origin`](fn.default_origin.md#rustdoc-item-10543) — Returns where the panel starts before it is dragged: one margin in from the
- [`handle_rect`](fn.handle_rect.md#rustdoc-item-10541) — Returns the drag handle's rectangle: the panel's top strip. It is the one
- [`item_rect`](fn.item_rect.md#rustdoc-item-10542) — Returns one row's rectangle inside the panel, by its place in [`rows`].
- [`mode_command`](fn.mode_command.md#rustdoc-item-10692) — Builds the edit that selects one tool: `SetGizmoTool` with the mode set and
- [`panel_rect`](fn.panel_rect.md#rustdoc-item-10540) — Returns the panel's rectangle when its top-left corner sits at `origin`.
- [`panel_size`](fn.panel_size.md#rustdoc-item-10539) — Returns the panel's size in points for `row_count` rows: the handle, the
- [`rows`](fn.rows.md#rustdoc-item-9608) — Every row the panel draws for one state, in stacking order: the three
- [`space_command`](fn.space_command.md#rustdoc-item-10605) — Builds the edit that switches the gizmo to one space: `SetGizmoTool` with

### Constants
- [`SPACE_ROWS`](constant.SPACE_ROWS.md#rustdoc-item-10691) — Both spaces, in the order the viewport menu and the Preferences tab list
- [`TOGGLE_ROWS`](constant.TOGGLE_ROWS.md#rustdoc-item-10647) — The four rows below the tools: the space toggle, the snapping toggle, the
- [`TOOL_ROWS`](constant.TOOL_ROWS.md#rustdoc-item-10603) — The three tools in the order the viewport menu and the Preferences tab
- [`TOOLBOX_HANDLE_HEIGHT`](constant.TOOLBOX_HANDLE_HEIGHT.md#rustdoc-item-10535) — The height of the drag handle, in points: the full-width strip along the
- [`TOOLBOX_ITEM_GAP`](constant.TOOLBOX_ITEM_GAP.md#rustdoc-item-10536) — The gap, in points, between the handle and the first row, and between two
- [`TOOLBOX_ITEM_HEIGHT`](constant.TOOLBOX_ITEM_HEIGHT.md#rustdoc-item-10537) — The height of one row, in points. Each row is an ordinary button drawn at
- [`TOOLBOX_ITEMS`](constant.TOOLBOX_ITEMS.md#rustdoc-item-10646) — Every row an editor always draws, in the order [`rows`] keeps them: the
- [`TOOLBOX_MARGIN`](constant.TOOLBOX_MARGIN.md#rustdoc-item-10534) — The gap between the panel and the viewport's edges, in points. The starting
- [`TOOLBOX_PADDING`](constant.TOOLBOX_PADDING.md#rustdoc-item-10538) — The inset, in points, between a row and the panel's sides, and between the
- [`TOOLBOX_WIDTH`](constant.TOOLBOX_WIDTH.md#rustdoc-item-10533) — The panel's width, in points. It leaves room for one button across the
