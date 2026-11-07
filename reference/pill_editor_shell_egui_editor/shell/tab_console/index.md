<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-237"></a>

# Module `pill_editor_shell_egui_editor::shell::tab_console`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_console.rs:1`

The [`tab_console`](#rustdoc-item-237) module: the Console tab's filters and rows.
The Console tab: the engine's and the project's recent log lines.

## Responsibilities

- Draw the filter row - the level buttons, the channel switch and the
  search field - and the rows the filters leave.
- Edit the filters in the shared session. The executable applies them to
  the history on the next frame, so the tab never touches the world.
- Report how many lines the filters leave and how many the history holds.

## Design

The rows come from `ConsoleView` in the frame's snapshot: the newest
`CONSOLE_VIEW_ROWS` lines the filters leave, already owned strings. The
tab only reads that snapshot and edits the session's filter copy, so
drawing it never needs the history the executable keeps.

## Module contents

### Functions
- [`console_level_colour`](fn.console_level_colour.md#rustdoc-item-236) — Returns the colour of a level's tag: the palette's log colours, the same
- [`console_tab`](fn.console_tab.md#rustdoc-item-235) — Draws the Console tab: the filter row and the counts line above, the

### Constants
- [`CONSOLE_LEVELS`](constant.CONSOLE_LEVELS.md#rustdoc-item-234) — The levels the filter row offers, lowest first, each as a `(level, label)`
