<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-565"></a>

# Module `pill_editor_shell_egui_editor::shell::tab_entities`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_entities.rs:1`

The [`tab_entities`](#rustdoc-item-565) module: the entities tab: the entity rows and their menu.
The Entities tab: the entity rows and their menu.

## Responsibilities

- `DraggedEntity`: the drag payload a row carries to an Inspector
  entity-reference field.
- `entity_rows` and `entity_row_label`: the rows the tab lists, from the
  snapshot's entity list.
- `entity_row_height`: the one height every row has.
- `entities_tab`: the rows on screen with their selection and context
  menus, and the empty strip below the last one.
- `entity_menu_items`: the row menu's create and delete actions.
- `remember_hierarchy_row_rect`: each row's rectangle, logged for the suites.

## Design

Both globs below are absolute paths. A generated patch crate replays this
file's top-level `use` lines, and a `super::`-relative glob would have
nothing to point at there.

## Module contents

### Structs
- [`DraggedEntity`](struct.DraggedEntity.md#rustdoc-item-513) — The payload an Entities row drags onto an Inspector entity-reference

### Functions
- [`entities_tab`](fn.entities_tab.md#rustdoc-item-564) — Draws the Entities tab: one row per live entity, then an empty strip that
- [`entity_menu_items`](fn.entity_menu_items.md#rustdoc-item-563) — Adds the entity menu's rows to `ui` and queues the recorded edit of the one
- [`entity_row_height`](fn.entity_row_height.md#rustdoc-item-562) — The height of one Entities row, without the spacing between rows.
- [`entity_row_label`](fn.entity_row_label.md#rustdoc-item-561) — The label one Entities row shows: the display name and the number of
- [`entity_rows`](fn.entity_rows.md#rustdoc-item-560) — Returns one row per live entity, for the Entities tab.
- [`remember_hierarchy_row_rect`](fn.remember_hierarchy_row_rect.md#rustdoc-item-559) — Record an Entities row's rectangle in the shell's session.
