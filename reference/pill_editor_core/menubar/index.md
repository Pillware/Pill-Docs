<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7527"></a>

# Module `pill_editor_core::menubar`

Source: `editor\pill_editor_core\src\menubar.rs:1`

The editor's menu bar: its titles, metrics and the items each menu holds.
The editor's menu bar: the strip above the dock, the mark on its left,
the menu titles and the rows each menu shows.

## Responsibilities

- The bar's vocabulary: the menu titles in their order, and the metrics
  the shell and the tests share (the bar's height, the mark's size, and
  the gaps before and after the mark).
- The mark's rectangle inside a bar of a given height ([`mark_rect`]).
- The menus' contents as plain data: one row per registered command whose
  menu path names the menu, and the action a click asks for
  ([`MenuAction`]).

Nothing here draws. The shell walks [`Menu::ALL`] and egui lays the
buttons out, so the bar follows the theme and the font metrics.

## Module contents

### Structs
- [`MenuView`](struct.MenuView.md#rustdoc-item-7411) — The values the menus are built from: the frame's snapshot, the selection

### Enums
- [`Menu`](enum.Menu.md#rustdoc-item-7361) — One menu of the bar. The variants are in the order the titles are drawn.
- [`MenuAction`](enum.MenuAction.md#rustdoc-item-7440) — What a menu item asks the editor to do, as plain data.
- [`MenuEntry`](enum.MenuEntry.md#rustdoc-item-7444) — One row of a menu: a separator or an item a click can act on.

### Functions
- [`action_for`](fn.action_for.md#rustdoc-item-7525) — Returns what running one registered command asks the editor to do.
- [`entries`](fn.entries.md#rustdoc-item-7524) — Returns the entries of `menu`: one row per registered command whose menu
- [`mark_rect`](fn.mark_rect.md#rustdoc-item-7523) — Returns the mark's rectangle in a bar `bar_height` points tall. The
- [`menu_entry_for_command`](fn.menu_entry_for_command.md#rustdoc-item-7528) — Returns one row for one registered command: its label, and what a click
- [`menu_row_for_toolbox_item`](fn.menu_row_for_toolbox_item.md#rustdoc-item-7531) — Returns a toolbox row as menu data: the label it shows for the current
- [`play_title`](fn.play_title.md#rustdoc-item-7529) — The play control's label for a run mode: what pressing it does.
- [`play_toggle_command`](fn.play_toggle_command.md#rustdoc-item-7530) — The command the play control queues: start a session or stop the one that
- [`selected_scene_path`](fn.selected_scene_path.md#rustdoc-item-7526) — Returns the `.scene` asset the Assets tab has selected, as the path Open

### Constants
- [`MENU_BAR_HEIGHT`](constant.MENU_BAR_HEIGHT.md#rustdoc-item-7350) — The bar's height in points, tall enough for one row of menu buttons and
- [`MENU_MARK_GAP`](constant.MENU_MARK_GAP.md#rustdoc-item-7353) — The gap between the mark and the first title.
- [`MENU_MARK_LEFT`](constant.MENU_MARK_LEFT.md#rustdoc-item-7352) — The gap between the bar's left edge and the mark.
- [`MENU_MARK_SIDE`](constant.MENU_MARK_SIDE.md#rustdoc-item-7351) — The mark's side length in points.
- [`MENU_TITLE_COUNT`](constant.MENU_TITLE_COUNT.md#rustdoc-item-7354) — How many titles the bar carries.
