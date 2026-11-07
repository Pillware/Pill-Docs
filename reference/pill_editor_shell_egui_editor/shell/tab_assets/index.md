<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-833"></a>

# Module `pill_editor_shell_egui_editor::shell::tab_assets`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_assets.rs:1`

The [`tab_assets`](#rustdoc-item-833) module: the assets tab: the folder tree and the open folder's grid.
The Assets tab: the folder tree, the open folder's grid, and the bars
around them.

## Responsibilities

- [`assets_tab`](fn.assets_tab.md#rustdoc-item-826): the tab's body, its count row and the panes inside it.
- [`assets_tree`](fn.assets_tree.md#rustdoc-item-828) and [`folder_tree_rows`](fn.folder_tree_rows.md#rustdoc-item-829): the folder rows, their carets
  and the drag targets.
- [`assets_path_bar`](fn.assets_path_bar.md#rustdoc-item-830), [`assets_zoom_bar`](fn.assets_zoom_bar.md#rustdoc-item-831) and [`assets_grid`](fn.assets_grid.md#rustdoc-item-832): the path
  strip, the item count with the tile size slider, and the tiles.

## Design

The two `use` lines below name this crate by its package path. A hot patch
builds a patch crate that replays this file's opening lines exactly as they
are, so an import written any other way would not resolve there.

## Module contents

### Functions
- [`assets_grid`](fn.assets_grid.md#rustdoc-item-832) — Draws the open folder's tiles: its folders first, then its files, each an
- [`assets_path_bar`](fn.assets_path_bar.md#rustdoc-item-830) — Draws the path strip over the grid: the asset root, then one segment per
- [`assets_tab`](fn.assets_tab.md#rustdoc-item-826) — Draws the Assets tab: Unity's project panel. A folder tree sits on the
- [`assets_tree`](fn.assets_tree.md#rustdoc-item-828) — Draws the Assets tab's folder tree: the panel's two roots - the project's
- [`assets_zoom_bar`](fn.assets_zoom_bar.md#rustdoc-item-831) — Draws the strip under the grid: how many items the open folder lists
- [`folder_tree_rows`](fn.folder_tree_rows.md#rustdoc-item-829) — Draws one level of the folder tree: a row per folder directly under

### Constants
- [`ASSETS_TREE_CARET_SIZE`](constant.ASSETS_TREE_CARET_SIZE.md#rustdoc-item-825) — The caret glyph's size, in points.
- [`ASSETS_TREE_CARET_WIDTH`](constant.ASSETS_TREE_CARET_WIDTH.md#rustdoc-item-824) — The width a row's caret slot takes, in points: either the caret, or the
- [`ASSETS_TREE_INDENT`](constant.ASSETS_TREE_INDENT.md#rustdoc-item-823) — The indent one tree level adds, in points.
- [`ASSETS_TREE_WIDTH`](constant.ASSETS_TREE_WIDTH.md#rustdoc-item-820) — The width the tree pane starts at, in points.
- [`ASSETS_TREE_WIDTH_RANGE`](constant.ASSETS_TREE_WIDTH_RANGE.md#rustdoc-item-821) — The widths the splitter drags the tree pane through, in points.
