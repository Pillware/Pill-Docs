<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5200"></a>

# Module `pill_editor_core::layout::dock`

Visibility: `{'restricted': {'parent': 5266, 'path': '::layout'}}` · Source: `editor\pill_editor_core\src\layout\dock.rs:1`

The editor's tabs and the default dock layout.

## Responsibilities

- [`EditorTab`](enum.EditorTab.md#rustdoc-item-5139): the editor's built-in tabs - the scene views' and the
  game viewport's placeholders, entities, systems, inspector, assets,
  console, problems, statistics and preferences - with their titles and
  wire names.
- [`EditorDock`](struct.EditorDock.md#rustdoc-item-5205): the `egui_dock` state with the default layout (the
  scene and game views in the center, the entity column on the left, the
  inspector above the system column on the right, the assets row below),
  the schema version its documents carry, and
  [`EditorDock::settled`](struct.EditorDock.md#rustdoc-item-5223), which replaces the placeholder rectangles of a
  layout that has not been drawn yet with finite ones.
- [`activate_tab`](fn.activate_tab.md#rustdoc-item-5265): bringing a tab to the front of its group, for the
  Window menu and the scripted `tab` command.

## Design

The dock state is the shell's long-lived state, so it lives in the shared
core crate rather than the reloadable shell module. A reload of the shell
then finds the layout exactly where the user left it, and persistence
carries it across restarts.

## Module contents

### Structs
- [`EditorDock`](struct.EditorDock.md#rustdoc-item-5205) — The editor's dock: an `egui_dock` state with the editor's default

### Enums
- [`EditorTab`](enum.EditorTab.md#rustdoc-item-5139) — One tab of the egui editor.

### Functions
- [`activate_tab`](fn.activate_tab.md#rustdoc-item-5265) — Brings `tab` to the front of its group and reports whether the dock held
- [`finite_rect`](fn.finite_rect.md#rustdoc-item-5264) — Returns `rect`, or a zero rect when it still holds the placeholder

### Constants
- [`BOTTOM_ROW_FRACTION`](constant.BOTTOM_ROW_FRACTION.md#rustdoc-item-5124) — The fraction of the window's height the bottom row takes in the default
- [`INSPECTOR_COLUMN_FRACTION`](constant.INSPECTOR_COLUMN_FRACTION.md#rustdoc-item-5125) — The fraction of the right column's height the Inspector takes in the
- [`SIDE_COLUMN_FRACTION`](constant.SIDE_COLUMN_FRACTION.md#rustdoc-item-5123) — The fraction of the window's width one side column takes in the default
