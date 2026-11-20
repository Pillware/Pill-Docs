<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-234"></a>

# Module `pill_editor_shell::shell::bar`

Source: `editor\pill_editor_shell\src\shell\bar.rs:1`

The [`bar`](#rustdoc-item-234) module: the menu bar's rows and the actions they run.
The menu bar: the menus built from the command rows, and the actions they run.

## Responsibilities

- The bar's menus and their items, drawn from the shell's mark and the frame's menu model.
- The actions a menu item runs (`File > Quit Editor`, the Window tab rows,
  the gizmo rows), all through [`run_menu_action`](fn.run_menu_action.md#rustdoc-item-231), which the command
  palette also calls.
- The About window the Help menu opens.

The globs below are absolute paths, so a patch crate resolves them too.

## Module contents

### Functions
- [`about_window`](fn.about_window.md#rustdoc-item-233) — Draws the About window: the mark, the editor's name and the shell's version.
- [`menu_bar`](fn.menu_bar.md#rustdoc-item-223) — Draws the menu bar above the dock: the pill mark, then Unity's six titles.
- [`menu_body`](fn.menu_body.md#rustdoc-item-229) — Draws one open menu: the rows its model returns, each row's rectangle in
- [`play_button`](fn.play_button.md#rustdoc-item-227) — Draws one toolbar button and reports whether it was pressed.
- [`play_toolbar`](fn.play_toolbar.md#rustdoc-item-226) — Draws the play controls centred over the menu bar: Play or Stop, then
- [`run_menu_action`](fn.run_menu_action.md#rustdoc-item-231) — Runs one menu item through the same calls the tabs, the toolbox and the
- [`run_play_control`](fn.run_play_control.md#rustdoc-item-228) — Queues one play control's command, unrecorded, and logs the press.

### Constants
- [`MENU_TITLE_GAP`](constant.MENU_TITLE_GAP.md#rustdoc-item-218) — The gap between two menu titles in the bar, in points.
- [`PLAY_BUTTON_GAP`](constant.PLAY_BUTTON_GAP.md#rustdoc-item-219) — The gap between two play-toolbar buttons, in points.
- [`PLAY_TOOLBAR_TOP`](constant.PLAY_TOOLBAR_TOP.md#rustdoc-item-221) — How far below the window's top the play toolbar sits, in points. The bar is
