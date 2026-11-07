<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-569"></a>

# Module `pill_editor_core::browser`

Source: `editor\pill_editor_core\src\browser.rs:1`

The Assets tab's project browser: the open folder and the listing rules the
tree and the grid share.
The Assets tab's project browser: the folder the grid lists, the folders
the tree has open, and the listing helpers the panes use.

## Responsibilities

- [`ProjectBrowser`]: the browser's session state - the folder the grid
  lists, the folders the tree shows open, and the tile size the grid
  draws.
- The panel's roots ([`ROOTS`], [`is_root`], [`root_of`]): the project's
  own tree, and every extension's read-only resources beside it.
- The listing helpers the panes use: [`children`], [`child_folders`],
  [`breadcrumb`], [`parent_folder`], [`file_name`] and [`tile_columns`].
- [`drop_folder_relative`]: where a dropped file goes, checked so a
  folder outside the asset directory is refused instead of joined.

## Design

The snapshot lists every file and folder in one flat list of
[`AssetListing`] rows. Each row names the root it came from and its path
inside that root, so both panes build what they show from the same list:
the tree walks the folder rows, the grid keeps the open folder's direct
children, and the breadcrumb cuts the open folder's path into segments.
A row whose key is a root is never listed as another row's child, so the
extensions' rows reach the tree only through their own root row. Nothing
here touches egui or the disk, which lets the tree, the grid, the
breadcrumb and the scripted channel agree on one state.

## Module contents

### Structs
- [`AssetRoot`](struct.AssetRoot.md#rustdoc-item-460) — One root of the Assets panel: the key that opening its row sets, and the
- [`ProjectBrowser`](struct.ProjectBrowser.md#rustdoc-item-512) — The Assets tab's project browser: the state both panes share.

### Functions
- [`breadcrumb`](fn.breadcrumb.md#rustdoc-item-565) — Builds the breadcrumb of `folder`: the root it belongs to, then one
- [`child_folders`](fn.child_folders.md#rustdoc-item-564) — Returns the direct child folders of `folder`, in the order [`children`]
- [`children`](fn.children.md#rustdoc-item-563) — Returns the direct children of `folder`: folders first, then files, each
- [`drop_folder_relative`](fn.drop_folder_relative.md#rustdoc-item-567) — Returns the folder a drop lands in, relative to the asset root, from the
- [`file_name`](fn.file_name.md#rustdoc-item-561) — Returns a path's own name: its last `/`-separated segment.
- [`is_direct_child`](fn.is_direct_child.md#rustdoc-item-562) — Returns whether `path` is a direct child of `folder`. The empty folder is
- [`is_folder`](fn.is_folder.md#rustdoc-item-559) — Returns whether a row is a folder: the one kind the tree and the grid treat
- [`is_root`](fn.is_root.md#rustdoc-item-556) — Returns whether `key` is one of the panel's roots.
- [`parent_folder`](fn.parent_folder.md#rustdoc-item-560) — Returns the folder a path lives in: its parent, or empty for the asset
- [`root_of`](fn.root_of.md#rustdoc-item-558) — Returns the root `folder` belongs to: the extensions root for everything
- [`sort_rows`](fn.sort_rows.md#rustdoc-item-568) — Sorts rows with folders first, then by name without regard to case.
- [`tile_columns`](fn.tile_columns.md#rustdoc-item-566) — Returns how many tiles fit across `available_width` points when each cell

### Constants
- [`DEFAULT_TILE_SIZE`](constant.DEFAULT_TILE_SIZE.md#rustdoc-item-461) — The tile size the grid starts at, in points.
- [`ROOT_LABEL`](constant.ROOT_LABEL.md#rustdoc-item-458) — The label of the project's root row. Inside the project's tree it is also
- [`ROOTS`](constant.ROOTS.md#rustdoc-item-459) — The panel's roots, in the order the tree draws them: the project's own
- [`TILE_SIZE_RANGE`](constant.TILE_SIZE_RANGE.md#rustdoc-item-462) — The tile sizes the grid's slider spans, in points.
