<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-226"></a>

# Module `pill_editor_shell_egui_editor::shell::bar`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\bar.rs:1`

The [`bar`](#rustdoc-item-226) module: the menu bar's rows and the actions they run.
The menu bar: the menus built from the command rows, and the actions they run.

## Responsibilities

- The bar's menus and their items, drawn from the shell's mark and the frame's menu model.
- The actions a menu item runs (`File > Quit Editor`, the Window tab rows,
  the gizmo rows), all through [`run_menu_action`](fn.run_menu_action.md#rustdoc-item-223), which the command
  palette also calls.
- The About window the Help menu opens.

The globs below are absolute paths, so a patch crate resolves them too.

## Module contents

### Functions
- [`about_window`](fn.about_window.md#rustdoc-item-225) — Draws the About window: the mark, the editor's name and the shell's version.
- [`menu_bar`](fn.menu_bar.md#rustdoc-item-218) — Draws the menu bar above the dock: the pill mark, then Unity's six titles.
- [`menu_body`](fn.menu_body.md#rustdoc-item-221) — Draws one open menu: the rows its model returns, each row's rectangle in
- [`run_menu_action`](fn.run_menu_action.md#rustdoc-item-223) — Runs one menu item through the same calls the tabs, the toolbox and the

### Constants
- [`MENU_TITLE_GAP`](constant.MENU_TITLE_GAP.md#rustdoc-item-216) — The gap between two menu titles in the bar, in points.
