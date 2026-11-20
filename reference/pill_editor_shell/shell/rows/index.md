<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-490"></a>

# Module `pill_editor_shell::shell::rows`

Source: `editor\pill_editor_shell\src\shell\rows.rs:1`

The [`rows`](#rustdoc-item-490) module: the one label/control row every tab draws its fields
with.
The editor's shared row layout: a fixed label column, then the row's
control.

## Responsibilities

- [`label_column_width`](fn.label_column_width.md#rustdoc-item-481): the Inspector's label column, a share of the
  panel's width, so every field's control starts at one x however long its
  label is, and a wider panel gives the labels more room.
- [`ROW_LABEL_WIDTH`](constant.ROW_LABEL_WIDTH.md#rustdoc-item-473) and [`WIDE_ROW_LABEL_WIDTH`](constant.WIDE_ROW_LABEL_WIDTH.md#rustdoc-item-478): the fixed columns of the
  tabs whose labels do not scale with the panel, the same in every tab that
  uses them.
- [`row`](fn.row.md#rustdoc-item-485) and [`row_in`](fn.row_in.md#rustdoc-item-486): one label and the control beside it, the default
  way a field is drawn.
- [`label_cell`](fn.label_cell.md#rustdoc-item-482) and [`label_cell_in`](fn.label_cell_in.md#rustdoc-item-483): the label alone, for a row whose
  control is a nested run the tab builds by hand.
- [`label_gap`](fn.label_gap.md#rustdoc-item-484): the rest of the space after that label cell, which a tab
  drawing such a row adds itself.
- [`value_row`](fn.value_row.md#rustdoc-item-488) and [`value_row_in`](fn.value_row_in.md#rustdoc-item-489): a read-only row whose control is the
  value in monospace text.
- [`control_column`](fn.control_column.md#rustdoc-item-487): the column a row's control is drawn in, which never
  lets the control widen the row past the panel's edge.

## Design

A row is a layout, never a fill: no row paints a background, so the panel's
own surface shows through and rows are never striped.

The label cell has a fixed width and starts its text at the cell's left
edge. That keeps a panel's labels in one column, and a label too long for
its column is cut off inside it instead of pushing its neighbours aside.

A row leaves at least [`ROW_LABEL_GAP`](constant.ROW_LABEL_GAP.md#rustdoc-item-480) points between the label and its
control, whatever item spacing the panel uses. Rows place standard widgets
at their usual heights.

The Inspector's rows - component fields and asset settings alike - take
the proportional column, so its controls form one column. The tabs that
list whole setting names (Preferences, Systems, Statistics) keep the fixed
wide one ([`WIDE_ROW_LABEL_WIDTH`](constant.WIDE_ROW_LABEL_WIDTH.md#rustdoc-item-478)).

The globs below spell absolute paths on purpose: a generated patch crate
replays this file's top-level `use` lines, and a `super::`-relative glob
would have nothing to point at there.

## Module contents

### Functions
- [`control_column`](fn.control_column.md#rustdoc-item-487) — Draws a row's control in a column exactly as wide as the room left in the
- [`label_cell`](fn.label_cell.md#rustdoc-item-482) — Draws one row's label in the panel's label column
- [`label_cell_in`](fn.label_cell_in.md#rustdoc-item-483) — Draws one row's label in a label column `label_column_width` points wide.
- [`label_column_width`](fn.label_column_width.md#rustdoc-item-481) — The label column of a panel `ui` lays out: [`LABEL_COLUMN_FRACTION`] of
- [`label_gap`](fn.label_gap.md#rustdoc-item-484) — Adds the rest of the gap after a label cell, so the label and its control
- [`row`](fn.row.md#rustdoc-item-485) — Draws one label-and-control row in the panel's label column
- [`row_in`](fn.row_in.md#rustdoc-item-486) — Draws one label-and-control row whose label column is `label_column_width`
- [`value_row`](fn.value_row.md#rustdoc-item-488) — Draws one read-only row: the label, then `value` in monospace text.
- [`value_row_in`](fn.value_row_in.md#rustdoc-item-489) — Draws one read-only row whose label column is `label_column_width` points

### Constants
- [`CONTROL_MIN_WIDTH`](constant.CONTROL_MIN_WIDTH.md#rustdoc-item-475) — The narrowest a field's control gets, in points, once the panel has no
- [`LABEL_COLUMN_FRACTION`](constant.LABEL_COLUMN_FRACTION.md#rustdoc-item-476) — The share of a panel's width the Inspector's label column takes. The rest
- [`LABEL_COLUMN_MAX_WIDTH`](constant.LABEL_COLUMN_MAX_WIDTH.md#rustdoc-item-477) — The widest the Inspector's label column grows, in points, so a very wide
- [`LABEL_COLUMN_MIN_WIDTH`](constant.LABEL_COLUMN_MIN_WIDTH.md#rustdoc-item-474) — The narrowest the Inspector's label column gets, in points. A narrowing
- [`ROW_HEIGHT`](constant.ROW_HEIGHT.md#rustdoc-item-479) — The height in points of every row: its label cell and the slot its control
- [`ROW_LABEL_GAP`](constant.ROW_LABEL_GAP.md#rustdoc-item-480) — The least space in points a row keeps between its label and its control:
- [`ROW_LABEL_WIDTH`](constant.ROW_LABEL_WIDTH.md#rustdoc-item-473) — The fixed label column of the tabs that name fields without scaling with
- [`WIDE_ROW_LABEL_WIDTH`](constant.WIDE_ROW_LABEL_WIDTH.md#rustdoc-item-478) — The width in points of a row's label column where labels are whole setting
