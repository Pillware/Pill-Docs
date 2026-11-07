<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-885"></a>

# Module `pill_editor_shell_egui_editor::shell::assets_tiles`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\assets_tiles.rs:1`

The [`assets_tiles`](#rustdoc-item-885) module: the assets tab's tiles, their menu and the asset dialog.
The Assets tab's tiles: what a tile draws, the menus it offers and the
create and rename dialog.

## Responsibilities

- [`asset_tile`](fn.asset_tile.md#rustdoc-item-848): one grid tile - its preview or icon, its wrapped name, the
  highlight behind a selected or hovered tile, and the clicks, menu and
  drags it answers.
- [`asset_icon`](fn.asset_icon.md#rustdoc-item-877), [`asset_type_icon`](fn.asset_type_icon.md#rustdoc-item-878) and [`tile_name_job`](fn.tile_name_job.md#rustdoc-item-879): the icon a row
  draws and the layout of its name.
- [`asset_menu_items`](fn.asset_menu_items.md#rustdoc-item-883) and [`asset_container_menu`](fn.asset_container_menu.md#rustdoc-item-882): the menus a file tile
  and a container offer.
- [`asset_dialog_window`](fn.asset_dialog_window.md#rustdoc-item-884): the create and rename dialogs.
- [`remember_tile_rect`], [`remember_tree_row_rect`](fn.remember_tree_row_rect.md#rustdoc-item-875) and
  [`remember_pane_rect`](fn.remember_pane_rect.md#rustdoc-item-876): the rectangles a test suite aims a drag or a
  right-click at.
- [`AssetTileWrites`](struct.AssetTileWrites.md#rustdoc-item-827): the handles a tile writes through.
- The tile metrics: the cell padding, the name band, the icon inset, the
  highlight's corner radius, the name's row count and the preview's badge.

## Design

The globs below are absolute paths, so a patch crate resolves them too.

## Module contents

### Structs
- [`AssetTileWrites`](struct.AssetTileWrites.md#rustdoc-item-827) — The handles a grid tile writes through: the selection a click moves, the

### Functions
- [`asset_container_menu`](fn.asset_container_menu.md#rustdoc-item-882) — Draws the menu a container offers: the grid's empty strip and a folder tile.
- [`asset_dialog_window`](fn.asset_dialog_window.md#rustdoc-item-884) — Draws the create or rename dialog over the dock while one is open.
- [`asset_icon`](fn.asset_icon.md#rustdoc-item-877) — Returns the icon a row's tile draws: a folder icon, an asset type's icon by
- [`asset_menu_items`](fn.asset_menu_items.md#rustdoc-item-883) — Draws the menu a file tile offers: rename and delete. Creating an asset and
- [`asset_tile`](fn.asset_tile.md#rustdoc-item-848) — Draws one grid tile: its preview or type icon, its wrapped name, the
- [`asset_type_icon`](fn.asset_type_icon.md#rustdoc-item-878) — Returns the icon for an asset type, matched by its last type-name segment. A
- [`remember_pane_rect`](fn.remember_pane_rect.md#rustdoc-item-876) — Logs the grid pane's rectangle each time it moves: the area where a
- [`remember_tile_rect`](fn.remember_tile_rect.md#rustdoc-item-874) — Logs a tile's rectangle each time it moves, so a test suite can drag a file
- [`remember_tree_row_rect`](fn.remember_tree_row_rect.md#rustdoc-item-875) — Logs a folder tree row's rectangle each time it moves, keyed by the folder,
- [`tile_name_job`](fn.tile_name_job.md#rustdoc-item-879) — Returns the layout job for a tile's name: wrapped to

### Constants
- [`ASSETS_TILE_BADGE_SIZE`](constant.ASSETS_TILE_BADGE_SIZE.md#rustdoc-item-840) — The width and height of the type icon a finished preview keeps in its
- [`ASSETS_TILE_CORNER_RADIUS`](constant.ASSETS_TILE_CORNER_RADIUS.md#rustdoc-item-838) — The corner radius of the highlight behind a selected or hovered tile, in
- [`ASSETS_TILE_GAP`](constant.ASSETS_TILE_GAP.md#rustdoc-item-834) — The horizontal padding inside a tile's cell, in points.
- [`ASSETS_TILE_ICON_INSET`](constant.ASSETS_TILE_ICON_INSET.md#rustdoc-item-837) — The inset between a tile's cell edge and its icon, in points.
- [`ASSETS_TILE_LABEL_GAP`](constant.ASSETS_TILE_LABEL_GAP.md#rustdoc-item-836) — The gap between a tile's icon and its name, in points.
- [`ASSETS_TILE_LABEL_HEIGHT`](constant.ASSETS_TILE_LABEL_HEIGHT.md#rustdoc-item-835) — The band under a tile's icon that holds its name, in points.
- [`ASSETS_TILE_LABEL_ROWS`](constant.ASSETS_TILE_LABEL_ROWS.md#rustdoc-item-839) — The rows a tile's name may wrap to before it gets an ellipsis; Unity's tiles
