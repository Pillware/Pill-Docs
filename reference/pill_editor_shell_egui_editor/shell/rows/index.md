<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-473"></a>

# Module `pill_editor_shell_egui_editor::shell::rows`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\rows.rs:1`

The [`rows`](#rustdoc-item-473) module: the one label/control row every tab draws its fields
with.
The editor's shared row layout: a fixed label column, then the row's
control.

## Responsibilities

- [`ROW_LABEL_WIDTH`](constant.ROW_LABEL_WIDTH.md#rustdoc-item-462) and [`WIDE_ROW_LABEL_WIDTH`](constant.WIDE_ROW_LABEL_WIDTH.md#rustdoc-item-463): the two label columns,
  the same in every tab that uses them, so the controls down a panel line
  up at one x.
- [`row`](fn.row.md#rustdoc-item-469) and [`row_in`](fn.row_in.md#rustdoc-item-470): one label and the control beside it, the default
  way a field is drawn.
- [`label_cell`](fn.label_cell.md#rustdoc-item-466) and [`label_cell_in`](fn.label_cell_in.md#rustdoc-item-467): the label alone, for a row whose
  control is a wrapped or nested run the tab builds by hand.
- [`label_gap`](fn.label_gap.md#rustdoc-item-468): the rest of the space after that label cell, which a tab
  drawing such a row adds itself.
- [`value_row`](fn.value_row.md#rustdoc-item-471) and [`value_row_in`](fn.value_row_in.md#rustdoc-item-472): a read-only row whose control is the
  value in monospace text.

## Design

A row is a layout, never a fill: no row paints a background, so the panel's
own surface shows through and rows are never striped.

The label cell has a fixed width and starts its text at the cell's left
edge. That keeps a panel's labels in one column, and a label too long for
its column is cut off inside it instead of pushing its neighbours aside.

A row leaves at least [`ROW_LABEL_GAP`](constant.ROW_LABEL_GAP.md#rustdoc-item-465) points between the label and its
control, whatever item spacing the panel uses. Rows place standard widgets
at their usual heights.

A panel whose labels are field names takes the compact column
([`ROW_LABEL_WIDTH`](constant.ROW_LABEL_WIDTH.md#rustdoc-item-462)); a panel whose labels are whole setting names takes
the wide one ([`WIDE_ROW_LABEL_WIDTH`](constant.WIDE_ROW_LABEL_WIDTH.md#rustdoc-item-463)).

The globs below spell absolute paths on purpose: a generated patch crate
replays this file's top-level `use` lines, and a `super::`-relative glob
would have nothing to point at there.

## Module contents

### Functions
- [`label_cell`](fn.label_cell.md#rustdoc-item-466) — Draws one row's label in the compact column, left-aligned and cut off at
- [`label_cell_in`](fn.label_cell_in.md#rustdoc-item-467) — Draws one row's label in a label column `label_column_width` points wide.
- [`label_gap`](fn.label_gap.md#rustdoc-item-468) — Adds the rest of the gap after a label cell, so the label and its control
- [`row`](fn.row.md#rustdoc-item-469) — Draws one label-and-control row in the compact column: `label` in the label
- [`row_in`](fn.row_in.md#rustdoc-item-470) — Draws one label-and-control row whose label column is `label_column_width`
- [`value_row`](fn.value_row.md#rustdoc-item-471) — Draws one read-only row: the label, then `value` in monospace text.
- [`value_row_in`](fn.value_row_in.md#rustdoc-item-472) — Draws one read-only row whose label column is `label_column_width` points

### Constants
- [`ROW_HEIGHT`](constant.ROW_HEIGHT.md#rustdoc-item-464) — The height in points of a row's label cell, about that of a standard
- [`ROW_LABEL_GAP`](constant.ROW_LABEL_GAP.md#rustdoc-item-465) — The least space in points a row keeps between its label and its control.
- [`ROW_LABEL_WIDTH`](constant.ROW_LABEL_WIDTH.md#rustdoc-item-462) — The width in points of a row's label column where labels are field names:
- [`WIDE_ROW_LABEL_WIDTH`](constant.WIDE_ROW_LABEL_WIDTH.md#rustdoc-item-463) — The width in points of a row's label column where labels are whole setting
