<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-241"></a>

# Module `pill_editor_shell::shell::palette`

Source: `editor\pill_editor_shell\src\shell\palette.rs:1`

The [`palette`](#rustdoc-item-241) module: the searchable command popup.
The command palette: a searchable popup over every registered command.

## Responsibilities

- Draw the popup while it is open: the query field, the matching rows and
  the row the arrow keys select.
- Run the selected row through [`run_menu_action`](../bar/fn.run_menu_action.md#rustdoc-item-231), the same call a menu
  entry makes, so a palette run and a menu click run the same code.
- Report the popup's rectangle as an overlay region, so a click on the
  popup never becomes a scene pick.

## Design

The popup's state lives in `PaletteState`, which the shared session keeps.
The scripted channel sets a query, a run request or a close on it; this
file draws the result and writes back what the user picked. That is why a
test can drive the palette without sending key presses.

## Module contents

### Functions
- [`matches`](fn.matches.md#rustdoc-item-238) — The commands whose titles contain `query`, in the order the list has them.
- [`palette_window`](fn.palette_window.md#rustdoc-item-239) — Draw the palette when it is open and run the row it was asked to run.
- [`run_selected`](fn.run_selected.md#rustdoc-item-240) — Run the row at the palette's selection and close the popup.

### Constants
- [`PALETTE_ROWS`](constant.PALETTE_ROWS.md#rustdoc-item-235) — The largest number of matching rows the popup draws.
- [`PALETTE_TOP`](constant.PALETTE_TOP.md#rustdoc-item-236) — The distance from the top of the editor window to the popup's top edge, in
- [`PALETTE_WIDTH`](constant.PALETTE_WIDTH.md#rustdoc-item-237) — The popup's width, in logical points.
